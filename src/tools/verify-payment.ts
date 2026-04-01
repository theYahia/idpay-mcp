import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const verifyPaymentSchema = z.object({
  id: z.string().describe("Payment ID from IDPay"),
  order_id: z.string().describe("Your order ID"),
});

export async function handleVerifyPayment(params: z.infer<typeof verifyPaymentSchema>): Promise<string> {
  const result = await getClient().post("/payment/verify", {
    id: params.id,
    order_id: params.order_id,
  });
  return JSON.stringify(result, null, 2);
}
