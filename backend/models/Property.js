import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    // ================= Basic Info =================

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "House",
        "Apartment",
        "Villa",
        "Office",
        "Commercial",
        "Land",
      ],
      required: true,
    },

    // ================= Pricing =================

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    type: {
      type: String,
      enum: ["Sale", "Rent"],
      required: true,
    },

    negotiable: {
      type: Boolean,
      default: false,
    },

    // ================= Property Details =================

    bedrooms: {
      type: Number,
      default: 0,
    },

    bathrooms: {
      type: Number,
      default: 0,
    },

    area: {
      type: Number,
      required: true,
    },

    floor: {
      type: Number,
      default: 0,
    },

    parking: {
      type: Boolean,
      default: false,
    },

    furnished: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    // ================= Location =================

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "India",
    },

    pincode: {
      type: String,
    },

    latitude: {
      type: Number,
    },

    longitude: {
      type: Number,
    },

    // ================= Amenities =================

    amenities: {
      swimmingPool: {
        type: Boolean,
        default: false,
      },

      gym: {
        type: Boolean,
        default: false,
      },

      garden: {
        type: Boolean,
        default: false,
      },

      lift: {
        type: Boolean,
        default: false,
      },

      security: {
        type: Boolean,
        default: false,
      },

      wifi: {
        type: Boolean,
        default: false,
      },

      ac: {
        type: Boolean,
        default: false,
      },

      powerBackup: {
        type: Boolean,
        default: false,
      },

      cctv: {
        type: Boolean,
        default: false,
      },

      furniture: {
        type: Boolean,
        default: false,
      },
      featured: {
        type: Boolean,
        default: false,
      },
      coveredParking: {
        type: Boolean,
        default: false,
      },
    },

    // ================= Images =================

    images: [
      {
        type: String,
      },
    ],

    // Store cover image path

    coverImage: {
      type: String,
      default: "",
    },

    // ================= Status =================

    status: {
      type: String,
      enum: ["Active", "Inactive", "Sold", "Rented"],
      default: "Active",
    },

    // ================= Owner =================

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