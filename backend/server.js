import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userSchema from "./models/Users.js";
import mongoose from "mongoose";
import { addUser, getAllUsers,updateUser,deleteUser} from "./controller/UserController.js";

dotenv.config();

connectDB();

const app = express();



app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/test", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received data:", { name, email, password });
    
 
  res.status(200).json({ message: "Data received successfully", data: { name, email, password } });
});



app.get("/getAllUsers", getAllUsers);



app.post("/addUser", addUser);


  app.put("/updateUser/:id",updateUser);


app.delete("/deleteUser/:id",deleteUser);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
