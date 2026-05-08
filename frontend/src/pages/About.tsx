export const About = () => {
  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-6xl mx-auto mt-20">
      <section>
        <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
          Sobre <span className="text-(--primary-color)">nós</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4 rounded-lg p-4 max-w-2xl text-justify wrap-break-word whitespace-pre-line">
          Esse é um site para divulgação de{" "}
          <span className="text-(--text-color) dark:text-(--text-color-dark) font-bold">
            eventos de tecnologia
          </span>
          , onde os usuários podem encontrar e se inscrever em eventos
          relacionados à tecnologia. O site oferece uma interface amigável para
          explorar eventos por categoria, localização e data, facilitando a
          conexão entre entusiastas de tecnologia e oportunidades de aprendizado
          e networking.
        </p>
      </section>
    </div>
  );
};
