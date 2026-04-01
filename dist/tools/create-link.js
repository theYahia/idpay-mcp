import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new IdpayClient(); return _client; }
export const createLinkSchema = z.object({
    amount: z.number().positive().describe("Payment link amount in IRR"),
    description: z.string().describe("Payment link description"),
    name: z.string().optional().describe("Payment link name/title"),
});
export async function handleCreateLink(params) {
    const result = await getClient().post("/payment/link/create", {
        amount: params.amount,
        desc: params.description,
        name: params.name,
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=create-link.js.map