import React, { useState } from "react";
import { Link } from "react-router-dom";


import { Listitems } from "../../Dummydata/Properties";
import { useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

function Listing() {
    const navigate = useNavigate();
    

  return (


 <>
  

  <div className="min-h-screen bg-slate-100 py-16 px-6">

    <div className="max-w-6xl mx-auto">

      {/* Heading */}

      <div className="text-center mb-14">

        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
          Property Listings
        </span>

        <h1 className="text-5xl font-bold text-slate-800">
          Find Your Perfect Property
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          Browse our verified properties available for rent or sale.
        </p>

      </div>

      {/* Property Grid */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {Listitems.map((item) => (

          <div
            key={item.id}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Image */}

            <div className="relative h-56 overflow-hidden">

              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <button
                  onClick={() => navigate(`/property/${item.id}`)}
                  className="bg-white text-indigo-700 font-semibold px-5 py-2 rounded-full shadow-lg"
                >
                  View Details
                </button>

              </div>

            </div>

            {/* Content */}

            <div className="p-6 space-y-5">

              <div>

                <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
                  {item.name}
                </h2>

                <p className="mt-2 text-slate-500 text-sm line-clamp-2">
                  📍 {item.address}
                </p>

              </div>

              {/* Price & Type */}

              <div className="flex items-center justify-between">

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    item.type === "Rent"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.type}
                </span>

                <span className="text-slate-500 text-sm">
                  📍 {item.distance} km
                </span>

              </div>

              {/* Amenities */}

              <div className="flex flex-wrap gap-2">

                {item.amenities.slice(0, 2).map((amenity, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl text-sm text-slate-700"
                  >
                    <amenity.icon className="w-4 h-4 text-indigo-600" />
                    {amenity.label}
                  </div>

                ))}

              </div>

              {/* Button */}

              <button
                onClick={() => navigate(`/property/${item.id}`)}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3 text-white font-semibold hover:scale-105 transition shadow-lg"
              >
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</>
  );
}
export default Listing;