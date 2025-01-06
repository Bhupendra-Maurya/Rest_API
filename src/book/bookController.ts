import { NextFunction, Request, Response } from "express";
import bookModel from "./bookModel";

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const {} = req.body;
  res.json({});
};

export { createBook };
