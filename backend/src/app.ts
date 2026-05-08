import express from "express";
import cors from "cors";
import { router } from "./routes/eventRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", router);

export { app };
