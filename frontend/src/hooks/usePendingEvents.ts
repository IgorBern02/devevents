import { useEffect, useState } from "react";
import { eventsService } from "../services/eventsService";
import type { Events } from "../types/Events";

export const usePendingEvents = (): [Events[], boolean] => {
  const [events, setEvents] = useState<Events[]>([]);
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
