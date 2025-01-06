import { NextFunction, Request, Response } from "express";
import bookModel from "./bookModel";
const createBook = async (req: Request, res: Response, next: NextFunction)=>{
res.json({})
}

export {createBook}