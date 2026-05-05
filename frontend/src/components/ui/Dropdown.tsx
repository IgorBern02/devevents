import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const Dropdown = ({
  label,
  value,
  options,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 👉 fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Botão */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-11 px-4 flex items-center gap-2 
        bg-white dark:bg-slate-900
        border border-gray-200 dark:border-slate-700
        rounded-xl text-sm
        transition-all
        hover:border-(--primary-color)"
      >
        {/* 👉 exibição correta */}
        {value === "" ? label : value}

        <FiChevronDown
          className={`transition-all duration-300 text-gray-500 ${
            open ? "rotate-180 text-(--primary-color)" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute mt-2 w-full bg-white dark:bg-slate-900 
        border border-gray-200 dark:border-slate-700 
        rounded-xl shadow-xl overflow-hidden z-50
        transition-all duration-200 origin-top
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option || "all"}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
            className={`px-4 py-3 text-sm font-medium
            cursor-pointer transition-colors
            ${
              option === value
                ? "bg-purple-500 text-white"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
            }`}
          >
            {/* 👉 mostra "Todos" visualmente */}
            {option === "" ? "Todos" : option}
          </div>
        ))}
      </div>
    </div>
  );
};
