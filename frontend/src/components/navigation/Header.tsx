import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { NavHeader } from "./NavHeader";

import { IoMoonOutline, IoSunnyOutline } from "../ui/icons";

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
    <header className="fixed bg-white dark:bg-gray-900 z-90 w-full border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <h1 className="text-xl font-bold">DevEvents</h1>

        <nav>
          <NavHeader />
        </nav>

        <Button
          onClick={toggleTheme}
          className="bg-gray-100 dark:bg-gray-800 shadow p-2 text-xl rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
        </Button>
      </div>
    </header>
  );
};
