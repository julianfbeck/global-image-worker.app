// @ts-ignore: Node.js native module
import { Readable } from "stream";
// @ts-ignore: Node.js native module
import { Buffer } from "buffer";
import OpenAI, { toFile } from "openai";

export class OpenAIService {
	private client: OpenAI;

	constructor(apiKey?: string) {
		this.client = apiKey ? new OpenAI({ apiKey }) : new OpenAI();
	}

	/**
	 * Processes an image by editing it based on a prompt using OpenAI images.edit.
	 *
	 * @param imageData - The image data as an ArrayBuffer.
	 * @param mimeType - The MIME type of the image (e.g. "image/png").
	 * @param prompt - The prompt describing how to edit the image.
	 * @returns The edited image as an ArrayBuffer.
	 */
	async processImage(
		imageData: ArrayBuffer,
		mimeType: string,
		prompt: string
	): Promise<ArrayBuffer> {
		// Convert ArrayBuffer to Buffer and create a readable stream
		const buffer = Buffer.from(imageData);
		const stream = Readable.from(buffer);

		// Prepare the file for OpenAI
		const imageFile = await toFile(stream, null, { type: mimeType });

		// Call the OpenAI images.edit endpoint
		const response = await this.client.images.edit({
			model: "gpt-image-1",
			image: imageFile,
			prompt,
			quality: "low",
			n: 1,
		});

		if (!response.data || response.data.length === 0 || !response.data[0].b64_json) {
			throw new Error("No image data in OpenAI response");
		}
		const base64 = response.data[0].b64_json;

		const imgBuffer = Buffer.from(base64, "base64");
		// Properly convert Buffer to ArrayBuffer
		const arrayBuffer = imgBuffer.buffer.slice(
			imgBuffer.byteOffset,
			imgBuffer.byteOffset + imgBuffer.byteLength
		);

		return arrayBuffer;
	}
}

export function createOpenAIService(apiKey?: string): OpenAIService {
	return new OpenAIService(apiKey);
}
