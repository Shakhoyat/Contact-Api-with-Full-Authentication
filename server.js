import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { User } from "./Models/User.js";

const app = express();
app.use(bodyParser.json());

//home route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page Brooo!");
});

//user routes
//@api dscription:- user register
//@api method:- POST
// @api endpoint:- /api/user/register
app.post("/api/user/register", async (req, res) => {
  const { name, email, password } = req.body;
  //   console.log("printing user data:", req.body);
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let user = await User.create({
    name,
    email,
    password, // In a real application, you should hash the password before saving it
  });
  res.json({
    message: "User created successfully",
    success: true,
  });
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
