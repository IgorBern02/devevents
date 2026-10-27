interface CardAboutProps {
  icon?: React.ReactNode;
  title: string;
  highlight: string;
  children: React.ReactNode;
}

export const CardAbout = ({
  icon,
  title,
  highlight,
  children,
}: CardAboutProps) => {
  return (
    <section className="space-y-4 w-full flex flex-col items-center px-2 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
      {icon && <div className="text-5xl text-(--primary-color)">{icon}</div>}
      <h2 className="font-bold text-(--text-color) dark:text-(--text-color-dark)">
        {title} {highlight}
      </h2>

      <div className="text-sm text-gray-500 rounded-lg p-4 text-center">
        {children}
      </div>
    </section>
  );
};
