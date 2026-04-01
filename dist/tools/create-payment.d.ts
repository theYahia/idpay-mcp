import { z } from "zod";
export declare const createPaymentSchema: z.ZodObject<{
    order_id: z.ZodString;
    amount: z.ZodNumber;
    callback: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    mail: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    order_id: string;
    amount: number;
    callback: string;
    description?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    mail?: string | undefined;
}, {
    order_id: string;
    amount: number;
    callback: string;
    description?: string | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    mail?: string | undefined;
}>;
export declare function handleCreatePayment(params: z.infer<typeof createPaymentSchema>): Promise<string>;
