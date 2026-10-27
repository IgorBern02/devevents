import { useState } from "react";

import { Card } from "../components/ui/events/Card";
import { Filter } from "../components/ui/Filter";

import { useEvents } from "../hooks/useEvents";
import { useFilteredEvents } from "../hooks/useFilteredEvents";
import { SkeletonCardGrid } from "../components/skeletons/events/SkeletonCardGrid";

export const Events = () => {
  const { events, loading } = useEvents();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");

  const filteredEvents = useFilteredEvents({
    events,
    search,
    type,
    city,
  });

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-6xl mx-auto mt-20">
      <section>
        <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
          Proximos <span className="text-(--primary-color)">eventos</span>
        </h1>

        <p className="text-lg text-gray-500 mt-4 rounded-lg p-4 max-w-2xl text-justify wrap-break-word whitespace-pre-line">
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

      {loading ? (
        <SkeletonCardGrid />
      ) : (
        <section className="w-full h-full p-3">
          <span className="bg-violet-500/20 text-(--primary-color) dark:text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
            Eventos em destaque
          </span>

          <ul className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredEvents.map((event) => (
              <Card key={event._id} event={event} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
