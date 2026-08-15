import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { BackButton } from "../components/ui/BackButton";

import { useGoBack } from "../hooks/useGoBack";
import { usePendingEvents } from "../hooks/usePendingEvents";
import { AdminSkeleton } from "../components/skeletons/admin/AdminSkeleton";

export const Admin = () => {
  const [events, loading] = usePendingEvents();

  const { goBack } = useGoBack();

  if (loading) {
    return <AdminSkeleton />;
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
            <div className="group w-full p-2 rounded-xl shadow dark:shadow-white/10 cursor-pointer hover:shadow-lg transition-shadow duration-200">
              <h2 className="text-2xl font-bold">{event.title}</h2>

              <p className="mt-3 text-gray-500">{event.description}</p>

              <div className="mt-4 flex gap-4">
                <Button className="bg-(--primary-color) hover:bg-(--primary-color-hover) duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer">
                  Ver detaques
                </Button>
              </div>
            </div>
          </Link>
        ))}
        <section className="w-full grid grid-cols-2 items-center p-2 gap-2">
          <Link to={`/admin/events/pending`}>
            <div
              className="flex items-center justify-center w-full min-h-50 bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <Button className="bg-(--primary-color) hover:bg-(--primary-color-hover) duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer">
                Ver eventos pendentes
              </Button>
            </div>
          </Link>
          <Link to={`/admin/events/past`}>
            <div
              className="flex items-center justify-center w-full min-h-50 bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <Button className="bg-(--primary-color) hover:bg-(--primary-color-hover) duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer">
                Ver projetos passados
              </Button>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};
