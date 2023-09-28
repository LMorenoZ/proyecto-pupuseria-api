import express from "express";
import morgan from "morgan";
import cors from "cors";
// Routes
import mesasRoutes from "./routes/mesa.routes";
import ordenRoutes from "./routes/orden.routes";

const app = express();

// habilitar cors
app.use(cors());

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/mesa", mesasRoutes);
app.use("/api/orden", ordenRoutes);

export default app;
