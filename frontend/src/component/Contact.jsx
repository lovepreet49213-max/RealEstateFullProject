import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Contact() {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await fetch("https://resumewebsitebackend.vercel.app/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to: "support@garagenearme.com",
//           subject: "Contact Form - GarageGo",
//           text: `
// Name: ${form.name}
// Email: ${form.email}

// Message:
// ${form.message}
//           `,
//         }),
//       });

//       alert("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       alert("Failed to send message");
//     }
//   };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Send us a message
          </h2>

          <form  className="space-y-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3"
              value={form.name}
              // onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3"
              value={form.email}
              // onChange={handleChange}
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3"
              value={form.message}
              // onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
    <Footer />
    </>

  );
  
}
