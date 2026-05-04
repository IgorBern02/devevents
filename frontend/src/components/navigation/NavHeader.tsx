import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { Link } from "react-router-dom";

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
    icon: <AiOutlinePicture />,
  },
  {
    name: "Contato",
    link: "/contact",
    icon: <AiOutlineMail />,
  },
];

export const NavHeader = () => {
  return (
    <ul className="flex items-center justify-center gap-10">
      {navHeaderItems.map((item) => (
        <li key={item.name}>
          <Link
            to={item.link}
            className="flex items-center gap-2 rounded-lg px-2 py-1 text-gray-500  hover:text-blue-500 dark:hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            {item.icon}
            <p>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
