import e from "express";
import {
  createBooking,
  getAllBookings,
  getMyBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
} from "../controller/BookingController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

router.post("/createBooking", createBooking);

router.get("/myBookings", protect, getMyBookings);

router.get("/getAllBookings", protect, adminOnly, getAllBookings);

router.get("/getBookingById/:id", protect, adminOnly, getBookingById);

router.put(
  "/updateBookingStatus/:id",
  protect,
  adminOnly,
  updateBookingStatus
);

router.delete(
  "/deleteBooking/:id",
  protect,
  adminOnly,
  deleteBooking
);

export default router;