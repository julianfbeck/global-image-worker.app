import { Hono } from 'hono';
import type { Env, QueueMessage } from '../types';
import { rateLimit } from '../middleware/rateLimit';
import { z } from 'zod';

// Define schemas using Zod
const ImageDataSchema = z.object({
	data: z.string().min(1, "Image data is required"),
	mime_type: z.string().min(1, "Image MIME type is required")
});

const RequestBodySchema = z.object({
	image: ImageDataSchema,
	styleID: z.string().min(1, "Style ID is required"),
	userID: z.string().min(1, "User ID is required")
});

// Create a new Hono app instance for the museify group
const museify = new Hono<{ Bindings: Env }>();



// Apply special rate limiting for new image endpoint - 30 requests per hour
museify.use('/v1/new', rateLimit({
	MAX_REQUESTS: 5000, // 30 requests per hour
	WINDOW_SECONDS: 3600 // 1 hour
}));

// Define routes for the museify group
museify.get('/test', async (c) => {
	await c.env.IMAGE_QUEUE.send({ image: "test" })
	return c.json({
		message: 'Museify API',
		status: 'active'
	});
});

// New image processing endpoint
museify.post('/v1/new', async (c) => {
	// Generate a unique ID for this request
	const requestId = crypto.randomUUID();
	c.header('X-Request-ID', requestId);

	try {
		// Parse and validate the request body using Zod
		const rawBody = await c.req.json();
		const result = RequestBodySchema.safeParse(rawBody);
		const redis = c.env.REDIS;

		// If validation fails, return error response
		if (!result.success) {
			const errors = result.error.format();
			return c.json({
				success: false,
				message: "Validation failed",
				errors,
				requestId
			}, 400);
		}

		// Extract validated data
		const requestData = result.data;

		// Decode base64 image data
		const imageData = requestData.image.data.split(',')[1] || requestData.image.data;
		const binaryData = atob(imageData);
		const uint8Array = new Uint8Array(binaryData.length);
		for (let i = 0; i < binaryData.length; i++) {
			uint8Array[i] = binaryData.charCodeAt(i);
		}

		// Generate a unique key for the image in R2
		const imageKey = `${requestData.userID}/${requestId}`;

		// Upload the image to R2
		await c.env.IMAGES.put(imageKey, uint8Array, {
			httpMetadata: {
				contentType: requestData.image.mime_type
			}
		});

		// Store initial state in Redis
		await redis.set(requestId, "queued");

		// Create the message to be queued
		const message: QueueMessage = {
			image: {
				key: imageKey,
				mime_type: requestData.image.mime_type
			},
			styleID: requestData.styleID,
			userID: requestData.userID,
			timestamp: Date.now(),
			requestId
		};

		// Add the message to the image queue
		await c.env.IMAGE_QUEUE.send(message);

		// Return a success response with the request ID
		return c.json({
			success: true,
			message: "Museify image processing request queued successfully",
			requestId,
			imageKey,
			state: "queued"
		}, 202); // Accepted

	} catch (error) {
		console.error(`Error processing Museify request: ${error}`);

		try {
			// Try to delete the key from Redis if it exists
			await c.env.REDIS.del(requestId);
		} catch (redisError) {
			console.error(`Failed to delete Redis key: ${redisError}`);
		}

		return c.json({
			success: false,
			message: "Failed to queue Museify image processing request",
			error: error instanceof Error ? error.message : String(error),
			requestId,
			state: "failed"
		}, 500);
	}
});

// Status endpoint to check the status of image processing
museify.get('/v1/status/:requestId', async (c) => {
	const requestId = c.req.param('requestId');
	const redis = c.env.REDIS;

	if (!requestId) {
		return c.json({
			success: false,
			error: "Invalid status request"
		}, 400);
	}

	try {
		// Get the processing state from Redis
		const state = await redis.get(requestId);
		await redis.expire(requestId, 3600);

		if (!state) {
			return c.json({
				success: false,
				error: "Prediction not found"
			}, 404);
		}

		// If processing is still in the queue
		if (state === "queued" || state === "processing") {
			return c.json({
				success: true,
				data: {
					status: "pending"
				}
			});
		}

		// If processing failed
		if (state === "failed") {
			await c.env.REDIS.del(requestId);
			console.log("Deleted Redis key: ", requestId);
			return c.json({
				success: true,
				data: {
					status: "failed"
				}
			});
		}

		// If processing is completed
		if (state === "completed") {
			const processedImageKey = `processed/${requestId}.png`;
			const processedImage = await c.env.IMAGES.get(processedImageKey);

			if (!processedImage) {
				return c.json({
					success: true,
					data: {
						status: "pending"
					}
				});
			}

			// Generate image URL
			const imageUrl = `https://gemini.app.juli.sh/processed/${requestId}.png`;

			console.log(imageUrl);
			console.log("Successfully generated Museify image URL for requestId: ", requestId);

			// Return the processed image data

			return c.json({
				success: true,
				data: {
					status: "completed",
					id: requestId,
					url: imageUrl
				}
			});
		}

		// If we get here, it's an unknown state
		return c.json({
			success: true,
			data: {
				status: "pending"
			}
		});
	} catch (error) {
		console.error(`Error checking Museify status for request ${requestId}:`, error);
		return c.json({
			success: false,
			error: "Failed to check Museify status"
		}, 500);
	}
});

export default museify; 