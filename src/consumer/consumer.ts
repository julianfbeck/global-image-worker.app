import { Redis } from '@upstash/redis';
import { Queue, MessageBatch } from '@cloudflare/workers-types';
import { generatePrompt } from '../services/promptGenerator';
import { createGeminiService } from '../services/geminiService';
import type { Env } from '../types';

interface QueueMessage {
	image: {
		key: string;  // R2 object key
		mime_type: string;
	};
	styleID: string;
	userID: string;
	timestamp: number;
	requestId: string;
}

export class ImageQueueConsumer {
	constructor(private readonly queue: Queue) { }

	async processMessage(batch: MessageBatch<QueueMessage>, env: Env): Promise<void> {
		// Initialize Redis client
		const redis = new Redis({
			url: env.UPSTASH_REDIS_REST_URL,
			token: env.UPSTASH_REDIS_REST_TOKEN,
		});

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

		// Process each message in the batch
		for (const message of batch.messages) {
			try {
				console.log(`Processing request ${message.body.requestId}`);

				// Update state to processing
				await redis.set(message.body.requestId, "processing");

				// Fetch the image from R2
				const imageObject = await env.IMAGES.get(message.body.image.key);
				if (!imageObject) {
					console.error(`Image not found in R2: ${message.body.image.key}`);
					await redis.set(message.body.requestId, "failed");
					message.ack();
					continue;
				}

				// Get the image data as an ArrayBuffer
				const imageData = await imageObject.arrayBuffer();

				// Create Gemini service for both image analysis and generation
				const geminiService = createGeminiService(env.GOOGLE_API_KEY);

				// Analyze the image using Gemini
				const imageContext = await geminiService.analyzeImage(imageData, message.body.image.mime_type);
				console.log(imageContext);

				// Generate the appropriate prompt based on styleID and image context
				const prompt = generatePrompt(message.body.styleID, imageContext);

				// Process the image with Gemini
				console.log('Processing image with Gemini...');
				const processedImageData = await geminiService.processImage(
					imageData,
					message.body.image.mime_type,
					prompt
				);

				// Store the processed image in R2
				const processedImageKey = `processed/${message.body.requestId}.png`;
				await env.IMAGES.put(processedImageKey, processedImageData, {
					httpMetadata: {
						contentType: 'image/png' // Gemini always returns PNG
					}
				});

				// Update state to completed
				await redis.set(message.body.requestId, "completed");

				// Acknowledge the message after successful processing
				message.ack();
			} catch (error) {
				console.error(`Error processing message ${message.body.requestId}:`, error);

				// Check if this is a rate limit error from Gemini
				if (error instanceof Error && (
					error.name === 'GeminiRateLimitError' ||
					(error.message && error.message.includes('429'))
				)) {
					console.log(`Rate limit hit for request ${message.body.requestId}, will retry automatically`);
					// Don't acknowledge the message - this will cause it to be retried
					message.retry();
				} else {
					// For other errors, mark as failed and acknowledge
					await redis.set(message.body.requestId, "failed");
					await redis.expire(message.body.requestId, 60 * 60 * 24);
					message.ack();
					failedMessages++;
				}
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