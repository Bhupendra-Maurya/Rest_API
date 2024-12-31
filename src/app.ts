import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is OK" });
});

// user router
app.use('/api/users',userRouter)

// Global error handler
app.use(globalErrorHandler);

export default app;
