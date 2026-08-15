import { PublishEventPast } from "../components/gallery/PublishEventPast";
import { CardGallery } from "../components/ui/gallery/CardGallery";
import { useGallery } from "../hooks/useGallery";

export const Gallery = () => {
  const { posts, loading } = useGallery();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Carregando...
      </div>
    );
  }

  return (
    <div className="space-y-10 flex flex-col items-center w-full px-4 max-w-6xl mx-auto mt-20">
      <section>
        <h1 className="text-4xl font-bold text-(--text-color) dark:text-(--text-color-dark) text-center text-wrap max-w-2xl">
          Galeria de fotos dos{" "}
          <span className="text-(--primary-color)">eventos</span>
        </h1>

        <p className="text-lg text-gray-500 mt-4 rounded-lg p-4 max-w-2xl text-justify wrap-break-word whitespace-pre-line">
          Explore nossa galeria de fotos dos eventos anteriores e veja os
          momentos incríveis que vivemos juntos.
        </p>
      </section>

      <PublishEventPast />

      <section className="w-full">
        <span className="bg-violet-500/20 text-(--primary-color) dark:text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
          Fotos em destaque
        </span>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {posts.map((post) => (
            <CardGallery key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
};
