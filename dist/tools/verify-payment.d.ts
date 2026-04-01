import { z } from "zod";
export declare const verifyPaymentSchema: z.ZodObject<{
    id: z.ZodString;
    order_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    order_id: string;
    id: string;
}, {
    order_id: string;
    id: string;
}>;
export declare function handleVerifyPayment(params: z.infer<typeof verifyPaymentSchema>): Promise<string>;
