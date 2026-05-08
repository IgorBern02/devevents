import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { CiHashtag } from "../components/ui/icons";
import { PiBracketsCurlyLight } from "../components/ui/icons";
import { IoCodeSlashOutline } from "../components/ui/icons";

export const Home = () => {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center w-full h-full p-2 mt-20">
      <section>
        <h1 className="text-5xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl ">
          Encontre eventos <span className="text-(--primary-color)">tech</span>{" "}
          pelo Brasil
        </h1>
        <p className="text-lg text-gray-500  mt-4 rounded-lg p-4 max-w-2xl text-justify wrap-break-word whitespace-pre-line78 ">
          Descubra eventos de tecnologia em todo o Brasil e conecte-se com a
          comunidade tech local. Encontre conferências, meetups e workshops
          perto de você e fique por dentro das últimas tendências do setor.
        </p>
      </section>

      <section className="w-1/3  rounded-lg flex items-center justify-around gap-4 text-sm text-(--text-color) dark:text-(--text-color-dark)">
        <div
          className="group flex items-center gap-2 border border-gray-100 hover:border-(--primary-color) bg-gray-50 px-2 py-3 rounded-xl  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out 
hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <CiHashtag className="text-(--primary-color) transition-transform duration-300 group-hover:rotate-12" />
          <p>Conferências</p>
        </div>
        <div
          className="group flex items-center gap-2 border border-gray-100 hover:border-(--primary-color) bg-gray-50 px-2 py-3 rounded-xl  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out 
hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <IoCodeSlashOutline className="text-(--primary-color) transition-transform duration-300 group-hover:rotate-12" />
          <p>Meetups</p>
        </div>
        <div
          className="group flex items-center gap-2 border border-gray-100 hover:border-(--primary-color) bg-gray-50 px-2 py-3 rounded-xl   hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  transition-all duration-300 ease-in-out 
hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <PiBracketsCurlyLight className="text-(--primary-color) transition-transform duration-300 group-hover:rotate-12" />
          <p>Workshops</p>
        </div>

        <Link to={"/submit-event"}>
          <Button className="p-2 border bg-red-300">formulario</Button>
        </Link>
      </section>
    </div>
  );
};
