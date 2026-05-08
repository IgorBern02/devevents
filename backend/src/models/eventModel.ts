import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    hour: { type: String, required: true },
    day: { type: String, required: true },
    type: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, default: "" },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const Event = mongoose.model("Event", eventSchema);
