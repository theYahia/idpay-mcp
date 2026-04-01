import { z } from "zod";
import { IdpayClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new IdpayClient(); return _client; }
export const getPaymentSchema = z.object({
    id: z.string().describe("Payment ID from IDPay"),
    order_id: z.string().describe("Your order ID"),
});
export async function handleGetPayment(params) {
    const result = await getClient().post("/payment/inquiry", {
        id: params.id,
        order_id: params.order_id,
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=get-payment.js.map