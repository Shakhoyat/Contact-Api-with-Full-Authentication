import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/UserRouter.js";
import contactRouter from "./Routes/ContactRouter.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" }); // Only call this once

const app = express();

app.use(bodyParser.json());

app.use("/api/user", userRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

mongoose
  .connect(process.env.MONGODB_URL, { dbName: process.env.DB_NAME })
  .then(() => console.log("MongoDB connection successful!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
