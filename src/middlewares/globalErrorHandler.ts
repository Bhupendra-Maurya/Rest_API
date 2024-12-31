import { HttpError } from "http-errors";
import { Request, Response } from "express";
import { config } from "../config/config";

const globalErrorHandler = ((err: HttpError, req: Request, res: Response) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
   res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "development" ? err.stack : "",
  });
  return;
})

export default globalErrorHandler;
