import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export const EventCardSkeleton = () => {
  return (
    <div
      className="
        rounded-2xl
        overflow-hidden
        bg-white
        dark:bg-gray-800
        shadow-md
      "
    >
      <Skeleton height={220} className="w-full" />

      <div className="p-5 space-y-5">
        <Skeleton width={110} height={28} borderRadius={999} />

        <Skeleton height={34} width="80%" />

        <div className="space-y-2">
          <Skeleton height={16} />

          <Skeleton height={16} />

          <Skeleton height={16} width="70%" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <Skeleton width={120} height={18} />

          <Skeleton width={80} height={35} borderRadius={12} />
        </div>
      </div>
    </div>
  );
};
