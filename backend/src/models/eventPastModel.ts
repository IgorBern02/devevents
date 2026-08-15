import mongoose from "mongoose";

const capitalizeWords = (value: string) => {
  if (!value) return value;

  return value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

const eventPastSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, set: capitalizeWords },
    responsible: { type: String, required: true, set: capitalizeWords },
    images: { type: [String], default: [] },
    date: { type: Date, required: true },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const EventPast = mongoose.model("EventPast", eventPastSchema);
