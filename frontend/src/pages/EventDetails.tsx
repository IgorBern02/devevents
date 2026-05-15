import { BackButton } from "../components/ui/BackButton";
import { EventInfoSection } from "../components/event/EventInfoSection";
import { ShareSection } from "../components/event/ShareSection";
import { Button } from "../components/ui/Button";
import { MdArrowOutward } from "../components/ui/icons";
import { useEvent } from "../hooks/useEvent";
import { useGoBack } from "../hooks/useGoBack";

export const EventDetails = () => {
  const { event, loading } = useEvent();

  const { goBack } = useGoBack();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!event) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-4xl mx-auto mt-20">
      <section className="w-full p-4">
        <BackButton
          text="Voltar para os Eventos"
          onClick={() => goBack("/events")}
        />
      </section>

      <section className="w-full shadow-lg rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
        <div className="w-full bg-amber-200 h-96 p-2">
          <img
            src={event.image}
            alt={event.title}
            className="
    w-full
    h-52
    object-cover
    rounded-t-xl
  "
          />
          <span className="bg-violet-500/20 text-(--primary-color) dark:text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
            {event.responsible}
          </span>
        </div>

        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold">{event.title}</h1>

          <p className="text-justify wrap-break-word whitespace-pre-line">
            {event.description}
          </p>

          <EventInfoSection event={event} />

          {event.link && (
            <Button className="flex items-center gap-2 bg-(--primary-color) text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-(--primary-color-hover) transition-colors">
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                Participar do Evento
              </a>
              <MdArrowOutward className="text-lg" />
            </Button>
          )}

          <hr />

          <ShareSection />
        </div>
      </section>
    </div>
  );
};
