import User from "../models/Users.js";
import mongoose from "mongoose";   



export async function addUser(req,res){
    const {name,email,password} = req.body;


    await User.create({name,email,password})
    .then((user)=>{
        res.status(201).json({message:"User added successfully",user});
    })
    .catch((error)=>{
        res.status(500).json({message:"Error adding user",error});
    });


}

export async function getAllUsers(req,res){
    await User.find().then((users)=>{

        res.status(200).json({message:"Users fetched successfully",users});
    })
    .catch((error)=>{
        res.status(500).json({message:"Error fetching users",error});
    });


}

export async function updateUser(req,res){
   
    const { id } = req.params;
    const { name, email, password } = req.body;

    await User.findByIdAndUpdate(id, { name, email, password })
        .then((user) => {
            res.status(200).json({ message: "User updated successfully", user });
        })
        .catch((error) => {
            res.status(500).json({ message: "Error updating user", error });
        });
}



export async function deleteUser(req,res){
    const { id } = req.params;

    await User.findByIdAndDelete(id)
        .then((user) => {
            res.status(200).json({ message: "User deleted successfully", user });
        })
        .catch((error) => {
            res.status(500).json({ message: "Error deleting user", error });
        });

}