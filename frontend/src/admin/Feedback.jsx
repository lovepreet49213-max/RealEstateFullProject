import React, { useState } from "react";
import { sendFeedback } from "../apiServices/FeedbackApi";

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
    }
     catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong."
      );
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Send Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="font-semibold">
              Rating
            </label>

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Poor</option>
              <option value="1">⭐ Very Bad</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="font-semibold">
              Message
            </label>

            <textarea
              rows="5"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Write your feedback..."
            />
          </div>

          <button
            disabled={loading}
            className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Feedback;