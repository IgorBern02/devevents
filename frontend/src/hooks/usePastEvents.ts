import { useEffect, useState } from "react";
import { eventsService } from "../services/eventsService";
import type { EventsPast } from "../types/EventsPast";

export const usePendingEvents = (): [EventsPast[], boolean] => {
  const [events, setEvents] = useState<EventsPast[]>([]);
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
