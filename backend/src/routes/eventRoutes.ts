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
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/", getEvents);

router.get("/pending/all", getPendingEvents);

router.get("/:id", getEventById);

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "images", maxCount: 10 },
  ]),
  createEvent,
);

router.patch("/:id/approve", approveEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

export { router };
