import { BackButton } from "../components/ui/BackButton";
import { EventInfoSection } from "../components/event/EventInfoSection";
import { ShareSection } from "../components/event/ShareSection";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import type { Event } from "../types/Event";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { MdArrowOutward } from "../components/ui/icons";

export const EventDetails = () => {
  const [event, setEvent] = useState<Event | null>(null);

  const nav = useNavigate();

  const handleBack = () => {
    nav("/events");
  };

  useEffect(() => {
    const fetchEvent = async () => {
      const eventId = window.location.pathname.split("/").pop();
      if (eventId) {
        try {
          const response = await api.get(`/events/${eventId}`);
          setEvent(response.data);
        } catch (error) {
          console.error("Error fetching event details:", error);
        }
      }
    };

    fetchEvent();
  }, []);

  if (!event) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-4xl mx-auto mt-20">
      <section className="w-full p-4">
        <BackButton onClick={handleBack} />
      </section>

      <section className="w-full shadow-lg rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
        <div className="w-full bg-amber-200 h-96"></div>

        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold">{event.title}</h1>

          <p className="text-justify break-words whitespace-pre-line">
            {event.description}
          </p>

          <EventInfoSection event={event} />

          <Button className="flex items-center gap-2 bg-(--primary-color) text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-(--primary-color-hover) transition-colors">
            Participar do Evento
            <MdArrowOutward className="text-lg" />
          </Button>

          <hr />

          <ShareSection />
        </div>
      </section>
    </div>
  );
};
