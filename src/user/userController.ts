import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userType";

// Create new Users
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  // Validation
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  //   database
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const error = createHttpError(
        400,
        `User already exist with email: ${email}`
      );
      return next(error);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return next(
      createHttpError(500, `Failed to get user with email: ${email}`)
    );
  }

  //   password hashing
  const hashPassword = await bcrypt.hash(password, 10);

  let newUser: User;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
  } catch (err) {
    return next(createHttpError(500, `Failed to create user ${err}`));
  }

  //   Token generation JWT
  try {
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });
    res.status(201).json({ accessToken: token });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return next(createHttpError(500, "Error while gihning jwt token"));
  }
};
