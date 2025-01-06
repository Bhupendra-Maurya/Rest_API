import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Server is OK" });
});

// user router
app.use("/api/users", userRouter);
//Book Router
app.use("/api/books", bookRouter);
// Global error handler
app.use(globalErrorHandler);

export default app;
