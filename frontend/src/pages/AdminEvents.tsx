import { useEffect, useState } from "react";

import { api } from "../services/api";

import type { TechEvent } from "../types/TechEvent";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { BackButton } from "../components/ui/BackButton";

import { useGoBack } from "../hooks/useGoBack";

export const AdminEvents = () => {
  const [events, setEvents] = useState<TechEvent[]>([]);

  const [loading, setLoading] = useState(true);

  const { goBack } = useGoBack();

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
    <div className="max-w-6xl mx-auto px-4 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
        Painel Administrador
      </h1>

      <section className="w-full p-4">
        <BackButton text="Voltar para o inicio" onClick={() => goBack("/")} />
      </section>

      <div className="space-y-6 p-2 w-full mt-10">
        {events.map((event) => (
          <Link to={`/admin/events/${event._id}`} key={event._id}>
            <div className="group w-full p-2 rounded-xl shadow">
              <h2 className="text-2xl font-bold">{event.title}</h2>

              <p className="mt-3 text-gray-500">{event.description}</p>

              <div className="mt-4 flex gap-4">
                <Button
                  onClick={() => handleApprove(event._id)}
                  className="bg-green-600 hover:bg-green-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Aprovar
                </Button>

                <Button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-600 hover:bg-red-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
                >
                  Excluir
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
