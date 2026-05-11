import { CardGallery } from "../components/ui/gallery/CardGallery";

export const Gallery = () => {
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
      <section className="w-full">
        <span className="bg-violet-500/20 text-(--primary-color) dark:text-violet-400 border border-violet-500/30 px-4 py-2 rounded-full text-sm font-medium">
          Fotos em destaque
        </span>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          <CardGallery />
          <CardGallery />
          <CardGallery />
        </ul>
      </section>
    </div>
  );
};
