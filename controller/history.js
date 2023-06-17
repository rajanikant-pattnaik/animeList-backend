import { history } from "../models/history.js";

export const getHistory=async(req,res)=>{
    try {
      const {userid}=req.body;
      const allHistory=await history.find({userid});
      res.status(200).json({
        success:true,
        message:"Data is shown",
        allHistory
      });
    } catch (error) {
      console.log(error)
      res.status(400).json({
        success:false,
        message:"data is unable to shown",
        error
      });
    }
}

export const addHistory = async (req, res) => {
  try {
    // console.log(req.body);
    const {userid,animeId}=req.body;
    const getCard=await history.findOne({userid,animeId});
    if(!getCard){
      const newcard=new history(req.body);
      await newcard.save();
     res.status(201).json({
       success: true,
       newcard
     });
    }
    else{
    getCard.createdAt=Date.now;
    res.status(200).json({
      success: true,
      getCard
    });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
     error
    })
  }
};

export const deleteHistory=async(req,res)=>{
  try {
    const {userid,animeId}=req.body;
    const historyCard=await history.findOne({userid,animeId});
    await historyCard.deleteOne();
    res.status(200).json({
      success: true,
      message: "history is deleted",
    });
  } catch (error) {
     res.status(500).json(error);
  }
}
