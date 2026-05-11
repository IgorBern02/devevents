import { Router } from "express";

import {
  getEvents,
  getEventById,
  getPendingEvents,
  createEvent,
  approveEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const router = Router();

router.get("/", getEvents);

router.get("/pending/all", getPendingEvents);

router.get("/:id", getEventById);

router.post("/", createEvent);

router.patch("/:id/approve", approveEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

export { router };
