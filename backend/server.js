import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userSchema from "./models/Users.js";
import mongoose from "mongoose";
import { addUser, getAllUsers,updateUser,deleteUser} from "./controller/UserController.js";
import Feedback from "./models/feedback.js";
import { addFeedback } from "./controller/feedbackController.js";
import { addProperty, getAllProperties, updateProperty, deleteProperty } from "./controller/PropertyController.js";
import cors from "cors";
import { sendEmail } from "./controller/MailController.js";




dotenv.config();

connectDB();

const app = express();
// CORS configuration
// request coming from http://localhost:5173/addFeedback
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/test", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received data:", { name, email, password });
    
 
  res.status(200).json({ message: "Data received successfully", data: { name, email, password } });
});


// User routes

app.get("/getAllUsers", getAllUsers);



app.post("/addUser", addUser);


  app.put("/updateUser/:id",updateUser);


app.delete("/deleteUser/:id",deleteUser);

// Feedback routes

app.post("/addFeedback", addFeedback);

// Property routes

app.post("/addProperty", addProperty);

app.get("/getAllProperties", getAllProperties);

app.put("/updateProperty/:id", updateProperty);

app.delete("/deleteProperty/:id", deleteProperty);

app.post("/send-email", sendEmail);







const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
