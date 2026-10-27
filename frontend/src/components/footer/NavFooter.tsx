import { Link } from "react-router-dom";

export const NavFooter = () => {
  const arrayNav = [
    { name: "Início", path: "/" },
    { name: "Eventos", path: "/events" },
    { name: "Enviar Evento", path: "/submit-event" },
    { name: "Sobre", path: "/about" },
  ];

  return (
    <section className="space-y-4">
      <h3
        className="
              text-lg
              font-semibold
              text-(--text-color)
              dark:text-(--text-color-dark)
            "
      >
        Navegação
      </h3>

      <ul className="space-y-3 text-gray-500">
        {arrayNav.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="hover:text-(--primary-color) transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
