import { useParams } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { BackButton } from "../components/ui/BackButton";

import { useGoBack } from "../hooks/useGoBack";
import { useAdminEventActions } from "../hooks/useAdminEventActions";
import { useEvent } from "../hooks/useEvent";

import { formatDate } from "../utils/formatDate";

export const AdminEventDetails = () => {
  const { event, loading } = useEvent();

  const { id } = useParams();

  const { goBack } = useGoBack();

  const { approveEvent, deleteEvent } = useAdminEventActions();

  if (!event) {
    return <div className="mt-20 text-center">Carregando...</div>;
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mt-20">
      <section className="w-full p-4">
        <BackButton
          text="Voltar para o painel de admin"
          onClick={() => goBack("/admin/events")}
        />
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
            <strong>Data:</strong> {formatDate(event.date)}
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
            onClick={async () => {
              await approveEvent(id!);
            }}
            className="bg-green-600 hover:bg-green-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Aprovar Evento
          </Button>

          <Button
            onClick={async () => {
              await deleteEvent(id!);
            }}
            className="bg-red-600 hover:bg-red-700 duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Excluir Evento
          </Button>
        </div>
      </div>
    </div>
  );
};
