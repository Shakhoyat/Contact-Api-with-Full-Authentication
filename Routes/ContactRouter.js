import express from "express";
import { createContact } from "../Controllers/ContactController.js";
const router = express.Router();
//new contact
//@api dscription:- creating contact
//@api method:- POST
// @api endpoint:- /api/contact/new
router.post("/new", createContact);
export default router;
