import type { Dispatch, SetStateAction } from "react";
import { CiCamera, CiTrash } from "../ui/icons";

interface Props {
  previews: string[];
  setPreviews: Dispatch<SetStateAction<string[]>>;

  setImageFiles: Dispatch<SetStateAction<File[]>>;
}

export const ImageUploadEventPast = ({
  previews,
  setPreviews,
  setImageFiles,
}: Props) => {
  const MAX_GALLERY_IMAGES = 10;

  const handleGalleryChange = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    setImageFiles((prevFiles) => {
      const remainingSlots = MAX_GALLERY_IMAGES - prevFiles.length;

      return [...prevFiles, ...selectedFiles.slice(0, remainingSlots)];
    });

    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setPreviews((prevPreviews) => {
      const remainingSlots = MAX_GALLERY_IMAGES - prevPreviews.length;

      return [...prevPreviews, ...previewUrls.slice(0, remainingSlots)];
    });
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(previews[index]);

    setPreviews((prev) => prev.filter((_, i) => i !== index));

    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
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

        <p className="text-sm text-gray-500 mt-2">
          {previews.length}/{MAX_GALLERY_IMAGES} fotos selecionadas
        </p>

        {previews.length >= MAX_GALLERY_IMAGES && (
          <p className="text-sm text-red-500">
            Limite de {MAX_GALLERY_IMAGES} fotos atingido.
          </p>
        )}

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {previews.map((image, index) => (
              <div key={`${image}-${index}`} className="relative">
                <img
                  src={image}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 cursor-pointer"
                >
                  <CiTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
