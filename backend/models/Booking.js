import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    // User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // Property
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },

    propertyTitle: {
      type: String,
      required: true,
      trim: true,
    },

    propertyAddress: {
      type: String,
      required: true,
      trim: true,
    },

    propertyPrice: {
      type: Number,
      required: true,
    },

    propertyType: {
      type: String,
      enum: ["Sale", "Rent"],
      required: true,
    },

    // Visit Schedule
    visitDate: {
      type: Date,
      required: true,
    },

    visitTime: {
      type: String,
      required: true,
    },

    // User Message
    message: {
      type: String,
      trim: true,
      default: "",
    },

    // Booking Status
    status: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Booking", bookingSchema);