

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MapPin, ShieldCheck, Search, Star } from "lucide-react";
import { testimonials } from "../../Dummydata/ClientData.jsx";
import Testimonial from "./Testimonial.jsx";
import {Listitems} from "../../Dummydata/Properties.jsx";
import {getRecentProperties,getPropertyById }from "../../apiServices/PropertyApi.jsx";

export default function CustomerLayout() {
  const navigate = useNavigate();

  const [recentProperties, setRecentProperties] = React.useState([]);

  React.useEffect(() => { 
    const fetchRecentProperties = async () => {
      try {
        const response = await getRecentProperties();
        setRecentProperties(response.properties);
      } catch (error) {
        console.error("Error fetching recent properties:", error);
      }
    };

    fetchRecentProperties();
  }, []);

  return (
    <>
     

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">

        <img
          src="/hero.jpg"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-blue-900/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

          <span className="inline-block px-5 py-2 rounded-full bg-blue-500/20 border border-blue-300/30 backdrop-blur-sm text-blue-100 font-semibold mb-6">
            Premium Real Estate Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find Your
            <span className="block bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              Perfect Home
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-200 leading-8 mb-10">
            Explore thousands of verified properties for sale and rent.
            Find your dream home with confidence and ease.
          </p>

          <button
            onClick={() => navigate("/listings")}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 transition-all duration-300 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl"
          >
            Explore Listings
          </button>

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-slate-100 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-14">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
              How It Works
            </span>

            <h2 className="text-5xl font-bold text-slate-800">
              Find Your Dream Property
            </h2>

            <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">
              Find, rent or list properties in just a few simple steps.
              Our platform is designed for both buyers and property owners.
            </p>

          </div>

          {/* Cards */}

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-8">
                1
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Find a Property
              </h3>

              <p className="text-slate-500 leading-7">
                Search nearby properties using powerful filters,
                interactive maps and detailed property information.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-8">
                2
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Book or Rent
              </h3>

              <p className="text-slate-500 leading-7">
                Choose your preferred property, check availability
                and complete your booking quickly and securely.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-8">
                3
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Add Your Property
              </h3>

              <p className="text-slate-500 leading-7">
                Own a property? List it on our platform and connect
                with genuine buyers and renters effortlessly.
              </p>

            </div>

          </div>

        </div>

      </section>
      
{/* ================= POPULAR PROPERTY LISTINGS ================= */}

<section className="bg-slate-100 py-20 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-14">

      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
        Featured Properties
      </span>

      <h2 className="text-5xl font-bold text-slate-800">
        Popular Property Listings
      </h2>

      <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">
        Explore our most popular verified properties available for sale
        and rent in premium locations.
      </p>

    </div>

    {/* Property Cards */}

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {recentProperties.map((property) => (
       

        <NavLink
          key={property._id}
          to={`/property/${property._id}`}
          className="group"
        >

          <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

            {/* Image */}

            <div className="relative h-60 overflow-hidden">

              <img
                src={`http://localhost:8000/${property.images[0] || "/home-1.png"}`}
                alt={property.title}
                onError={(e) =>
                  (e.currentTarget.src = "/home-1.png")
                }
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>

              <div className="absolute top-5 right-5">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                    property.type === "Rent"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {property.type}
                </span>

              </div>

              <div className="absolute bottom-5 left-5">

                <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full font-semibold shadow-lg">
                  {property.price}
                </span>

              </div>

            </div>

            {/* Content */}

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-800 line-clamp-1">
                {property.title}
              </h3>

              <p className="mt-3 text-slate-500 flex items-center gap-2 line-clamp-2">
                📍 {property.address}
              </p>

              <div className="border-t border-slate-200 my-6"></div>

              <div className="flex items-center justify-between">

                <span className="text-slate-500 font-medium">
                   {property.category} 
                </span>

                <span className="font-semibold text-blue-700 group-hover:translate-x-1 transition-transform">
                  View Details →
                </span>

              </div>

            </div>

          </div>

        </NavLink>

      ))}

    </div>

    {/* Button */}

    <div className="flex justify-center mt-14">

      <button
        onClick={() => navigate("/Listing")}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
      >
        View All Properties
      </button>

    </div>

  </div>

</section>


        {/* TESTIMONIALS */}

    <Testimonial />

     {/* ================= FEATURES ================= */}

<section className="bg-slate-100 py-20 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}

    <div className="text-center mb-14">

      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
        Why Choose Us
      </span>

      <h2 className="text-5xl font-bold text-slate-800">
        Everything You Need
      </h2>

      <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">
        We provide a secure, reliable and modern platform to help you
        discover, compare and book your ideal property with confidence.
      </p>

    </div>

    {/* Feature Cards */}

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center mb-8 shadow-lg">
          <MapPin className="text-white" size={34} />
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Nearby Properties
        </h3>

        <p className="text-slate-500 leading-7">
          Discover verified properties close to your home, office or preferred location with interactive maps.
        </p>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center mb-8 shadow-lg">
          <ShieldCheck className="text-white" size={34} />
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Secure & Trusted
        </h3>

        <p className="text-slate-500 leading-7">
          Browse properties from verified owners and enjoy a secure, transparent and trustworthy experience.
        </p>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-10 text-center hover:-translate-y-2 hover:shadow-blue-100 transition-all duration-300">

        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center mb-8 shadow-lg">
          <Search className="text-white" size={34} />
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Easy Booking
        </h3>

        <p className="text-slate-500 leading-7">
          Reserve your favorite property quickly with a smooth booking process and transparent pricing.
        </p>

      </div>

    </div>

  </div>

</section>

     
    </>
  );
}
