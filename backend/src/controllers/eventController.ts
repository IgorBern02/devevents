import type { Request, Response } from "express";
import { Event } from "../models/eventModel";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event" });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, date, hour, day, type, city, location } =
      req.body;
    const event = new Event({
      title,
      description,
      date,
      hour,
      day,
      type,
      city,
      location,
    });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: "Error creating event", error });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: "Error updating event" });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event" });
  }
};
