export const AboutFooter = () => {
  return (
    <section className="space-y-4">
      <h2
        className="
              text-3xl
              font-bold
              text-(--text-color)
              dark:text-(--text-color-dark)
            "
      >
        Dev<span className="text-(--primary-color)">Events</span>
      </h2>

      <p
        className="
              text-gray-500
              leading-relaxed
              max-w-sm
            "
      >
        Plataforma criada para conectar desenvolvedores, designers e entusiastas
        da tecnologia aos melhores eventos do Brasil.
      </p>
    </section>
  );
};
