import Booking from "../models/Booking.js";
import Property from "../models/Property.js";

/* ==========================================================
   Create Booking
========================================================== */

export const createBooking = async (req, res) => {
  try {
    const {
      propertyId,
      fullName,
      email,
      phone,
      visitDate,
      visitTime,
      message,
    } = req.body;

    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    const booking = await Booking.create({
      user: null, // Assuming user authentication is not implemented yet

      fullName,
      email,
      phone,

      property: property._id,
      propertyTitle: property.title,
      propertyAddress: property.address,
      propertyPrice: property.price,
      propertyType: property.type,

      visitDate,
      visitTime,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};


/* ==========================================================
   Get All Bookings (Admin)
========================================================== */

export const getAllBookings = async (req, res) => {

  try {

    const bookings = await Booking.find()
      .populate("property")
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};


/* ==========================================================
   Get Logged-in User Bookings
========================================================== */

export const getMyBookings = async (req, res) => {

  try {

    const bookings = await Booking.find({
      user: req.user._id,
    })
      .populate("property")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};


/* ==========================================================
   Get Booking By ID
========================================================== */

export const getBookingById = async (req, res) => {

  try {

    const booking = await Booking.findById(req.params.id)
      .populate("property")
      .populate("user", "name email");

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });

    }

    res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};


/* ==========================================================
   Update Booking Status
========================================================== */

export const updateBookingStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });

    }

    booking.status = status;

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Booking Status Updated Successfully",
      booking,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};


/* ==========================================================
   Delete Booking
========================================================== */

export const deleteBooking = async (req, res) => {

  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {

      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });

    }

    await booking.deleteOne();

    res.status(200).json({
      success: true,
      message: "Booking Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};