import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRouter from "./Routes/user_router.js";

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
app.post("/api/user", userRouter);

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
