import { z } from "zod";
export declare const createLinkSchema: z.ZodObject<{
    amount: z.ZodNumber;
    description: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    amount: number;
    description: string;
    name?: string | undefined;
}, {
    amount: number;
    description: string;
    name?: string | undefined;
}>;
export declare function handleCreateLink(params: z.infer<typeof createLinkSchema>): Promise<string>;
