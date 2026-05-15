import type { Request, Response } from "express";
import { Event } from "../models/eventModel";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find({
      approved: true,
    });
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

export const getPendingEvents = async (req: Request, res: Response) => {
  console.log("ROTA PENDING CHAMADA");

  try {
    const events = await Event.find({
      approved: { $ne: true },
    });

    res.json(events);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error fetching pending events" });
  }
};

export const approveEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      {
        approved: true,
      },
      {
        new: true,
      },
    );

    res.json(event);
  } catch (error) {
    console.log(error);

    res.status(400).json({
      message: "Error approving event",
    });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const {
      title,
      responsible,
      description,
      date,
      hour,
      day,
      type,
      city,
      location,
      link,
    } = req.body;

    const image = req.file?.path;

    const event = new Event({
      title,
      responsible,
      description,
      date,
      hour,
      day,
      type,
      city,
      location,
      link,
      image,
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
