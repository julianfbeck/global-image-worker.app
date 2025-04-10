import { Hono } from 'hono'
// import * as Sentry from "@sentry/cloudflare";
import type { Env } from './types';
import coloringBook from './routes/coloring-book';
import { ImageQueueConsumer } from './consumer/consumer';

const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => {
  const env = c.env;

  try {
    // Fetch statistics from KV
    const totalCount = await env.KV.get('stats:total') || '0';
    const totalFailed = await env.KV.get('stats:failed:total') || '0';
    const successRatio = await env.KV.get('stats:successRatio') || '100.00';
    const lastProcessed = await env.KV.get('stats:lastProcessed') || 'Never';

    // Get last 7 days statistics
    const dailyStats = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const count = await env.KV.get(`stats:daily:${dateStr}`) || '0';
      const failed = await env.KV.get(`stats:failed:daily:${dateStr}`) || '0';
      const ratio = await env.KV.get(`stats:successRatio:daily:${dateStr}`) || '100.00';

      dailyStats.push({
        date: dateStr,
        count,
        failed,
        successRatio: ratio
      });
    }

    // Create simple HTML response
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Image Worker Statistics</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
              max-width: 800px;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            tr:nth-child(even) {
              background-color: #f9f9f9;
            }
          </style>
        </head>
        <body>
          <h1>Image Worker Statistics</h1>
          
          <h2>Overall Statistics</h2>
          <table>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>Total images processed</td>
              <td>${totalCount}</td>
            </tr>
            <tr>
              <td>Total failed</td>
              <td>${totalFailed}</td>
            </tr>
            <tr>
              <td>Total successful</td>
              <td>${parseInt(totalCount) - parseInt(totalFailed)}</td>
            </tr>
            <tr>
              <td>Success ratio</td>
              <td>${successRatio}%</td>
            </tr>
            <tr>
              <td>Last batch processed</td>
              <td>${lastProcessed}</td>
            </tr>
          </table>
          
          <h2>Daily Statistics (Last 7 Days)</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Total</th>
              <th>Failed</th>
              <th>Successful</th>
              <th>Success Ratio</th>
            </tr>
            ${dailyStats.map(stat => `
              <tr>
                <td>${stat.date}</td>
                <td>${stat.count}</td>
                <td>${stat.failed}</td>
                <td>${parseInt(stat.count) - parseInt(stat.failed)}</td>
                <td>${stat.successRatio}%</td>
              </tr>
            `).join('')}
          </table>
        </body>
      </html>
    `;

    return c.html(html);
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return c.text('Error fetching statistics', 500);
  }
})

// Mount the coloring-book routes under /coloring-book
app.route('/coloring-book', coloringBook);

// Create queue consumer instance
const imageQueueConsumer = new ImageQueueConsumer(null as unknown as Queue);

export default {
  fetch: app.fetch,
  // Export the queue consumer
  queue: imageQueueConsumer.processMessage.bind(imageQueueConsumer)
};