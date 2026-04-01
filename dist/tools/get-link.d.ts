import { z } from "zod";
export declare const getLinkSchema: z.ZodObject<{
    link_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    link_id: string;
}, {
    link_id: string;
}>;
export declare function handleGetLink(params: z.infer<typeof getLinkSchema>): Promise<string>;
