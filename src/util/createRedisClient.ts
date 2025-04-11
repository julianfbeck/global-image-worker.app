import { Redis } from '@upstash/redis';
import type { Env } from '../types';

/**
 * Creates a Redis client instance from environment variables
 * 
 * @param env - Environment variables containing Redis credentials
 * @returns Redis client instance
 */
export function createRedisClient(env: Env) {
	return new Redis({
		url: env.UPSTASH_REDIS_REST_URL,
		token: env.UPSTASH_REDIS_REST_TOKEN,
	});
} 