import jwt from "jsonwebtoken";
import User from "../models/Users.js";

// ==============================
// Protect Routes
// ==============================

export const protect = async (req, res, next) => {
  try {

    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided.",
      });
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find User
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    // Store user in request
    req.user = user;

    next();

  } catch (error) {

    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token.",
    });

  }
};

// ==============================
// Admin Middleware
// ==============================

export const adminOnly = (req, res, next) => {

  if (!req.user.admin) {

    return res.status(403).json({
      success: false,
      message: "Access Denied. Admin Only.",
    });

  }

  next();

};