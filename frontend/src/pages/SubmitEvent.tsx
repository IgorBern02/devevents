import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { eventSchema, type EventFormData } from "../schemas/eventSchema";

import { api } from "../services/api";

export const SubmitEvent = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: EventFormData) => {
    try {
      await api.post("/events", data);

      alert("Evento enviado com sucesso!");

      reset();
    } catch (error) {
      console.log(error);

      alert("Erro ao enviar evento");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold mb-8">Enviar Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Título</label>

          <input
            type="text"
            {...register("title")}
            className="w-full border rounded-lg p-3"
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Descrição</label>

          <textarea
            {...register("description")}
            className="w-full border rounded-lg p-3 h-40"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Data</label>

            <input
              type="date"
              {...register("date")}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Hora</label>

            <input
              type="time"
              {...register("hour")}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 rounded-lg p-3">Dia</label>

            <input
              type="text"
              {...register("day")}
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Tipo</label>

          <input
            type="text"
            {...register("type")}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Cidade</label>

          <input
            type="text"
            {...register("city")}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Localização</label>

          <input
            type="text"
            {...register("location")}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          disabled={isSubmitting}
          className="bg-(--primary-color) text-white px-6 py-3 rounded-lg"
        >
          {isSubmitting ? "Enviando..." : "Enviar Evento"}
        </button>
      </form>
    </div>
  );
};
