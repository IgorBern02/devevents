export const Home = () => {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Encontre eventos tech pelo Brasil
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Descubra, compartilhe e participe de eventos da comunidade.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Eventos em destaque</h2>
        {/* Lista de eventos aqui */}
      </section>
    </div>
  );
};
