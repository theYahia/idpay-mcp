import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const deleteLinkSchema = z.object({
  link_id: z.string().describe("Payment link ID to delete"),
});

export async function handleDeleteLink(params: z.infer<typeof deleteLinkSchema>): Promise<string> {
  const result = await getClient().del("/payment/link/delete", {
    id: params.link_id,
  });
  return JSON.stringify(result, null, 2);
}
