import type { EventFormData } from "../schemas/eventSchema";

export const createEventFormData = (
  data: EventFormData,
  imageFile: File | null,
  imageFiles: File[],
) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  if (imageFile) {
    formData.append("image", imageFile);
  }

  imageFiles.forEach((file) => {
    formData.append("images", file);
  });

  return formData;
};
