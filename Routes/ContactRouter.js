import express from "express";
import {
  deleteContactById,
  getAllContact,
  getContactById,
  getContactByUserId,
  newContact,
  updateContactById,
} from "../Controllers/ContactController.js";
import { isAuthenticated } from "../Middlewares/Auth.js"; // Corrected spelling

const router = express.Router();

/**
 * @route   POST /api/contact/new
 * @desc    Create a new contact
 * @access  Private
 */
router.post("/new", isAuthenticated, newContact);

/**
 * @route   GET /api/contact/
 * @desc    Get all contacts
 * @access  Public
 */
router.get("/", getAllContact);

/**
 * @route   GET /api/contact/:id
 * @desc    Get contact by ID
 * @access  Public
 */
router.get("/:id", getContactById);

/**
 * @route   PUT /api/contact/:id
 * @desc    Update contact by ID
 * @access  Private
 */
router.put("/:id", isAuthenticated, updateContactById);

/**
 * @route   DELETE /api/contact/:id
 * @desc    Delete contact by ID
 * @access  Private
 */
router.delete("/:id", isAuthenticated, deleteContactById);

/**
 * @route   GET /api/contact/userid/:id
 * @desc    Get contacts by user ID
 * @access  Public
 */
router.get("/userid/:id", getContactByUserId);

export default router;
