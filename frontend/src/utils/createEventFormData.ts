import type { EventFormData } from "../schemas/eventSchema";

export const createEventFormData = (
  data: EventFormData,
  imageFile: File | null,
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

  return formData;
};
