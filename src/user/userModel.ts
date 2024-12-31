import mongoose from "mongoose";
import { User } from "./userType";

const userSchema = new mongoose.Schema<User>(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<User>("User", userSchema);
