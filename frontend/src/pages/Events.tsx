import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  city: string;
}

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.get("/events").then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Encontre eventos tech pelo Brasil
        </h1>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Eventos em destaque</h2>

        <ul className="space-y-4 bg-amber-300 dark:bg-amber-700 p-4 rounded-lg">
          {events.map((event) => (
            <li
              key={event.id}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-4"
            >
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p>{event.description}</p>
              <p>
                {new Date(event.date).toLocaleDateString()} - {event.city}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
