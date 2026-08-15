interface SubmitEventHeaderProps {
  badge?: string;
  title: string;
  highlight: string;
  description: string;
}

export const SubmitEventHeader = ({
  badge,
  title,
  highlight,
  description,
}: SubmitEventHeaderProps) => {
  return (
    <section className="text-center mb-12">
      <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
        {badge}
      </span>

      <h1 className="text-5xl font-extrabold text-(--text-color) dark:text-(--text-color-dark) mt-6 leading-tight">
        {title}
        <span className="text-violet-500"> {highlight}</span>
      </h1>

      <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </section>
  );
};
