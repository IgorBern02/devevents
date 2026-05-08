import { useMemo } from "react";
import type { TechEvent } from "../types/TechEvent";

interface FilterProps {
  events: TechEvent[];
  search: string;
  type: string;
  city: string;
}

export const useFilteredEvents = ({
  events,
  search,
  type,
  city,
}: FilterProps) => {
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      return (
        event.title.toLowerCase().includes(search.toLowerCase()) &&
        (type === "" || event.type === type) &&
        (city === "" || event.city === city)
      );
    });
  }, [events, search, type, city]);

  return filteredEvents;
};
