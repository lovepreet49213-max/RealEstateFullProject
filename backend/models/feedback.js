import mongoose from "mongoose";


const feedbackSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
     
    },
    comment: {
      type: String,
     
    },
    rating: {
      type: String,
      
      
    },
    subject: {
      type: String,
      
    },
    email: {
      type: String,
     
    },

  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Feedback", feedbackSchema);
