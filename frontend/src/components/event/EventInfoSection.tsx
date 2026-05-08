import {
  BsCalendarDate,
  FaRegClock,
  IoCodeSlashOutline,
  IoLocationSharp,
} from "../ui/icons";
import { InfoCard } from "../ui/InfoCard";
import type { TechEvent } from "../../types/TechEvent";

interface Props {
  event: TechEvent;
}

export const EventInfoSection = ({ event }: Props) => {
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
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {infoCards.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <InfoCard
        icon={<IoLocationSharp />}
        label="Localização"
        value={event.location}
      />
    </div>
  );
};
