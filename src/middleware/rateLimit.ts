import { Context, Next } from 'hono';
import type { Env } from '../types';

/**
 * Rate limit configuration
 */
export interface RateLimitConfig {
	/** Maximum number of requests allowed in the time window */
	MAX_REQUESTS: number;
	/** Time window in seconds */
	WINDOW_SECONDS: number;
}

/**
 * Default rate limit settings
 */
const DEFAULT_RATE_LIMIT: RateLimitConfig = {
	MAX_REQUESTS: 100,
	WINDOW_SECONDS: 3600 // 1 hour
};

/**
 * Creates a rate limiter middleware using Upstash Redis
 * 
 * @param config - Rate limit configuration
 * @returns Hono middleware function
 */
export function rateLimit(config: Partial<RateLimitConfig> = {}) {
	const RATE_LIMIT: RateLimitConfig = {
		...DEFAULT_RATE_LIMIT,
		...config
	};

	return async (c: Context<{ Bindings: Env }>, next: Next) => {
		// Generate a unique ID for this request
		const requestId = crypto.randomUUID();
		c.header('X-Request-ID', requestId);

		// Get client IP address
		const clientIP = c.req.header('cf-connecting-ip') ||
			c.req.header('x-forwarded-for') ||
			'unknown';

		// Check rate limit
		const rateLimitKey = `ratelimit:${clientIP}`;
		const redis = c.env.REDIS;

		try {
			// Get current request count
			const requestCount = await redis.incr(rateLimitKey);

			// If this is the first request, set expiry
			if (requestCount === 1) {
				// The expire method returns 1 if the timeout was set, 0 if the key doesn't exist or timeout couldn't be set
				const expiryResult = await redis.expire(rateLimitKey, RATE_LIMIT.WINDOW_SECONDS);
				if (expiryResult === 0) {
					console.warn(`Failed to set expiry for rate limit key: ${rateLimitKey}`);
				}
			}

			// Get TTL for the rate limit key
			const ttl = await redis.ttl(rateLimitKey);
			const remainingRequests = Math.max(0, RATE_LIMIT.MAX_REQUESTS - requestCount);
			const resetTime = Math.floor(Date.now() / 1000) + ttl;

			// Set rate limit headers
			c.header('X-RateLimit-Limit', RATE_LIMIT.MAX_REQUESTS.toString());
			c.header('X-RateLimit-Remaining', remainingRequests.toString());
			c.header('X-RateLimit-Reset', resetTime.toString());

			// Check if rate limit exceeded
			if (requestCount > RATE_LIMIT.MAX_REQUESTS) {
				return c.json({
					success: false,
					message: "Rate limit exceeded",
					requestId,
					resetIn: ttl,
					limitPerHour: RATE_LIMIT.MAX_REQUESTS
				}, 429); // Too Many Requests
			}

			// Continue to the next middleware/handler
			await next();
		} catch (error) {
			console.error('Rate limiting error:', error);
			// Continue to the next middleware even if rate limiting fails
			await next();
		}
	};
} 