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
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        search === "" ||
        normalizeText(event.title).includes(normalizeText(search));

      const matchesType =
        type === "" || normalizeText(event.type) === normalizeText(type);

      const matchesCity =
        city === "" || normalizeText(event.city).includes(normalizeText(city));

      return matchesSearch && matchesType && matchesCity;
    });
  }, [events, search, type, city]);

  return filteredEvents;
};
