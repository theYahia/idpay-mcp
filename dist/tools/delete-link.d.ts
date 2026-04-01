import { z } from "zod";
export declare const deleteLinkSchema: z.ZodObject<{
    link_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    link_id: string;
}, {
    link_id: string;
}>;
export declare function handleDeleteLink(params: z.infer<typeof deleteLinkSchema>): Promise<string>;
