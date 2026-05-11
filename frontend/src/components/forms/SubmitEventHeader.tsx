export const SubmitEventHeader = () => {
  return (
    <section className="text-center mb-12">
      <span className="bg-violet-500/20 text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
        Compartilhe com a comunidade
      </span>

      <h1 className="text-5xl font-extrabold text-(--text-color) dark:text-(--text-color-dark) mt-6 leading-tight">
        Envie seu
        <span className="text-violet-500"> Evento Tech</span>
      </h1>

      <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
        Publique workshops, meetups, hackathons e conferências para que mais
        pessoas possam descobrir e participar.
      </p>
    </section>
  );
};
