import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { TechEvent } from "../types/TechEvent";

export const useEvents = () => {
  const [events, setEvents] = useState<TechEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return {
    events,
    loading,
  };
};
