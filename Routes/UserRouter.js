import express from "express";
import { registerUser } from "../Controllers/UserController";

const router = express.Router();

//user routes
//@api dscription:- user register
//@api method:- POST
// @api endpoint:- /api/user/register
router.post("/register", registerUser);

export default router;
