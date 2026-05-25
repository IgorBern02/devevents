import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { eventSchema, type EventFormData } from "../schemas/eventSchema";

import { BackButton } from "../components/ui/BackButton";

import { FormInput } from "../components/forms/FormInput";
import { FormTextarea } from "../components/forms/FormTextarea";
import { SubmitEventHeader } from "../components/forms/SubmitEventHeader";

import { useGoBack } from "../hooks/useGoBack";
import { Button } from "../components/ui/Button";

import { useState } from "react";
import { ImageUpload } from "../components/forms/ImageUpload";

import { createEventFormData } from "../utils/createEventFormData";
import { eventsService } from "../services/eventsService";

import { toast } from "sonner";

export const SubmitEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const { goBack } = useGoBack();

  const onSubmit = async (data: EventFormData) => {
    try {
      const formData = createEventFormData(data, imageFile);

      await eventsService.createEvent(formData);

      toast.success("Evento enviado com sucesso!");

      goBack("/");

      reset();
    } catch (error) {
      console.log(error);

      toast.error("Erro ao enviar evento");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SubmitEventHeader />

        <section className="w-full p-4">
          <BackButton text="Voltar para o início" onClick={() => goBack("/")} />
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

          <FormInput
            label="Responsável pelo Evento"
            placeholder="Ex: Tech Events"
            register={register("responsible")}
            error={errors.responsible}
          />

          <ImageUpload
            preview={preview}
            setPreview={setPreview}
            setImageFile={setImageFile}
          />

          <FormTextarea
            label="Descrição"
            placeholder="Descreva o evento..."
            register={register("description")}
            error={errors.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Data"
              type="date"
              register={register("date")}
              error={errors.date}
            />

            <FormInput
              label="Hora"
              type="time"
              register={register("hour")}
              error={errors.hour}
            />

            <FormInput
              label="Dia da Semana"
              placeholder="Ex: Sábado"
              register={register("day")}
              error={errors.day}
            />

            <FormInput
              label="Tipo do Evento"
              placeholder="Ex: Online / Presencial"
              register={register("type")}
              error={errors.type}
            />

            <FormInput
              label="Cidade"
              placeholder="Ex: São Paulo"
              register={register("city")}
              error={errors.city}
            />

            <FormInput
              label="Localização"
              placeholder="Ex: Expo Center Norte"
              register={register("location")}
              error={errors.location}
            />

            <FormInput
              label="Link do Evento"
              placeholder="Ex: www://techevents.com.br"
              register={register("link")}
              error={errors.link}
            />
          </div>

          <Button
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
          </Button>
        </form>
      </div>
    </div>
  );
};
