import type { ReactNode } from "react";

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
    </div>
  );
};
