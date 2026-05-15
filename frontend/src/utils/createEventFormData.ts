import type { EventFormData } from "../schemas/eventSchema";

export const createEventFormData = (
  data: EventFormData,
  imageFile: File | null,
) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("responsible", data.responsible);
  formData.append("description", data.description);
  formData.append("date", data.date);
  formData.append("hour", data.hour);
  formData.append("day", data.day);
  formData.append("type", data.type);

  formData.append("city", data.city || "");
  formData.append("location", data.location || "");
  formData.append("link", data.link || "");

  if (imageFile) {
    formData.append("image", imageFile);
  }

  return formData;
};
