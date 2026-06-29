import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About RealEstate</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Making property buying and selling simple, smart, and accessible — wherever you are.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              RealEstate is a platform that connects property owners with people
              looking for homes — for rent or purchase.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you’re searching for a nearby property or want to monetize
              your unused space, RealEstate makes the process easy and reliable.
            </p>
            <p className="text-gray-700">
              Our mission is to simplify real estate transactions using technology,
              transparency, and trust.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose RealEstate?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Verified property  listings</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Smart location-based search</li>
              <li>✔ Secure & trusted owners</li>
              <li>✔ Easy booking & communication</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
}
