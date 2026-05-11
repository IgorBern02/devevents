import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { eventSchema, type EventFormData } from "../schemas/eventSchema";

import { api } from "../services/api";
import { BackButton } from "../components/ui/BackButton";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
            Compartilhe com a comunidade
          </span>

          <h1 className="text-5xl font-extrabold text-(--text-color) dark:text-(--text-color-dark) mt-6 leading-tight">
            Envie seu
            <span className="text-violet-500"> Evento Tech</span>
          </h1>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Publique workshops, meetups, hackathons e conferências para que mais
            pessoas possam descobrir e participar.
          </p>
        </section>

        <section className="w-full p-4">
          <BackButton text="Voltar para o inicio" onClick={handleBack} />
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-8"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
              Título do Evento
            </label>

            <input
              type="text"
              placeholder="Ex: Front-End Summit 2026"
              {...register("title")}
              className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4 text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
            />

            {errors.title && (
              <p className="text-red-400 text-sm mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
              Descrição
            </label>

            <textarea
              placeholder="Descreva o evento..."
              {...register("description")}
              className="w-full h-40 resize-none border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4 text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
            />

            {errors.description && (
              <p className="text-red-400 text-sm mt-2">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Data
              </label>

              <input
                type="date"
                {...register("date")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Hora
              </label>

              <input
                type="time"
                {...register("hour")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Dia da Semana
              </label>

              <input
                type="text"
                placeholder="Ex: Sábado"
                {...register("day")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Tipo do Evento
              </label>

              <input
                type="text"
                placeholder="Ex: Online / Presencial"
                {...register("type")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Cidade
              </label>

              <input
                type="text"
                placeholder="Ex: São Paulo"
                {...register("city")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
                Localização
              </label>

              <input
                type="text"
                placeholder="Ex: Expo Center Norte"
                {...register("location")}
                className="w-full border border-slate-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all rounded-xl p-4  text-(--text-color) dark:text-(--text-color-dark) placeholder:text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white font-semibold py-4 rounded-xl shadow-lg shadow-violet-500/20 disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? "Enviando evento..." : "Publicar Evento"}
          </button>
        </form>
      </div>
    </div>
  );
};
