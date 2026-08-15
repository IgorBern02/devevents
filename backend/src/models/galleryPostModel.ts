import mongoose from "mongoose";

const galleryPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    responsible: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
      required: true,
      default: [],
    },

    date: {
      type: Date,
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const GalleryPost = mongoose.model("GalleryPost", galleryPostSchema);
