import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/user.js";
import historyRouter from "./router/history.js";
import cors from "cors";
export const app=express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1/users",userRouter);
app.use("/api/v1/history",historyRouter);

app.get('/',(req,res)=>{
    res.send('Nice')
})