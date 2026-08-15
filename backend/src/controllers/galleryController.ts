import type { Request, Response } from "express";
import { GalleryPost } from "../models/galleryPostModel";

export const getGalleryPosts = async (req: Request, res: Response) => {
  try {
    const posts = await GalleryPost.find({
      approved: true,
    }).sort({
      createdAt: -1,
    });

    res.json(posts);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching gallery posts",
    });
  }
};
