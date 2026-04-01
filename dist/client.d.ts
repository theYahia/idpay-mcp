export declare class IdpayClient {
    private apiKey;
    private sandbox;
    constructor();
    request(method: string, path: string, body?: unknown): Promise<unknown>;
    post(path: string, body: unknown): Promise<unknown>;
    get(path: string): Promise<unknown>;
    del(path: string, body?: unknown): Promise<unknown>;
}
