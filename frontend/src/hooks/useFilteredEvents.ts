import { useMemo } from "react";
import type { Event } from "../types/Event";

interface FilterProps {
  events: Event[];
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
