import { useState } from "react";
import axios from "axios";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "Sale",
    category: "House",
    bedrooms: "",
    bathrooms: "",
    area: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    furnished: "No",
    parking: "Yes",
    featured: "No",
    status: "Available",
    latitude: "",
    longitude: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (image) {
        data.append("image", image);
      }

      await axios.post(
        "http://localhost:5000/api/properties",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Property Added Successfully");

      setFormData({
        title: "",
        description: "",
        price: "",
        type: "Sale",
        category: "House",
        bedrooms: "",
        bathrooms: "",
        area: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        furnished: "No",
        parking: "Yes",
        featured: "No",
        status: "Available",
        latitude: "",
        longitude: "",
      });

      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Failed to add property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Add New Property
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Title */}
          <div>
            <label className="font-semibold">Property Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
              required
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="font-semibold">Property Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>Sale</option>
              <option>Rent</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="font-semibold">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Bathrooms */}
          <div>
            <label className="font-semibold">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Area */}
          <div>
            <label className="font-semibold">Area (sq.ft.)</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Status */}
          <div>
            <label className="font-semibold">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>Available</option>
              <option>Sold</option>
              <option>Booked</option>
            </select>
          </div>

          {/* Furnished */}
          <div>
            <label className="font-semibold">Furnished</label>
            <select
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Parking */}
          <div>
            <label className="font-semibold">Parking</label>
            <select
              name="parking"
              value={formData.parking}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Featured */}
          <div>
            <label className="font-semibold">Featured Property</label>
            <select
              name="featured"
              value={formData.featured}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* State */}
          <div>
            <label className="font-semibold">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Country */}
          <div>
            <label className="font-semibold">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="font-semibold">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Latitude */}
          <div>
            <label className="font-semibold">Latitude</label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Longitude */}
          <div>
            <label className="font-semibold">Longitude</label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="font-semibold">Description</label>
            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="font-semibold">Property Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full border rounded-lg p-3 mt-1"
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg"
            >
              {loading ? "Adding..." : "Add Property"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}