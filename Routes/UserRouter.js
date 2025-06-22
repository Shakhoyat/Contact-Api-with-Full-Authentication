import express from "express";
import { registerUser, loginUser } from "../Controllers/UserController";

const router = express.Router();

//user routes
//@api dscription:- user register
//@api method:- POST
// @api endpoint:- /api/user/register
router.post("/register", registerUser);
//user routes
//@api dscription:- user register
//@api method:- POST
// @api endpoint:- /api/user/login
router.post("/login", loginUser);

export default router;
