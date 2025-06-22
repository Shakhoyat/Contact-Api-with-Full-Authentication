import express from "express";
import mongoose from "mongoose";
const app = express();

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
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
