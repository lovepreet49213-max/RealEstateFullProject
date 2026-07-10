import express from "express";

import dotenv from "dotenv";
import transporter from "../utility/Nodemailer.js";

dotenv.config();




export async function sendEmail(req, res)   

{  
  const { to, subject, name, message } = req.body;


 
    
    const response = await transporter.sendMail({
      from: 'Real Estate Visited<' + process.env.EMAIL_USER + '>',
      to: to,
      subject: subject,
      
        text: message + "\n\n" + "Name: " + name + "\nEmail: " + to,
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
    res.status(200).json({ message: "Email sent successfully" });

    
  }
    
