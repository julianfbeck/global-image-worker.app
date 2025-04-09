export interface Env {
	KV: KVNamespace;
	IMAGES: R2Bucket;
	IMAGE_QUEUE: Queue;
	OPENAI_API_KEY: string;
	UPSTASH_REDIS_REST_URL: string;
	UPSTASH_REDIS_REST_TOKEN: string;
	GOOGLE_API_KEY: string;
} 