import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export const FormInput = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: FormInputProps) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-(--text-color) dark:text-(--text-color-dark)">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="
          w-full
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
