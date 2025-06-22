import express from "express";
import mongoose from "mongoose";
const app = express();

//user routes
//@api dscription:- user register
//@api method:- POST
// @api endpoint:- /api/user/register
app.post("/api/user/register", (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Here you would typically save the user to the database
  // For now, we'll just send a success response
  res
    .status(201)
    .json({ message: "User registered successfully", user: { name, email } });
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
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
