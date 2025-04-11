import { Hono } from 'hono';
import type { Env } from '../types';
import { rateLimit } from '../middleware/rateLimit';
import { createRedisClient } from '../util/createRedisClient';

// Create a new Hono app instance for the coloring-book group
const coloringBook = new Hono<{ Bindings: Env }>();

// Initialize Redis client
coloringBook.use('*', async (c, next) => {
	// Create Redis client and attach to the environment
	c.env.REDIS = createRedisClient(c.env);
	await next();
});

// Apply rate limiting with a more restrictive limit for coloring-book endpoints
coloringBook.use('*', rateLimit({
	MAX_REQUESTS: 50,
	WINDOW_SECONDS: 3600 // 1 hour
}));

// Define routes for the coloring-book group
coloringBook.get('/test', async (c) => {
	await c.env.IMAGE_QUEUE.send({ image: "test" })
	setTimeout(() => {
		throw new Error();
	});
	return c.json({
		message: 'Coloring Book API',
		status: 'active'
	});
});

export default coloringBook; 