import type { Request, Response } from "express";
import { EventPast } from "../models/eventPastModel";

export const getEventsPast = async (req: Request, res: Response) => {
  try {
    const events = await EventPast.find({
      approved: true,
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
};

export const getEventPastById = async (req: Request, res: Response) => {
  try {
    const event = await EventPast.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event" });
  }
};

export const createEventPast = async (req: Request, res: Response) => {
  try {
    const { title, responsible, date } = req.body;

    const files = req.files as { images?: Express.Multer.File[] };

    const images = files.images?.map((file) => file.filename) || [];

    const event = new EventPast({
      title,
      responsible,
      images,
      date,
      approved: true,
    });

    await event.save();

    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error creating event",
      error,
    });
  }
};
