import express from "express";
import { addHistory, deleteHistory, getHistory } from "../controller/history.js";


const router=express.Router();

router.post('/new',addHistory)
router.post('/get',getHistory);
router.post('/delete',deleteHistory)

export default router;