export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center max-w-2xl">
        Encontre eventos <span className="text-(--primary-color)">tech</span>{" "}
        pelo Brasil
      </h1>

      <p className="text-lg text-gray-500 mt-4 rounded-lg p-4 max-w-2xl text-justify">
        Descubra eventos de tecnologia em todo o Brasil e conecte-se com a
        comunidade tech local. Encontre conferências, meetups e workshops perto
        de você.
      </p>
    </section>
  );
};
