import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MANGO_URL);
  } catch (error) {
    console.log("Error connecting to MONGODB:" + error.message);
    process.exit(1); //1-error; 0-success
  }
};
