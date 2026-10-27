import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown } from "./icons";

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
  const [search, setSearch] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  // remover acentuação
  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // filtrar opções
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      normalizeText(option).includes(normalizeText(search)),
    );
  }, [options, search]);

  // fechar ao clicar fora
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
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="h-11 px-4 flex items-center gap-2 
        bg-white dark:bg-slate-900
        border border-gray-200 dark:border-slate-700
        rounded-xl text-sm
        cursor-pointer
        transition-all
        hover:border-(--primary-color)"
      >
        {value === "" ? label : value}

        <FiChevronDown
          className={`transition-all duration-300 text-(--text-color) dark:text-(--text-color-dark) ${
            open ? "rotate-180 text-(--primary-color)" : ""
          }`}
        />
      </button>

      <div
        className={`absolute mt-2 min-w-52 bg-white dark:bg-slate-900 
        border border-gray-200 dark:border-slate-700 
        rounded-xl shadow-xl z-50
        transition-all duration-200 origin-top
        max-h-60 overflow-y-auto scroll-smooth
        ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* opções */}
        {filteredOptions.map((option) => (
          <div
            key={option || "all"}
            onClick={() => {
              onChange(option);
              setOpen(false);
              setSearch("");
            }}
            className={`px-4 py-3 text-sm font-medium
            cursor-pointer transition-colors 
            ${
              option === value
                ? "bg-(--primary-color) text-white"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {option === "" ? "Todos" : option}
          </div>
        ))}

        {filteredOptions.length === 0 && (
          <div className="px-4 py-3 text-sm text-gray-500">
            Nenhum resultado encontrado
          </div>
        )}
      </div>
    </div>
  );
};
