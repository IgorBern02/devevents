import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { CiSearch } from "./icons";
import { Dropdown } from "./Dropdown";

import { brazilStates } from "../../constants/states";
interface FilterProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}

export const Filter = ({
  search,
  setSearch,
  type,
  setType,
  city,
  setCity,
}: FilterProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center">
      {/* 🔍 Search */}
      <div
        ref={containerRef}
        className={`flex items-center 
      bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700
      rounded-xl h-11 px-3
      transition-all duration-300
      ${open ? "w-56" : "w-11 cursor-pointer"}`}
        onClick={() => setOpen(true)}
      >
        <CiSearch className="text-(--text-color) dark:text-(--text-color-dark) text-lg shrink-0" />

        <input
          ref={inputRef}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
          className={`bg-transparent outline-none text-sm ml-2 w-full
        transition-opacity duration-200
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />
      </div>

      <Dropdown
        label="Tipo"
        value={type}
        options={["", "Online", "Presencial", "Híbrido"]}
        onChange={setType}
      />

      <Dropdown
        label="Cidade"
        value={city}
        options={["", ...brazilStates]}
        onChange={setCity}
      />
    </div>
  );
};
