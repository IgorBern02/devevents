import mongoose from "mongoose";

const capitalizeWords = (value: string) => {
  if (!value) return value;

  return value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, set: capitalizeWords },
    responsible: { type: String, required: true, set: capitalizeWords },
    image: { type: String, default: "" },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    hour: { type: String, required: true },
    day: { type: String, required: true, set: capitalizeWords },
    type: { type: String, required: true, set: capitalizeWords },
    city: { type: String, required: false, set: capitalizeWords },
    location: { type: String, required: false, set: capitalizeWords },
    link: { type: String, required: false },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const Event = mongoose.model("Event", eventSchema);
