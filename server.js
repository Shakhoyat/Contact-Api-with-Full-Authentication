import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/UserRouter.js";
import contactRouter from "./Routes/ContactRouter.js";

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

//user router
app.use("/api/user", userRouter);
//contact router
app.use("/api/contact", contactRouter);
//home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page Brooo!");
});

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shakoyatsujon:3W8IdD5g6kON8AJW@cluster0.0p8evwy.mongodb.net/",
    { dbName: "Nodejs101" }
  )
  .then(() => console.log("MongoDB connection successful!!!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
