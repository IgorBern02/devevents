import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const FormTextarea = ({
  label,
  placeholder,
  register,
  error,
}: FormTextareaProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        {...register}
        className="
          w-full
          h-40
          resize-none
          border border-slate-700
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
          outline-none
          transition-all
          rounded-xl
          p-4
          text-(--text-color)
          dark:text-(--text-color-dark)
          placeholder:text-gray-500
        "
      />

      {error && <p className="text-red-400 text-sm mt-2">{error.message}</p>}
    </div>
  );
};
