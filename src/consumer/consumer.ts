import { Queue } from '@cloudflare/workers-types';
import type { Env } from '../types';

export class ImageQueueConsumer {
	constructor(private readonly queue: Queue) { }

	async processMessage(batch: MessageBatch<{ image: string }>, env: Env): Promise<void> {
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
			}
		}
	}
} 