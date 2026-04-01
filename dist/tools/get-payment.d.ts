import { z } from "zod";
export declare const getPaymentSchema: z.ZodObject<{
    id: z.ZodString;
    order_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    order_id: string;
    id: string;
}, {
    order_id: string;
    id: string;
}>;
export declare function handleGetPayment(params: z.infer<typeof getPaymentSchema>): Promise<string>;
