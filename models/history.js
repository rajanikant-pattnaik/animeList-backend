import mongoose from "mongoose";

const historySchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    animeId:{
        type:String,
        unique:true
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
        type:Date,
        default:Date.now
    }
})

export const history=mongoose.model("history",historySchema);