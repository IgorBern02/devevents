import { useEffect, useState } from "react";
import { eventsService } from "../services/eventsService";
import type { TechEvent } from "../types/TechEvent";

export const usePendingEvents = (): [TechEvent[], boolean] => {
  const [events, setEvents] = useState<TechEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingEvent = async () => {
      try {
        const data = await eventsService.getPendingEvents();

        setEvents(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingEvent();
  }, []);

  return [events, loading];
};
