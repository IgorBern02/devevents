import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { eventSchema, type EventFormData } from "../schemas/eventSchema";

import { api } from "../services/api";

import { BackButton } from "../components/ui/BackButton";

import { FormInput } from "../components/forms/FormInput";
import { FormTextarea } from "../components/forms/FormTextarea";
import { SubmitEventHeader } from "../components/forms/SubmitEventHeader";

export const SubmitEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SubmitEventHeader />

        <section className="w-full p-4">
          <BackButton text="Voltar para o início" onClick={handleBack} />
        </section>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            shadow-2xl
            space-y-8
          "
        >
          <FormInput
            label="Título do Evento"
            placeholder="Ex: Front-End Summit 2026"
            register={register("title")}
            error={errors.title}
          />

          <FormTextarea
            label="Descrição"
            placeholder="Descreva o evento..."
            register={register("description")}
            error={errors.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Data" type="date" register={register("date")} />

            <FormInput label="Hora" type="time" register={register("hour")} />

            <FormInput
              label="Dia da Semana"
              placeholder="Ex: Sábado"
              register={register("day")}
            />

            <FormInput
              label="Tipo do Evento"
              placeholder="Ex: Online / Presencial"
              register={register("type")}
            />

            <FormInput
              label="Cidade"
              placeholder="Ex: São Paulo"
              register={register("city")}
            />

            <FormInput
              label="Localização"
              placeholder="Ex: Expo Center Norte"
              register={register("location")}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              bg-violet-600
              hover:bg-violet-500
              transition-all
              duration-300
              text-white
              font-semibold
              py-4
              rounded-xl
              shadow-lg
              shadow-violet-500/20
              disabled:opacity-70
              cursor-pointer
            "
          >
            {isSubmitting ? "Enviando evento..." : "Publicar Evento"}
          </button>
        </form>
      </div>
    </div>
  );
};
