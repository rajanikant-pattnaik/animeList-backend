import mongoose from "mongoose";

const historySchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    animeId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    }
})

export const history=mongoose.model("history",historySchema);