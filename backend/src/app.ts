import express from "express";
import cors from "cors";
import { router as home } from "./routes/home";
import { router as events } from "./routes/eventRoutes";
import { router as eventPastRoutes } from "./routes/eventPastRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", home);
app.use("/events", events);
app.use("/past-events", eventPastRoutes);

export { app };
