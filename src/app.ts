import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is OK" });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
