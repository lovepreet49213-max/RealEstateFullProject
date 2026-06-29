import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userSchema from "./models/Users.js";
import mongoose from "mongoose";

dotenv.config();

connectDB();

const app = express();



app.use(express.json());



app.get("/", (req, res) => {
  res.send("Property Hub API Running");
  console.log("Property Hub API Running");
});

app.post("/test", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received data:", { name, email, password });
    
 
  res.status(200).json({ message: "Data received successfully", data: { name, email, password } });
});


app.post("/add-user", (req, res) => {
  
  const { name, email, password } = req.body;
  userSchema.create({ name, email, password })
    .then((user) => {
      res.status(201).json({ message: "User added successfully", user });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error adding user", error });
    });

  // Here you would typically save the user to your database
    });


  





const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
