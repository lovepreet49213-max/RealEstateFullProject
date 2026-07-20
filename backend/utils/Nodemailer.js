import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


  
 const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS, // use App Password if Gmail
      },
    });
export default transporter;

