import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new IdpayClient(); return _client; }
export const listTransactionsSchema = z.object({
    page: z.number().min(0).default(0).describe("Page number (0-based)"),
    page_size: z.number().min(1).max(100).default(25).describe("Items per page"),
    date_from: z.string().optional().describe("Start date (Unix timestamp)"),
    date_to: z.string().optional().describe("End date (Unix timestamp)"),
});
export async function handleListTransactions(params) {
    const body = {
        page: params.page,
        page_size: params.page_size,
    };
    if (params.date_from)
        body.date = { ...(body.date ?? {}), from: Number(params.date_from) };
    if (params.date_to)
        body.date = { ...(body.date ?? {}), to: Number(params.date_to) };
    const result = await getClient().post("/payment/transactions", body);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=list-transactions.js.map