import User from "../models/Users.js";
import generateToken from "../utils/GenerateToken.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ======================================
// Register User
// ======================================

export const registerUser = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      password,
    } = req.body;

    // Validation

    if (!name || !email || !password) {

      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });

    }

    // Check Existing User

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });

    }

    // Create User

    const user = await User.create({

      name,
      email,
      phone,
      password,

    });

    // Generate Token

    const token = generateToken(user._id);

    return res.status(201).json({

      success: true,

      message: "Registration Successful",

      token,

      user: {

        _id: user._id,

        name: user.name,

        email: user.email,

        phone: user.phone,

        admin: user.admin,

        profileImage: user.profileImage,

        status: user.status,

        createdAt: user.createdAt,

      },

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ==========================
    // Validate Input
    // ==========================

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password.",
      });
    }

    // ==========================
    // Find User
    // ==========================

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }

    // ==========================
    // Compare Password
    // ==========================

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password.",
      });
    }

    // ==========================
    // Generate JWT Token
    // ==========================

    const token = jwt.sign(
      {
        id: user._id,
        admin: user.admin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE || "7d",
      }
    );

    // ==========================
    // Success Response
    // ==========================

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      },
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};