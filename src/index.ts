import { Hono } from 'hono'
import * as Sentry from "@sentry/cloudflare";
import type { Env } from './types';
import coloringBook from './routes/coloring-book';
import { ImageQueueConsumer } from './consumer/consumer';

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Mount the coloring-book routes under /coloring-book
app.route('/coloring-book', coloringBook);

// Create queue consumer instance
const imageQueueConsumer = new ImageQueueConsumer(null as unknown as Queue);

export default {
  fetch: Sentry.withSentry(
    (env) => ({
      dsn: "https://5384d01e53cb7e5e8c0b433472ac4f57@o310344.ingest.us.sentry.io/4509105995972608",
    }),
    app
  ).fetch,
  // Export the queue consumer
  queue: imageQueueConsumer.processMessage.bind(imageQueueConsumer)
};