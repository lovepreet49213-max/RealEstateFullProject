import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["sale", "rent"],
      required: true,
    },

    bedrooms: {
      type: Number,
      default: 0
    },

    bathrooms: {
      type: Number,
      default: 0
    },

    area: {
      type: Number,
      default: 0
    },  

    city: {
      type: String,
      default: ""
    },

    address: {
      type: String,
      default: ""
    },

    images: [
      {
        type: String,
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { 
    timestamps: true,
  }
);

export default mongoose.model("Property", propertySchema);