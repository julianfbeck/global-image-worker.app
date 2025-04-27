export interface Env {
	KV: KVNamespace;
	IMAGES: R2Bucket;
	IMAGE_QUEUE: Queue;
	OPENAI_API_KEY: string;
	UPSTASH_REDIS_REST_URL: string;
	UPSTASH_REDIS_REST_TOKEN: string;
	GOOGLE_API_KEY: string;
	REDIS: {
		incr(key: string): Promise<number>;
		expire(key: string, seconds: number): Promise<0 | 1>;
		ttl(key: string): Promise<number>;
		get(key: string): Promise<string | null>;
		set(key: string, value: string, options?: any): Promise<string | null>;
		del(key: string): Promise<number>;
	}
}

/**
 * Message structure for the image processing queue
 */
export interface QueueMessage {
	image: {
		key: string;  // R2 object key
		mime_type: string;
	};
	styleID: string;
	userID: string;
	timestamp: number;
	requestId: string;
	useOpenAI: boolean;
} 