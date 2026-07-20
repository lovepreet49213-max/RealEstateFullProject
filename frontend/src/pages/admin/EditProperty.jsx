import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import PropertyBasicInfo from "../admin/addPropertyComponents/PropertyBasicInfo";
import PropertyPricing from "../admin/addPropertyComponents/PropertyPricing";
import PropertyDetails from "../admin/addPropertyComponents/PropertyDetails";
import PropertyAmenities from "../admin/addPropertyComponents/PropertyAmenities";
import PropertyLocation from "../admin/addPropertyComponents/PropertyLocation";
import PropertyImages from "../admin/addPropertyComponents/PropertyImages";
import { getPropertyById , updateProperty } from "../../apiServices/propertyApi";

export default function EditProperty() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
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

  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    try {
      setLoading(true);

      const res = await getPropertyById(id);
      console.log(res);

      const property = res.property;

      setFormData({
        title: property.title || "",
        description: property.description || "",
        category: property.category || "House",

        price: property.price || "",
        discount: property.discount || "",
        type: property.type || "Sale",
        negotiable: property.negotiable || false,

        bedrooms: property.bedrooms || "",
        bathrooms: property.bathrooms || "",
        area: property.area || "",
        floor: property.floor || "",

        parking: property.parking || false,
        furnished: property.furnished || false,
        featured: property.featured || false,

        address: property.address || "",
        city: property.city || "",
        state: property.state || "",
        country: property.country || "",
        pincode: property.pincode || "",
        latitude: property.latitude || "",
        longitude: property.longitude || "",

        amenities: property.amenities || {
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

    setImages(
  (property.images || []).map((img) => ({
    preview: `http://localhost:8000/${img.replace(/\\/g, "/")}`,
    file: null,
    existing: true,
  }))
);

setCoverImage(
  property.coverImage
    ? `http://localhost:8000/${property.coverImage.replace(/\\/g, "/")}`
    : ""
);
    } catch (err) {
      console.log(err);
      alert("Unable to load property");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key === "amenities") {
          data.append(
            "amenities",
            JSON.stringify(formData.amenities)
          );
        } else {
          data.append(key, formData[key]);
        }
      });

      images.forEach((img) => {
        if (img.file) {
          data.append("images", img.file);
        }
      });

      await updateProperty(
        id,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Property Updated Successfully");

      navigate("/admin/all-properties");
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Unable to update property"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
 
     

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white">
            Edit Property
          </h1>

          <p className="text-gray-300 mt-3">
            Update property information
          </p>
        </div>

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

          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 text-white text-lg font-bold px-16 py-4 rounded-2xl shadow-xl transition-all duration-300"
            >
              {loading ? "Updating..." : "Update Property"}
            </button>
          </div>
        </form>
      </div>
   
  );
}