import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import { sendMail } from "../../apiServices/ContactApi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendMail(form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold text-slate-800">
            We'd Love to Hear From You
          </h1>

          <p className="mt-4 text-slate-500 text-lg">
            Questions, suggestions or business inquiries? Send us a message.
          </p>
        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

          <div className="grid lg:grid-cols-5">

            {/* Left Side */}

            <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10">

              <h2 className="text-3xl font-bold mb-3">
                Get in Touch
              </h2>

              <p className="text-blue-100 mb-10 leading-7">
                Our team is always ready to answer your questions
                regarding buying, selling or renting properties.
              </p>

              <div className="space-y-8">

                <div className="flex items-start gap-4">

                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-blue-100">
                      +91 98765 43210
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-blue-100">
                      support@realestate.com
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-blue-100">
                      Mohali, Punjab, India
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-blue-100">
                      Mon - Sat : 9:00 AM - 6:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="lg:col-span-3 p-10">

              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Send Message
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block mb-2 font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-semibold text-slate-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />

                  </div>

                </div>

                <div className="mt-6">

                  <label className="block mb-2 font-semibold text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={7}
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />

                </div>

                <button
                  disabled={loading}
                  className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-lg"
                >
                  <Send size={18} />

                  {loading ? "Sending..." : "Send Message"}

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}