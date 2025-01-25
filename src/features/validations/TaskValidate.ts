import { z } from "zod";

export const TaskValidate = z.object({
  title: z.string().min(1).max(80),
  description: z.string().nullable(),
  isCompleted: z.boolean().optional(),
});
