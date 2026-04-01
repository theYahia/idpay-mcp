import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client: IdpayClient | null = null;function getClient(): IdpayClient { if (!_client) _client = new IdpayClient(); return _client; }
export const listTransactionsSchema = z.object({
  page: z.number().min(0).default(0).describe("Page number (0-based)"),
  page_size: z.number().min(1).max(100).default(25).describe("Items per page"),
  date_from: z.string().optional().describe("Start date (Unix timestamp)"),
  date_to: z.string().optional().describe("End date (Unix timestamp)"),
});

export async function handleListTransactions(params: z.infer<typeof listTransactionsSchema>): Promise<string> {
  const body: Record<string, unknown> = {
    page: params.page,
    page_size: params.page_size,
  };
  if (params.date_from) body.date = { ...(body.date as object ?? {}), from: Number(params.date_from) };
  if (params.date_to) body.date = { ...(body.date as object ?? {}), to: Number(params.date_to) };
  const result = await getClient().post("/payment/transactions", body);
  return JSON.stringify(result, null, 2);
}
