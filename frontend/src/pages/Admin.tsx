import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { BackButton } from "../components/ui/BackButton";

import { useGoBack } from "../hooks/useGoBack";

import { AdminSkeleton } from "../components/skeletons/admin/AdminSkeleton";
import { useState } from "react";

export const Admin = () => {
  const [isLoading] = useState(true);
  const { goBack } = useGoBack();

  if (isLoading) {
    return <AdminSkeleton />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
        Painel Administrador
      </h1>

      <section className="w-full p-4">
        <BackButton text="Voltar para o inicio" onClick={() => goBack("/")} />
      </section>

      <div className="space-y-6 p-2 w-full mt-10">
        <section className="w-full grid grid-cols-2 items-center p-2 gap-2">
          <Link to={`/admin/events/pending`}>
            <div
              className="flex items-center justify-center w-full min-h-50 bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <Button className="bg-(--primary-color) hover:bg-(--primary-color-hover) duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer">
                Ver eventos pendentes
              </Button>
            </div>
          </Link>
          <Link to={`/admin/events/past`}>
            <div
              className="flex items-center justify-center w-full min-h-50 bg-white dark:bg-slate-900 
      border border-gray-200 dark:border-slate-700 
      rounded-2xl overflow-hidden
      transition-all duration-300 
      hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <Button className="bg-(--primary-color) hover:bg-(--primary-color-hover) duration-200 ease-in-out text-white px-4 py-2 rounded-lg cursor-pointer">
                Ver projetos passados
              </Button>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};
