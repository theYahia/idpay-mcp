import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new IdpayClient(); return _client; }
export const listLinksSchema = z.object({});
export async function handleListLinks(_params) {
    const result = await getClient().post("/payment/link/list", {});
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=list-links.js.map