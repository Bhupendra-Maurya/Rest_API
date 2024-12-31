import express from "express";
const app = express();

//Routes

// HTTP Methods
app.get("/", (req, res) => {
  res.json({ message: "Server is OK" });
});

// global error handler

export default app;
