import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Listitems } from "../Dummydata/Properties.jsx";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

function Listing() {
    const navigate = useNavigate();
    

  return (


    <>
    <Navbar />

 <div className=" bg-gray-50">
   {/* Header */}
      <div className="bg-indigo-600 text-white py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          All Properties
        </h1>
        <p className="text-center mt-2 text-gray-200">
          Browse properties available for rent or sale near you
        </p>
      </div>
</div>

 {/* Property Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Listitems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.address}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-gray-700"
                  >
                    <amenity.icon className="w-4 h-4" />
                    {amenity.label} 

                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm mt-2">
                Distance: {item.distance} km
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                  item.type === "Rent"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {item.type}
              </span>

              <button
                onClick={() => navigate(`/property/${item.id}`)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>


    <Footer />
   </>
  );
}
export default Listing;