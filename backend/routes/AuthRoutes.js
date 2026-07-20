import express from "express";

import { registerUser,loginUser ,logoutUser} from "../controller/AuthController.js";

const router = express.Router();

// Register

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router; 