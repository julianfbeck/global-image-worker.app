# Image Worker

Cloudflare Worker for image processing and transformation with Gemini API.

## Rate Limiting

The application includes a Redis-based rate limiting middleware:

- Rate limits are applied per client IP address
- Default limit is 100 requests per hour
- When limit is exceeded, returns 429 status with detailed response
- Adds X-RateLimit headers to all responses

To configure rate limits, modify the settings in `src/index.ts`:

```typescript
app.use('/v1/*', rateLimit({
  MAX_REQUESTS: 100,  // Maximum requests per time window
  WINDOW_SECONDS: 3600  // Time window in seconds (1 hour)
}));
```

Different routes can have different rate limits by applying the middleware multiple times.

npm install
npm run dev
```

```
npm run deploy
```
