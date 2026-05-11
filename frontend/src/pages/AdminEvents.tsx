import { useEffect, useState } from "react";

import { api } from "../services/api";

import type { TechEvent } from "../types/TechEvent";

export const AdminEvents = () => {
  const [events, setEvents] = useState<TechEvent[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchPendingEvents = async () => {
    try {
      const response = await api.get("/events/pending/all");

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadEvents = async () => {
      await fetchPendingEvents();
    };

    loadEvents();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await api.patch(`/events/${id}/approve`);

      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/events/${id}`);

      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="mt-20 text-center">Carregando...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20">
      <h1 className="text-4xl font-bold mb-10">Eventos Pendentes</h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="border rounded-xl p-6 shadow-sm bg-white dark:bg-gray-800"
          >
            <h2 className="text-2xl font-bold">{event.title}</h2>

            <p className="mt-3 text-gray-500">{event.description}</p>

            <div className="mt-4 flex gap-4">
              <button
                onClick={() => handleApprove(event._id)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Aprovar
              </button>

              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
