import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { api } from "../services/api";

import type { TechEvent } from "../types/TechEvent";

import { Button } from "../components/ui/Button";
import { BackButton } from "../components/ui/BackButton";

export const AdminEventDetails = () => {
  const [event, setEvent] = useState<TechEvent | null>(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${id}`);

        setEvent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleApprove = async () => {
    try {
      await api.patch(`/events/${id}/approve`);

      navigate("/admin/events");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/events/${id}`);

      navigate("/admin/events");
    } catch (error) {
      console.log(error);
    }
  };

  if (!event) {
    return <div className="mt-20 text-center">Carregando...</div>;
  }

  const handleBack = () => {
    navigate("/admin/events");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-20">
      <section className="w-full p-4">
        <BackButton text="Voltar para o painel de admin" onClick={handleBack} />
      </section>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold">{event.title}</h1>

        <p className="mt-6 text-gray-500 whitespace-pre-line">
          {event.description}
        </p>

        <div className="mt-8 space-y-2">
          <p>
            <strong>Tipo:</strong> {event.type}
          </p>

          <p>
            <strong>Cidade:</strong> {event.city}
          </p>

          <p>
            <strong>Data:</strong> {event.date}
          </p>

          <p>
            <strong>Hora:</strong> {event.hour}
          </p>

          <p>
            <strong>Local:</strong> {event.location}
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <Button
            onClick={handleApprove}
            className="bg-green-600 hover:bg-green-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Aprovar Evento
          </Button>

          <Button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Excluir Evento
          </Button>
        </div>
      </div>
    </div>
  );
};
