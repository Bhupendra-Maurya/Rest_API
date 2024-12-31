import { config } from "./config";
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected Successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Failed to connect to DB", err);
    });
    await mongoose.connect(config.databaseURL as string)
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
