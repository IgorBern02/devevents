import express from "express";
import cors from "cors";
import { router } from "./routes/eventRoutes";
import { router as galleryRoutes } from "./routes/galleryRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", router);
app.use("/gallery", galleryRoutes);

export { app };
