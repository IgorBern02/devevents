import { eventsService } from "../services/eventsService";

export const useAdminEventActions = () => {
  const approveEvent = async (id: string) => {
    try {
      await eventsService.approveEvent(id);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await eventsService.deleteEvent(id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    approveEvent,
    deleteEvent,
  };
};
