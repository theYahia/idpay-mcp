import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const listLinksSchema = z.object({});

export async function handleListLinks(_params: z.infer<typeof listLinksSchema>): Promise<string> {
  const result = await getClient().post("/payment/link/list", {});
  return JSON.stringify(result, null, 2);
}
