import {
  BsCalendarDate,
  FaRegClock,
  IoCodeSlashOutline,
  IoLocationSharp,
} from "../ui/icons";
import { InfoCard } from "../ui//events/InfoCard";
import type { Events } from "../../types/Events";

import { formatDate } from "../../utils/formatDate";

interface Props {
  event: Events;
}

export const EventInfoSection = ({ event }: Props) => {
  const infoCards = [
    {
      icon: <BsCalendarDate />,
      label: "Data",
      value: formatDate(event.date),
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
      value: event.city || "Evento Online",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      {event.type === "Presencial" && (
        <InfoCard
          icon={<IoLocationSharp />}
          label="Localização"
          value={event.location || ""}
        />
      )}
    </div>
  );
};
