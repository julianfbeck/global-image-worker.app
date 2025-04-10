import { Queue, MessageBatch } from '@cloudflare/workers-types';
import type { Env } from '../types';

export class ImageQueueConsumer {
	constructor(private readonly queue: Queue) { }

	async processMessage(batch: MessageBatch<{ image: string }>, env: Env): Promise<void> {
		// Get current date in YYYY-MM-DD format for daily stats
		const today = new Date().toISOString().split('T')[0];
		// Track failed messages in this batch
		let failedMessages = 0;
		let totalCount = 0;
		let dailyCount = 0;

		try {
			// Increment total processed count
			const totalCountStr = await env.KV.get('stats:total') || '0';
			totalCount = parseInt(totalCountStr) + batch.messages.length;
			await env.KV.put('stats:total', totalCount.toString());

			// Increment daily processed count
			const dailyCountStr = await env.KV.get(`stats:daily:${today}`) || '0';
			dailyCount = parseInt(dailyCountStr) + batch.messages.length;
			await env.KV.put(`stats:daily:${today}`, dailyCount.toString());

			// Track timestamp of last processed batch
			await env.KV.put('stats:lastProcessed', new Date().toISOString());
		} catch (error) {
			console.error('Error updating statistics:', error);
		}

		for (const message of batch.messages) {
			try {
				console.log('Received message from queue:', {
					messageId: message.id,
					body: message.body,
					timestamp: new Date().toISOString()
				});

				// Acknowledge the message
				message.ack();
			} catch (error) {
				console.error('Error processing message:', error);
				message.retry();
				failedMessages++;
			}
		}

		// Update failure statistics
		try {
			// Increment total failed count
			const totalFailedStr = await env.KV.get('stats:failed:total') || '0';
			const totalFailed = parseInt(totalFailedStr) + failedMessages;
			await env.KV.put('stats:failed:total', totalFailed.toString());

			// Increment daily failed count
			const dailyFailedStr = await env.KV.get(`stats:failed:daily:${today}`) || '0';
			const dailyFailed = parseInt(dailyFailedStr) + failedMessages;
			await env.KV.put(`stats:failed:daily:${today}`, dailyFailed.toString());

			// Calculate and store success ratio
			const totalSuccessful = totalCount - totalFailed;
			const successRatio = totalCount > 0 ? (totalSuccessful / totalCount) * 100 : 100;
			await env.KV.put('stats:successRatio', successRatio.toFixed(2));

			// Calculate and store daily success ratio
			const dailySuccessful = dailyCount - dailyFailed;
			const dailySuccessRatio = dailyCount > 0 ? (dailySuccessful / dailyCount) * 100 : 100;
			await env.KV.put(`stats:successRatio:daily:${today}`, dailySuccessRatio.toFixed(2));
		} catch (error) {
			console.error('Error updating failure statistics:', error);
		}
	}
} 