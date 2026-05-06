import type { ReactNode } from "react";
import { Button } from "./Button";

import { IoLocationSharp } from "./icons";

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const InfoCard = ({ icon, label, value }: InfoCardProps) => {
  return (
    <div className="shadow rounded-2xl px-4 py-6 flex items-center gap-3 w-full">
      <div className="text-4xl bg-gray-200 dark:bg-gray-600 p-2 rounded-sm">
        {icon}
      </div>

      <div>
        <label className="text-sm text-gray-500">{label}</label>
        <p>{value}</p>
      </div>

      {label === "Localização" && (
        <Button className="flex items-center gap-2 p-2 border border-(--primary-color) text-(--primary-color) hover:text-white text-sm dark:text-(--text-color-dark) rounded-lg ml-auto bg-gray-200 dark:bg-gray-800 hover:bg-(--primary-color-hover) duration-300 transition cursor-pointer">
          <IoLocationSharp className="text-lg" />
          Ver no mapa
        </Button>
      )}
    </div>
  );
};
