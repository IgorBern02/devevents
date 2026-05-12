import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { TechEvent } from "../types/TechEvent";
import { eventsService } from "../services/eventsService";

export const useEvent = () => {
  const [event, setEvent] = useState<TechEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await eventsService.getEventById(id as string);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  return {
    event,
    loading,
  };
};
