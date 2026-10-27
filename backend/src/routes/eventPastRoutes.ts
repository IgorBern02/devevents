import { Router } from "express";

import {
  getEventsPast,
  getEventPastById,
  createEventPast,
  approveEventPast,
} from "../controllers/eventPastController";

import { upload } from "../middlewares/upload";

const router = Router();

router.get("/events/past/all", getEventsPast);

router.get("/:id", getEventPastById);

router.post(
  "/",
  upload.fields([
    {
      name: "images",
      maxCount: 10,
    },
  ]),
  createEventPast,
);

router.patch("/:id/approve", approveEventPast);

export { router };
