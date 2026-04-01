import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const createPaymentSchema = z.object({
  order_id: z.string().describe("Unique order ID from your system"),
  amount: z.number().positive().describe("Payment amount in IRR (min 1000)"),
  callback: z.string().url().describe("Callback URL after payment"),
  description: z.string().optional().describe("Payment description"),
  name: z.string().optional().describe("Payer name"),
  phone: z.string().optional().describe("Payer phone number"),
  mail: z.string().email().optional().describe("Payer email"),
});

export async function handleCreatePayment(params: z.infer<typeof createPaymentSchema>): Promise<string> {
  const result = await getClient().post("/payment", {
    order_id: params.order_id,
    amount: params.amount,
    callback: params.callback,
    desc: params.description,
    name: params.name,
    phone: params.phone,
    mail: params.mail,
  });
  return JSON.stringify(result, null, 2);
}
