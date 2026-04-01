import { z } from "zod";
export declare const listLinksSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare function handleListLinks(_params: z.infer<typeof listLinksSchema>): Promise<string>;
