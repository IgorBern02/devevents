import { z } from "zod";

export const eventSchema = z
  .object({
    title: z.string().min(3, "Título obrigatório"),

    responsible: z.string().min(1, "Responsável obrigatório"),

    description: z.string().min(10, "Descrição muito curta"),

    date: z.string().min(1, "A data do evento é obrigatória"),

    hour: z.string().min(1, "A hora do evento é obrigatório"),

    day: z.string().min(1, "O dia do evento é obrigatório"),

    type: z.enum(["Online", "Presencial"]),

    city: z.string().optional(),

    location: z.string().optional(),

    link: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === "Presencial") {
        return !!data.city && !!data.location;
      }

      return true;
    },
    {
      message: "Cidade e localização são obrigatórios para eventos presenciais",

      path: ["city"],
    },
  );

export type EventFormData = z.infer<typeof eventSchema>;
