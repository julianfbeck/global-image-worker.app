import { Hono } from 'hono'
// import * as Sentry from "@sentry/cloudflare";
import type { Env } from './types';
import coloringBook from './routes/coloring-book';
import defaultPage from './routes/default';
import { ImageQueueConsumer } from './consumer/consumer';
import { rateLimit } from './middleware/rateLimit';
import { createRedisClient } from './util/createRedisClient';

const app = new Hono<{ Bindings: Env }>()

// Add middleware to initialize Redis client
app.use('*', async (c, next) => {
  // Create Redis client and attach to the environment
  c.env.REDIS = createRedisClient(c.env);
  await next();
});

// Apply rate limiting to all routes that need it
// You can configure different rate limits for different routes
app.use('/v1/*', rateLimit({
  MAX_REQUESTS: 100,
  WINDOW_SECONDS: 3600
}));

// Mount the default page routes
app.route('/', defaultPage);

// Mount the coloring-book routes under /coloring-book
app.route('/coloring-book', coloringBook);

// Create queue consumer instance
const imageQueueConsumer = new ImageQueueConsumer(null as unknown as Queue);

export default {
  fetch: app.fetch,
  // Export the queue consumer
  queue: imageQueueConsumer.processMessage.bind(imageQueueConsumer)
};