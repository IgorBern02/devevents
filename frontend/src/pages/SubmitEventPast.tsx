import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  eventPastSchema,
  type EventPastFormData,
} from "../schemas/eventPastSchema";

import { BackButton } from "../components/ui/BackButton";

import { FormInput } from "../components/forms/FormInput";

import { SubmitEventHeader } from "../components/forms/SubmitEventHeader";

import { useGoBack } from "../hooks/useGoBack";
import { Button } from "../components/ui/Button";

import { useState } from "react";

import { eventsPastService } from "../services/eventsPastService";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { ImageUploadEventPast } from "../components/forms/ImageUploadEventPast";
import { createEventPastFormData } from "../utils/createEventPastFormData";

export const SubmitEventPast = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventPastFormData>({
    resolver: zodResolver(eventPastSchema),
  });

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const [previews, setPreviews] = useState<string[]>([]);

  const { goBack } = useGoBack();

  const onSubmit = async (data: EventPastFormData) => {
    console.log("SUBMIT FOI CHAMADO");
    console.log(data);

    try {
      const formData = createEventPastFormData(data, imageFiles);

      await eventsPastService.createPastEvent(formData);

      toast.success("Evento compartilhado com sucesso!");

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
        <SubmitEventHeader
          badge="Compartilhe com a comunidade"
          title="Evento"
          highlight="Tech"
          description="Compartilhe um evento no qual você participou e ajude a comunidade a conhecer eventos passados e compartilhar experiências valiosas."
        />

        <section className="w-full p-4">
          <BackButton text="Voltar para o início" onClick={() => goBack("/")} />
        </section>

        <form
          onSubmit={handleSubmit(onSubmit, (errors) => {
            console.log("ERROS DO ZOD:", errors);
          })}
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

          <ImageUploadEventPast
            previews={previews}
            setPreviews={setPreviews}
            setImageFiles={setImageFiles}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Data"
              type="date"
              register={register("date")}
              error={errors.date}
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
            {isSubmitting ? (
              <span>
                <Loader2 className="animate-spin h-5 w-5 mx-auto" />
                Enviando evento...
              </span>
            ) : (
              "Compartilhar Evento"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
