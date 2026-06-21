import { z } from "zod";

export const CarbonEntrySchema = z.object({
 value: z.number().positive(),
 category: z.string().min(1),
 date: z.string()
});