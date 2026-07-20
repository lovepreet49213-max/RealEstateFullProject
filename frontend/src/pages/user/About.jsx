import React from "react";


export default function About() {
  return (
    <>
    

      <div className="min-h-screen bg-slate-100 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}

          <div className="text-center mb-14">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
              About Us
            </span>

            <h1 className="text-5xl font-bold text-slate-800">
              Welcome to RealEstate
            </h1>

            <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">
              Making property buying, selling and renting simple, secure
              and accessible for everyone.
            </p>

          </div>

          {/* Main Card */}

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

            <div className="grid lg:grid-cols-5">

              {/* Left Side */}

              <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10">

                <h2 className="text-3xl font-bold mb-4">
                  Our Mission
                </h2>

                <p className="text-blue-100 leading-8 mb-8">
                  We aim to transform the real estate experience by
                  providing a secure, transparent and user-friendly
                  platform for buyers, renters and property owners.
                </p>

                <div className="space-y-6">

                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <h3 className="font-semibold text-xl mb-2">
                      Trusted Platform
                    </h3>

                    <p className="text-blue-100">
                      Verified properties and trusted owners for a safe experience.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <h3 className="font-semibold text-xl mb-2">
                      Smart Search
                    </h3>

                    <p className="text-blue-100">
                      Easily discover nearby properties with intelligent search tools.
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Side */}

              <div className="lg:col-span-3 p-10">

                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Who We Are
                </h2>

                <p className="text-slate-600 leading-8 mb-5">
                  RealEstate is a modern platform that connects property
                  owners with buyers and renters through a fast,
                  secure and transparent experience.
                </p>

                <p className="text-slate-600 leading-8 mb-5">
                  Whether you're searching for your dream home,
                  renting an apartment or listing your property,
                  our platform simplifies every step.
                </p>

                <p className="text-slate-600 leading-8 mb-10">
                  Our mission is to make real estate transactions
                  smarter by combining technology, trust and
                  excellent customer experience.
                </p>

                {/* Features */}

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Verified Property Listings
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Transparent Pricing
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Smart Location Search
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Secure & Trusted Owners
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Easy Booking Process
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    ✔ Fast Customer Support
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      
    </>
  );
}
