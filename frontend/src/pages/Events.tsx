import { useEffect, useState } from "react";
import { api } from "../services/api";

import { Card } from "../components/ui/Card";
import type { Event } from "../components/ui/Card";
import { Filter } from "../components/ui/Filter";

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || event.type === type) &&
      (city === "" || event.city === city)
    );
  });

  useEffect(() => {
    api.get("/events").then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-6xl mx-auto  mt-20">
      <section>
        <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl ">
          Proximos eventos
        </h1>
        <p className="text-lg text-gray-500  mt-4 rounded-lg p-4 max-w-2xl text-left ">
          Descubra os eventos que estão por vir e saiba tudo sobre as últimas
          tendências e novidades do mundo da tecnologia.
        </p>
      </section>

      <Filter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        city={city}
        setCity={setCity}
      />

      <section className="w-full">
        <p className="text-md font-semibold text-(--primary-color) ">
          Eventos em destaque
        </p>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </ul>
      </section>
    </div>
  );
};
