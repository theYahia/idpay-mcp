import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const getLinkSchema = z.object({
  link_id: z.string().describe("Payment link ID"),
});

export async function handleGetLink(params: z.infer<typeof getLinkSchema>): Promise<string> {
  const result = await getClient().post("/payment/link/show", {
    id: params.link_id,
  });
  return JSON.stringify(result, null, 2);
}
