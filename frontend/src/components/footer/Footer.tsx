import { NavFooter } from "./NavFooter";
import { AboutFooter } from "./AboutFooter";
import { ShareFooter } from "./ShareFooter";
import { BottomFooter } from "./Bottom";

export const Footer = () => {
  return (
    <footer
      className="
        mt-24
        bg-gray-100
        dark:bg-gray-800
        backdrop-blur-md
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-14
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >
        <AboutFooter />

        <NavFooter />

        <ShareFooter />
      </div>

      <BottomFooter />
    </footer>
  );
};
