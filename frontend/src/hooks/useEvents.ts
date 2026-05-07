import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import type { Event } from "../types/Event";

export const useEvents = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  return {
    event,
    loading,
  };
};
