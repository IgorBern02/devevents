import type { GalleryPost } from "../../../types/GalleryPost";
import { AiOutlineTeam, BsCalendarDate } from "../icons";

interface CardGalleryProps {
  post: GalleryPost;
}

export const CardGallery = ({ post }: CardGalleryProps) => {
  return (
    <div className="group w-full h-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg rounded-lg cursor-pointer overflow-hidden transition duration-300 ease-in-out">
      <section className="w-full h-48 flex items-center justify-center p-4 bg-red-400 rounded-t-lg group-hover:scale-105 transition duration-300 ease-in-out">
        <img
          src={post.images[0]}
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </section>

      <section className="flex flex-col items-left gap-4 p-2">
        <p className="text-3xl text-(--text-color) dark:text-(--text-color-dark) ml-2 font-semibold">
          {post.title}
        </p>

        <section className="flex items-center p-2 gap-4">
          <div className="flex gap-1">
            <BsCalendarDate className="text-(--primary-color)" />

            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              {post.date}
            </p>
          </div>

          <div className="flex gap-1">
            <AiOutlineTeam className="text-(--primary-color)" />

            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              {post.responsible}
            </p>
          </div>

          <div className="flex gap-1">
            <AiOutlineTeam className="text-(--primary-color)" />

            <p className="text-xs text-(--text-color) dark:text-(--text-color-dark)">
              {post.images.length} fotos
            </p>
          </div>
        </section>

        <p className="text-sm text-(--text-color) dark:text-(--text-color-dark) ml-2">
          postado por{" "}
          <span className="text-(--primary-color) dark:text-(--primary-color-dark) font-bold">
            <em>{post.responsible}</em>
          </span>{" "}
          em{" "}
          <span className="text-(--primary-color) dark:text-(--primary-color-dark) font-bold">
            <em>{post.date}</em>
          </span>
        </p>
      </section>
    </div>
  );
};
