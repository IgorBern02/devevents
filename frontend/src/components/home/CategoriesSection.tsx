import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { CiHashtag } from "../ui/icons";
import { PiBracketsCurlyLight } from "../ui/icons";
import { IoCodeSlashOutline } from "../ui/icons";

import { CategoryCard } from "./CategoryCard";

export const CategoriesSection = () => {
  return (
    <section className="flex items-center justify-center gap-4 flex-wrap text-sm text-(--text-color) dark:text-(--text-color-dark)">
      <CategoryCard icon={<CiHashtag />} title="Conferências" />

      <CategoryCard icon={<IoCodeSlashOutline />} title="Meetups" />

      <CategoryCard icon={<PiBracketsCurlyLight />} title="Workshops" />

      <Link to="/admin/events">
        <Button>adm</Button>
      </Link>
    </section>
  );
};
