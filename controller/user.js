import { user } from "../models/user.js";

export const login=async(req,res)=>{
   try {
      const {email,password}=req.body;
      const curruser=await user.findOne({email,password});
      if(!curruser){
        res.status(400).json({
            success:false,
            message:"user not found",
        })
      }
      else{
        res.status(200).json({
            success:true,
            curruser,
        })
      }
   } catch (error) {
    res.status(400).json({
        success:false,
        message:"user not found",
    })
  
   }
}

export const register=async(req,res)=>{
    try {
        const newuser=new user(req.body)
        await newuser.save();
        res.status(201).json({
            success:true,
            newuser,
        })
    } catch (error) {
        res.status(400).send(error)
    }
}