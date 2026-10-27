import { api } from "./api";

export const eventsService = {
  async getEvents() {
    const response = await api.get("/events");

    return response.data;
  },

  async getPendingEvents() {
    const response = await api.get("/events/pending/all");

    return response.data;
  },

  async getEventById(id: string) {
    const response = await api.get(`/events/${id}`);

    return response.data;
  },

  async approveEvent(id: string) {
    const response = await api.patch(`/events/${id}/approve`);

    return response.data;
  },

  async createEvent(data: FormData) {
    const response = await api.post("/events", data);

    return response.data;
  },

  async deleteEvent(id: string) {
    const response = await api.delete(`/events/${id}`);

    return response.data;
  },
};
