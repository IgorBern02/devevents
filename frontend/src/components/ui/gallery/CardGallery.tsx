import { AiOutlineTeam } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";

export const CardGallery = () => {
  return (
    <div className="group w-full h-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg rounded-lg cursor-pointer overflow-hidden transition duration-300 ease-in-out">
      <section className="w-full h-48 flex items-center justify-center p-4 bg-red-400 rounded-t-lg group-hover:scale-105 transition duration-300 ease-in-out">
        <p>img</p>
      </section>

      <section className="flex flex-col items-left gap-4 p-2">
        <p className="text-3xl text-(--text-color) dark:text-(--text-color-dark) ml-2 font-semibold">
          Title
        </p>
        <section className="flex items-center p-2 gap-4">
          <div className="flex gap-1">
            <BsCalendarDate className="text-(--primary-color dark:text-(--text-color-dark))" />
            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              20/01/2023
            </p>
          </div>
          <div className="flex gap-1">
            <AiOutlineTeam className="text-(--primary-color dark:text-(--text-color-dark))" />
            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              TECHXRM
            </p>
          </div>
          <div className="flex gap-1">
            <AiOutlineTeam className="text-(--primary-color dark:text-(--text-color-dark))" />
            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              5 fotos
            </p>
          </div>
        </section>
        <p className="text-sm text-(--text-color) dark:text-(--text-color-dark) ml-2">
          postado por{" "}
          <span className="text-(--primary-color) dark:text-(--primary-color-dark) font-bold">
            <em>user</em>
          </span>{" "}
          em{" "}
          <span className="text-(--primary-color) dark:text-(--primary-color-dark) font-bold">
            <em>data</em>
          </span>
        </p>
      </section>
    </div>
  );
};
