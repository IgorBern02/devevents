import { CiCamera } from "react-icons/ci";

interface Props {
  preview: string | null;

  setPreview: (preview: string | null) => void;

  setImageFile: (file: File | null) => void;
}

export const ImageUpload = ({ preview, setPreview, setImageFile }: Props) => {
  return (
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
        Imagem do Evento
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
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              setImageFile(file);

              setPreview(URL.createObjectURL(file));
            }
          }}
        />

        {!preview ? (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              p-6
            "
          >
            <div
              className="
                w-16
                h-16
                rounded-full
                bg-(--primary-color)/10
                flex
                items-center
                justify-center
                mb-4
                group-hover:scale-110
                transition-transform
              "
            >
              <CiCamera className="text-3xl" />
            </div>

            <p
              className="
                text-lg
                font-semibold
                text-(--text-color)
                dark:text-(--text-color-dark)
              "
            >
              Clique para enviar imagem
            </p>

            <p className="text-sm text-gray-500 mt-2">PNG, JPG ou JPEG</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={preview}
              alt="Preview"
              className="
                w-full
                h-72
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/40
                opacity-0
                hover:opacity-100
                transition-opacity
                flex
                items-center
                justify-center
              "
            >
              <span
                className="
                  bg-white
                  text-black
                  px-4
                  py-2
                  rounded-xl
                  font-medium
                "
              >
                Trocar imagem
              </span>
            </div>
          </div>
        )}
      </label>
    </div>
  );
};
