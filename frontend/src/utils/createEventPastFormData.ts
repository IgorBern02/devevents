import type { EventPastFormData } from "../schemas/eventPastSchema";

export const createEventPastFormData = (
  data: EventPastFormData,
  imageFiles: File[],
) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  imageFiles.forEach((file) => {
    formData.append("images", file);
  });

  return formData;
};
