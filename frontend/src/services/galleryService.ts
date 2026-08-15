import { api } from "./api";

export const galleryService = {
  async getGalleryPosts() {
    const response = await api.get("/gallery");

    return response.data;
  },
};
