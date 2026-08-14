import { CiCamera } from "react-icons/ci";

interface Props {
  preview: string | null;
  setPreview: (preview: string | null) => void;
  setImageFile: (file: File | null) => void;

  previews: string[];
  setPreviews: (previews: string[]) => void;
  setImageFiles: (files: File[]) => void;
}

export const ImageUpload = ({
  preview,
  setPreview,
  setImageFile,
  previews,
  setPreviews,
  setImageFiles,
}: Props) => {
  const handleCoverChange = (file: File | undefined) => {
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleGalleryChange = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    setImageFiles(selectedFiles);

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setPreviews(previewUrls);
  };

  return (
    <div className="space-y-6">
      {/* CAPA */}
      <div className="space-y-4">
        <label
          className="
            block
            text-sm
            font-semibold
            text-(--text-color)
            dark:text-(--text-color-dark)
          "
        >
          Imagem principal do evento
        </label>

        <label
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            w-full
            min-h-56
            border-2
            border-dashed
            border-(--primary-color)
            rounded-2xl
            cursor-pointer
            transition-all
            duration-300
            hover:bg-(--primary-color)/5
            hover:border-violet-400
            overflow-hidden
            group
          "
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleCoverChange(e.target.files?.[0])}
          />

          {!preview ? (
            <div className="flex flex-col items-center justify-center text-center p-6">
              <CiCamera className="text-4xl mb-4" />

              <p className="text-lg font-semibold">Clique para enviar a capa</p>

              <p className="text-sm text-gray-500 mt-2">PNG, JPG ou JPEG</p>
            </div>
          ) : (
            <div className="relative w-full">
              <img
                src={preview}
                alt="Preview da capa"
                className="w-full h-72 object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-4 py-2 rounded-xl font-medium">
                  Trocar imagem
                </span>
              </div>
            </div>
          )}
        </label>
      </div>

      {/* GALERIA */}
      <div className="space-y-4">
        <label className="block text-sm font-semibold">Fotos da galeria</label>

        <label
          className="
            flex
            flex-col
            items-center
            justify-center
            w-full
            min-h-40
            border-2
            border-dashed
            border-(--primary-color)
            rounded-2xl
            cursor-pointer
            hover:bg-(--primary-color)/5
            transition-all
          "
        >
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleGalleryChange(e.target.files)}
          />

          <CiCamera className="text-4xl mb-3" />

          <p className="text-lg font-semibold">Clique para adicionar fotos</p>

          <p className="text-sm text-gray-500 mt-2">
            Você pode selecionar várias imagens
          </p>
        </label>

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previews.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Foto ${index + 1}`}
                className="w-full h-32 object-cover rounded-xl"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
