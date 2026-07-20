import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { sendFeedback } from "../../apiServices/FeedbackApi";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    subject: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await sendFeedback(formData);

      alert(res.message);

      setFormData({
        name: "",
        email: "",
        rating: "",
        subject: "",
        comment: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <div className="min-h-screen rounded-3xl bg-black/30 backdrop-blur-sm p-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Customer Feedback
            </h1>

            <p className="text-gray-300 mt-2">
              Share your valuable experience with us.
            </p>
          </div>

          <div className="mt-5 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 rounded-xl text-white font-semibold">
            <MessageSquare size={20} />
            Feedback Form
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email Address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Rating
                </label>

                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                >
                  <option value="" className="text-black">
                    Select Rating
                  </option>

                  <option value="5" className="text-black">
                    ⭐⭐⭐⭐⭐ Excellent
                  </option>

                  <option value="4" className="text-black">
                    ⭐⭐⭐⭐ Good
                  </option>

                  <option value="3" className="text-black">
                    ⭐⭐⭐ Average
                  </option>

                  <option value="2" className="text-black">
                    ⭐⭐ Poor
                  </option>

                  <option value="1" className="text-black">
                    ⭐ Very Bad
                  </option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Subject"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-white font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="6"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Write your feedback..."
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition disabled:opacity-50"
              >
                <MessageSquare size={20} />
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </form>
        </div>
      </div>
  
  );
};

export default Feedback;