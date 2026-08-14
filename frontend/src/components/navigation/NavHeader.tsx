import { AiOutlineHome, AiOutlineCalendar, AiOutlineTeam } from "../ui/icons";

import { NavLink } from "react-router-dom";

const navHeaderItems = [
  {
    name: "Inicio",
    link: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Eventos",
    link: "/events",
    icon: <AiOutlineCalendar />,
  },
  {
    name: "Sobre",
    link: "/about",
    icon: <AiOutlineTeam />,
  },
  {
    name: "Galeria",
    link: "/gallery",
    icon: <AiOutlineTeam />,
  },
];

export const NavHeader = () => {
  return (
    <ul className="flex items-center justify-center gap-10">
      {navHeaderItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.link}
            end={item.link === "/"}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-lg px-2 py-1 transition-all duration-300 ease-in-out
              
              ${
                isActive
                  ? "bg-gray-100 text-(--primary-color) dark:bg-gray-800"
                  : "text-gray-500 hover:text-(--primary-color) hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            <p>{item.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
