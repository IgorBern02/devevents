import { Header } from "../components/navigation/Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="px-6 py-4">{children}</main>
    </div>
  );
};
