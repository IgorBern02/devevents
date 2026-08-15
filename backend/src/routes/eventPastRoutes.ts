import { Router } from "express";
import {
  getEventsPast,
  getEventPastById,
  createEventPast,
} from "../controllers/eventPastController";
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/", getEventsPast);
router.get("/:id", getEventPastById);

router.post(
  "/past",
  upload.fields([{ name: "images", maxCount: 10 }]),
  createEventPast,
);

export { router };
