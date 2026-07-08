import Feedback from "../models/feedback.js";
import mongoose from "mongoose";   



export async function addFeedback(req,res){
    const {name,comment,rating,subject,email} = req.body;


    await Feedback .create({name,comment,rating,subject,email})
    .then((feedback)=>{
        res.status(201).json({message:"Feedback added successfully",feedback});
    })
    .catch((error)=>{
        res.status(500).json({message:"Error adding feedback",error});
    });


}
