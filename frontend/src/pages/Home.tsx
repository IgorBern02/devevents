import { HeroSection } from "../components/home/HeroSection";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { PublishEventSection } from "../components/home/PublishEventSection";

export const Home = () => {
  return (
    <div className="space-y-10 mt-20">
      <HeroSection />
      <CategoriesSection />
      <PublishEventSection />
    </div>
  );
};
