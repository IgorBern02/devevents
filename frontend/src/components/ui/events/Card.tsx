import { MdDateRange } from "../icons";
import { FaRegClock } from "../icons";
import { BsCalendarDate } from "../icons";
import { HiOutlineDesktopComputer } from "../icons";
import { IoLocationSharp } from "../icons";
import { Link } from "react-router-dom";
import type { TechEvent } from "../../../types/TechEvent";
import { Button } from "../Button";
interface CardProps {
  event: TechEvent;
}

export const Card = ({ event }: CardProps) => {
  return (
    <Link to={`/events/${event._id}`} className="w-full ">
      <li
        className="relative w-full min-h-100 bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      >
        <div className="w-full h-40 ">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <div className="p-4 space-y-2 text-gray-500">
          <h3 className="text-lg font-semibold text-(--text-color) dark:text-(--text-color-dark)">
            {event.title}
          </h3>

          <p className="text-sm flex items-center gap-1">
            <MdDateRange className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.date.split("T")[0]}
          </p>

          <p className="text-sm flex items-center gap-1">
            <FaRegClock className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.hour}
          </p>

          <p className="text-sm flex items-center gap-1">
            <BsCalendarDate className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.day ||
              new Date(event.date).toLocaleDateString(undefined, {
                weekday: "long",
              })}
          </p>

          <p className="text-sm flex items-center gap-1">
            <HiOutlineDesktopComputer className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.type}
          </p>

          {event.city && (
            <p className="text-sm flex items-center gap-1">
              <IoLocationSharp className="text-(--text-color) dark:text-(--text-color-dark)" />
              {event.city}
            </p>
          )}

          <Button className="absolute bottom-4 w-3/5 text-white border border-gray-200 dark:border-gray-800 rounded px-1 py-2 text-xs mt-2 cursor-pointer bg-(--primary-color) hover:*:(--primary-color-hover) transition-colors">
            Saber mais sobre o evento
          </Button>
        </div>
      </li>
    </Link>
  );
};
