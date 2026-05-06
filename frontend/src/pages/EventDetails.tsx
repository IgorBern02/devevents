import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import type { Event } from "../types/Event";
import { Button } from "../components/ui/Button";
import {
  BsCalendarDate,
  FaRegClock,
  FiChevronLeft,
  IoCodeSlashOutline,
  IoLocationSharp,
} from "../components/ui/icons";
import { InfoCard } from "../components/ui/InfoCard";

export const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/events");
  };

  useEffect(() => {
    api.get(`/events/${id}`).then((response) => {
      setEvent(response.data);
    });
  }, [id]);

  if (!event) {
    return <div>Carregando...</div>;
  }

  const infoCards = [
    {
      icon: <BsCalendarDate />,
      label: "Data",
      value: event.date,
    },
    {
      icon: <FaRegClock />,
      label: "Hora",
      value: event.hour,
    },
    {
      icon: <IoCodeSlashOutline />,
      label: "Tipo",
      value: event.type,
    },
    {
      icon: <IoLocationSharp />,
      label: "Cidade",
      value: event.city,
    },
  ];

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-4xl mx-auto mt-20">
      <section className="w-full p-4 space-y-4 flex items-center ">
        <Button
          onClick={handleBack}
          className="relative w-1/4 flex items-center justify-center border border-gray-200 hover:border-(--primary-color) py-2 text-sm cursor-pointer text-(--text-color) dark:text-(--text-color-dark) hover:text-(--primary-color) rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <FiChevronLeft className="absolute left-2" />
          Voltar para os Eventos
        </Button>
      </section>

      <section className="w-full shadow-lg rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
        <div className="w-full bg-amber-200 h-96"></div>
        <div className="w-full p-4 space-y-4">
          <h1 className="text-2xl font-bold">{event.title}</h1>
          <p className="w-full wrap-break-word text-justify whitespace-normal text-(--text-color) dark:text-(--text-color-dark) tracking-wide leading-relaxed">
            {event.description}
          </p>

          <div className="w-full grid grid-cols-2 gap-4 mt-6 p-4 ">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                label={card.label}
                value={card.value}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
