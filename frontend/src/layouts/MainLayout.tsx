import { Header } from "../components/navigation/Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-(--background-color) dark:bg-(--background-color-dark) text-(--text-color) dark:text-(--text-color-dark) transition-colors">
      <Header />
      <main className="px-16 py-6">{children}</main>
    </div>
  );
};
