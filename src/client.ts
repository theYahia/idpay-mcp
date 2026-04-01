const BASE_URL = "https://api.idpay.ir/v1.1";
const TIMEOUT = 15_000;

export class IdpayClient {
  private apiKey: string;
  private sandbox: boolean;

  constructor() {
    this.apiKey = process.env.IDPAY_API_KEY ?? "";
    this.sandbox = process.env.IDPAY_SANDBOX === "1" || process.env.IDPAY_SANDBOX === "true";
    if (!this.apiKey) {
      throw new Error(
        "Environment variable IDPAY_API_KEY is required. " +
        "Get your API key at https://idpay.ir/dashboard/"
      );
    }
  }

  async request(method: string, path: string, body?: unknown): Promise<unknown> {
    const url = `${BASE_URL}${path}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT);

    const headers: Record<string, string> = {
      "X-API-KEY": this.apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    if (this.sandbox) {
      headers["X-SANDBOX"] = "1";
    }

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });
      clearTimeout(timer);

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`IDPay HTTP ${response.status}: ${text}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        return response.json();
      }
      return { status: response.status, message: await response.text() };
    } catch (error) {
      clearTimeout(timer);
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("IDPay: request timeout (15s). Try again later.");
      }
      throw error;
    }
  }

  async post(path: string, body: unknown): Promise<unknown> {
    return this.request("POST", path, body);
  }

  async get(path: string): Promise<unknown> {
    return this.request("GET", path);
  }

  async del(path: string, body?: unknown): Promise<unknown> {
    return this.request("DELETE", path, body);
  }
}
