import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/UserRouter.js";
import contactRouter from "./Routes/ContactRouter.js";
import dotenv from "dotenv";

const app = express();

// Middleware to parse JSON bodies from incoming requests
app.use(bodyParser.json());

// User routes
app.use("/api/user", userRouter);

// Contact routes
app.use("/api/contact", contactRouter);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// Connect to MongoDB using Mongoose
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, { dbName: process.env.DB_NAME })
  .then(() => console.log("MongoDB connection successful!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
