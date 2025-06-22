import express from "express";
import { registerUser, loginUser } from "../Controllers/UserController.js";

const router = express.Router();

/**
 * @route   POST /api/user/register
 * @desc    Register a new user
 * @access  Public
 */
router.post("/register", registerUser);

/**
 * @route   POST /api/user/login
 * @desc    Authenticate user and get token
 * @access  Public
 */
router.post("/login", loginUser);

export default router;
