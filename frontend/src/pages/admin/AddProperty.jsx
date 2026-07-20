import { useState } from "react";

import PropertyBasicInfo from "../admin/addPropertyComponents/PropertyBasicInfo"
import PropertyPricing from "../admin/addPropertyComponents/PropertyPricing";
import PropertyDetails from "../admin/addPropertyComponents/PropertyDetails";
import PropertyAmenities from "../admin/addPropertyComponents/PropertyAmenities";
import PropertyLocation from "../admin/addPropertyComponents/PropertyLocation";
import PropertyImages from "../admin/addPropertyComponents/PropertyImages";
import axios from "axios";

import { useEffect } from "react";
import {addProperty} from "../../apiServices/propertyApi";
import { useNavigate } from "react-router-dom";


export default function AddProperty() {
  // ================= Form State =================

const navigate = useNavigate();


const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    title: "",
    description: "",
    category: "House",

    // Pricing
    price: "",
    discount: "",
    type: "Sale",
    negotiable: false,

    // Details
    bedrooms: "",
    bathrooms: "",
    area: "",
    floor: "",

    parking: false,
    furnished: false,
    featured: false,

    // Location
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    latitude: "",
    longitude: "",

    // Amenities
    amenities: {
      swimmingPool: false,
      gym: false,
      garden: false,
      lift: false,
      security: false,
      wifi: false,
      ac: false,
      powerBackup: false,
      cctv: false,
    },
  });

  // ================= Images =================

  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState("");

  // ================= Handle Change =================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= Submit =================

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "amenities") {
        data.append("amenities", JSON.stringify(formData.amenities));
      } else {
        data.append(key, formData[key]);
      }
    });

    images.forEach((img) => {
      if (img.file) {
        data.append("images", img.file);
      }
    });

    const res = await addProperty(data);
    console.log(res);

    alert(res.message || "Property Added Successfully");
    navigate("/admin/all-properties");

    

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "House",

      price: "",
      discount: "",
      type: "Sale",
      negotiable: false,

      bedrooms: "",
      bathrooms: "",
      area: "",
      floor: "",

      parking: false,
      furnished: false,
      featured: false,

      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      latitude: "",
      longitude: "",

      amenities: {
        swimmingPool: false,
        gym: false,
        garden: false,
        lift: false,
        security: false,
        wifi: false,
        ac: false,
        powerBackup: false,
        cctv: false,
      },
    });

    setImages([]);
    setCoverImage("");

  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message ||
      "Unable to add property."
    );
  } finally {
    setLoading(false);
  }
};

  return (
  
    
     

    

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            Add New Property
          </h1>

          <p className="text-gray-300 mt-3">
            Fill all details to create a new property listing.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <PropertyBasicInfo
              formData={formData}
              handleChange={handleChange}
            />

            <PropertyImages
              images={images}
              setImages={setImages}
              coverImage={coverImage}
              setCoverImage={setCoverImage}
            />

            <PropertyPricing
              formData={formData}
              handleChange={handleChange}
            />

            <PropertyAmenities
              formData={formData}
              setFormData={setFormData}
            />

            <PropertyDetails
              formData={formData}
              handleChange={handleChange}
            />

            <PropertyLocation
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
            />
          </div>

          {/* Submit */}

          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg font-bold px-16 py-4 rounded-2xl shadow-xl transition-all duration-300"
            >
              {loading ? "Adding..." : "Add Property"}

            </button>
          </div>
        </form>
      </div>
    
  );
}