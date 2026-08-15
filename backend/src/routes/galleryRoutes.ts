import { Router } from "express";
import { getGalleryPosts } from "../controllers/galleryController";

const router = Router();

router.get("/", getGalleryPosts);

export { router };
