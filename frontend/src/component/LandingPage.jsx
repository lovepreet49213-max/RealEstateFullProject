import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import {Listitems} from "../Dummydata/Properties.jsx";


export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      {/* hero banner section */}
      <section className="relative h-screen bg-gray-900">
        <img
          src="/hero.jpg"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Home
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Explore our listings and discover the best properties for sale or rent.
          </p>
          <a
            href="/Listing"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Listings
          </a>
        </div>
      </section>
   
      {/* How It Works */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg mb-6">
            Our platform makes it easy to find and list properties. Browse through our extensive listings, filter by your preferences, and contact sellers directly. Whether you're looking to buy, sell, or rent, we've got you covered.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Browse Listings</h3>
              <p className="text-gray-700">
                Explore a wide range of properties available for sale or rent. Use our filters to find the perfect match for your needs.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Contact Sellers</h3>
              <p className="text-gray-700">
                Reach out to property owners directly through our platform. Ask questions, schedule viewings, and get all the information you need.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Make a Deal</h3>
              <p className="text-gray-700">
                Once you've found the right property, negotiate and finalize the deal with confidence. Our platform ensures a smooth transaction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Listings */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Popular Listings</h2> 

          <p className="text-lg mb-6">
            Check out some of our most popular properties that are currently available. These listings have been highly rated by our users and are in high demand.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {Listitems.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
                <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover" />  
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a href="/Listing" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded item-center  justify-center flex">
            View All Listings
          </a>
        </div>
      </section>
       

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Welcome to RealEstate</h2>
          <p className="text-lg mb-6">
            Discover your perfect garage or parking space with us. Whether you're
            looking to rent or buy, we have a wide range of options to suit your
            needs. Start exploring today and find the ideal space for your vehicle!
          </p>
          <a href="/Listing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Listings
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
