import type { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
}

export const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  return (
    <div
      className="
        group flex items-center gap-2
        border border-gray-100
        hover:border-(--primary-color)
        bg-gray-50
        px-4 py-3
        rounded-xl
        hover:bg-gray-100
        dark:bg-gray-800
        dark:border-gray-700
        dark:hover:bg-gray-700
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-lg
        hover:shadow-purple-500/20
      "
    >
      <div className="text-(--primary-color) transition-transform duration-300 group-hover:rotate-12">
        {icon}
      </div>

      <p>{title}</p>
    </div>
  );
};
