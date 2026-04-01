import { z } from "zod";
export declare const listTransactionsSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    page_size: z.ZodDefault<z.ZodNumber>;
    date_from: z.ZodOptional<z.ZodString>;
    date_to: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    page_size: number;
    date_from?: string | undefined;
    date_to?: string | undefined;
}, {
    page?: number | undefined;
    page_size?: number | undefined;
    date_from?: string | undefined;
    date_to?: string | undefined;
}>;
export declare function handleListTransactions(params: z.infer<typeof listTransactionsSchema>): Promise<string>;
