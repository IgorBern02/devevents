import express from "express";
import cors from "cors";
import { router } from "./routes/eventRoutes";
import { router as eventPastRoutes } from "./routes/eventPastRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", router);
app.use("/past-events", eventPastRoutes);

export { app };
