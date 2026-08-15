import { api } from "./api";

export const eventsPastService = {
  async getEventPastPosts() {
    const response = await api.get("/past-events");

    return response.data;
  },

  async createPastEvent(formData: FormData) {
    try {
      const response = await api.post("/past-events/past", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error creating past event:", error);
      throw error;
    }
  },
};
