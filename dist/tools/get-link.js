import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new IdpayClient(); return _client; }
export const getLinkSchema = z.object({
    link_id: z.string().describe("Payment link ID"),
});
export async function handleGetLink(params) {
    const result = await getClient().post("/payment/link/show", {
        id: params.link_id,
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=get-link.js.map