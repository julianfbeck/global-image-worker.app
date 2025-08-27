// Telegram notification service for error reporting
// This service sends error messages to a Telegram channel when image processing failures occur

interface TelegramMessage {
  chat_id: string;
  text: string;
  parse_mode?: string;
}

class TelegramService {
  // Hardcoded credentials as requested
  private readonly botToken = '5561742884:AAEaG0XCncwzbUt5NRunlEpqfneB1OD6xVA';
  private readonly chatId = '885966540'; // Channel/chat ID
  private readonly baseUrl = `https://api.telegram.org/bot${this.botToken}`;

  async sendErrorNotification(error: string, context?: string): Promise<void> {
    try {
      const timestamp = new Date().toISOString();
      const message = this.formatErrorMessage(error, context, timestamp);
      
      const payload: TelegramMessage = {
        chat_id: this.chatId,
        text: message
      };

      const response = await fetch(`${this.baseUrl}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Failed to send Telegram notification:', {
          status: response.status,
          statusText: response.statusText,
          body: errorData
        });
      } else {
        console.log('Telegram error notification sent successfully');
      }
    } catch (err) {
      console.error('Error sending Telegram notification:', err);
      // Don't throw here to avoid cascading failures
    }
  }

  private formatErrorMessage(error: string, context?: string, timestamp: string): string {
    let message = '🚨 Image Processing Error\n\n';
    message += `⏰ Time: ${timestamp}\n`;
    message += `❌ Error: ${error}\n`;
    
    if (context) {
      message += `📝 Context: ${context}\n`;
    }
    
    message += '\n#image_processing #error';
    
    return message;
  }

  async sendProcessingFailure(
    errorMessage: string, 
    requestId?: string,
    userID?: string,
    imageKey?: string
  ): Promise<void> {
    const context = [
      requestId ? `Request ID: ${requestId}` : null,
      userID ? `User ID: ${userID}` : null,
      imageKey ? `Image Key: ${imageKey}` : null
    ].filter(Boolean).join(', ');

    await this.sendErrorNotification(errorMessage, context);
  }

  async sendImageRetrievalFailure(imageKey: string, requestId: string): Promise<void> {
    await this.sendProcessingFailure(
      'Image not found in R2 storage',
      requestId,
      undefined,
      imageKey
    );
  }

  async sendImageAnalysisFailure(error: string, requestId: string, userID: string): Promise<void> {
    await this.sendProcessingFailure(
      `Image analysis failed: ${error}`,
      requestId,
      userID
    );
  }

  async sendImageGenerationFailure(error: string, requestId: string, userID: string, service: 'gemini' | 'openai'): Promise<void> {
    await this.sendProcessingFailure(
      `${service.toUpperCase()} image generation failed: ${error}`,
      requestId,
      userID
    );
  }

  async sendImageStorageFailure(error: string, requestId: string, userID: string): Promise<void> {
    await this.sendProcessingFailure(
      `Failed to store processed image: ${error}`,
      requestId,
      userID
    );
  }

  async sendRateLimitError(service: 'gemini' | 'openai', requestId: string, userID: string): Promise<void> {
    await this.sendProcessingFailure(
      `${service.toUpperCase()} rate limit hit - request will be retried`,
      requestId,
      userID
    );
  }
}

export const telegramService = new TelegramService();