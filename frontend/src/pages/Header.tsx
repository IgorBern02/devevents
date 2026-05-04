import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { NavHeader } from "../components/header/NavHeader";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <header className="w-full h-16 flex items-center justify-between px-10 py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold ">DevEvents</h1>

      <nav>
        <NavHeader />
      </nav>

      <Button onClick={toggleTheme}>
        {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
      </Button>
    </header>
  );
};
