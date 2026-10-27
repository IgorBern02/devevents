import { useEffect, useState } from "react";
import type { Events } from "../types/Events";
import { eventsService } from "../services/eventsService";

export const useEvents = () => {
  const [events, setEvents] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsService.getEvents();
        setEvents(data);
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
