import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "Título obrigatório"),

  responsible: z.string(),

  image: z.string(),

  description: z.string().min(10, "Descrição muito curta"),

  date: z.string(),

  hour: z.string(),

  day: z.string(),

  type: z.string(),

  city: z.string(),

  location: z.string(),

  link: z.string(),
});

export type EventFormData = z.infer<typeof eventSchema>;
