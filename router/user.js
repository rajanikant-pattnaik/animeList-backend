import { login,register } from "../controller/user.js";
import express from "express";

const router=express.Router();


router.post('/new',register)
router.post('/login',login)

export default router;
