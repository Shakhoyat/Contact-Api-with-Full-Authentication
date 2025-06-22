import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

/**
 * Middleware to check if the user is authenticated.
 * Verifies JWT token from the request header and attaches the user to the request object.
 */
export const isAuthenticated = async (req, res, next) => {
  // Get token from the 'Auth' header
  const token = req.header("Auth");

  // If no token is provided, prompt user to login
  if (!token) return res.json({ message: "Login first" });

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT);
    const id = decoded.userId;

    // Find the user by ID
    const user = await User.findById(id);

    // If user does not exist, return error
    if (!user) return res.json({ message: "User not found" });

    // Attach user to request object
    req.user = user;

    // Proceed to next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid token or other errors
    return res.json({ message: "Invalid token" });
  }
};
