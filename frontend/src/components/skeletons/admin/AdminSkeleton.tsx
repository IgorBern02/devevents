import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const AdminSkeleton = () => {
  return (
    <div
      className="
        space-y-10
        flex
        flex-col
        items-center
        w-full
        px-4
        max-w-4xl
        mx-auto
        mt-20
      "
    >
      <section className="w-full p-4">
        <Skeleton width={140} height={40} />
      </section>

      <section
        className="
          w-full
          shadow-lg 
            rounded-lg
            overflow-hidden
            bg-white
            dark:bg-gray-800
        "
      >
        <Skeleton height={380} />
        <div className="p-6 space-y-6">
          <Skeleton height={45} width="70%" />
          <Skeleton count={5} />
          <div>
            <Skeleton height={30} width="30%" />
          </div>
        </div>
      </section>
    </div>
  );
};
