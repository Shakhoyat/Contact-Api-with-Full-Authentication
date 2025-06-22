import { User } from "./Models/User.js";
import bcrypt from "bcrypt";
/**
 * @desc Register a new user
 * @route POST /api/users/register
 * @access Public
 */
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let userExists = await User.findOne({ email });
  if (userExists) {
    return res.json({ message: "User already exists", success: false });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json({
    message: "User created successfully",
    success: true,
    user,
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found", success: false });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ message: "Invalid credentials", success: false });
  }
};
