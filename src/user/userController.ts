import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // Validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  //   database
  const user = await userModel.findOne({ email });
  if (user) {
    const error = createHttpError(400, "User already exist with this email");
    return next(error);
  }

  //   hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  //   create new users
  const newUser = await userModel.create({
    name,
    email,
    password: hashPassword,
  });
  //   Token generation JWT
  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });
  res.json({ accessToken: token });
};

export { createUser };
