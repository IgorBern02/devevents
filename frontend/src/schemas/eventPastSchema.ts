import { z } from "zod";

export const eventPastSchema = z.object({
  title: z.string().min(1, "Título obrigatório"),
  responsible: z.string().min(1, "Responsável obrigatório"),
  date: z.string().min(1, "A data do evento é obrigatória"),
});

export type EventPastFormData = z.infer<typeof eventPastSchema>;
