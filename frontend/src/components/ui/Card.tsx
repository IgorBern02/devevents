import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export interface Event {
  id: number;
  title: string;
  date: string;
  hour: string;
  day?: string;
  city: string;
  type: string;
}

interface CardProps {
  event: Event;
}

export const Card = ({ event }: CardProps) => {
  return (
    <Link to={`/events/${event.id}`} className="w-full">
      <li
        className="w-full bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      >
        <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-indigo-500" />

        <div className="p-4 space-y-2 text-gray-500">
          <h3 className="text-lg font-semibold text-(--text-color) dark:text-(--text-color-dark)">
            {event.title}
          </h3>

          <p className="text-xs flex items-center gap-1">
            <MdDateRange className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.date.split("T")[0]}
          </p>

          <p className="text-xs flex items-center gap-1">
            <FaRegClock className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.hour}
          </p>

          <p className="text-xs flex items-center gap-1">
            <BsCalendarDate className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.day ||
              new Date(event.date).toLocaleDateString(undefined, {
                weekday: "long",
              })}
          </p>

          <p className="text-xs flex items-center gap-1">
            <HiOutlineDesktopComputer className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.type}
          </p>

          <p className="text-xs flex items-center gap-1">
            <IoLocationSharp className="text-(--text-color) dark:text-(--text-color-dark)" />
            {event.city}
          </p>
        </div>
      </li>
    </Link>
  );
};
