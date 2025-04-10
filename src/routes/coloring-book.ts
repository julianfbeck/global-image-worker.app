import { Hono } from 'hono';
import type { Env } from '../types';


// Create a new Hono app instance for the coloring-book group
const coloringBook = new Hono<{ Bindings: Env }>();

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