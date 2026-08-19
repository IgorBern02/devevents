import { Link } from "react-router-dom";
import { usePendingEvents } from "../hooks/usePendingEvents";
import { Button } from "../components/ui/Button";
import { AdminSkeleton } from "../components/skeletons/admin/AdminSkeleton";

export const AdminEventsPending = () => {
  const [events, loading] = usePendingEvents();

  if (loading) {
    return <AdminSkeleton />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
        Eventos Pendentes
      </h1>
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
    </div>
  );
};
