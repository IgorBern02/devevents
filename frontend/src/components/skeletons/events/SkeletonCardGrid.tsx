import { EventCardSkeleton } from "./EventCardSkeleton";

export const SkeletonCardGrid = () => {
  return (
    <div
      className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20
        "
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </div>
  );
};
