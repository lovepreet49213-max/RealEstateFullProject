import {
  Building2,
  Users,
  CalendarDays,
  IndianRupee,
  ArrowUpRight,
  Plus,
  Eye,
} from "lucide-react";

import { Navigate, useNavigate } from "react-router-dom";


const stats = [
  {
    title: "Total Properties",
    value: "156",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Total Users",
    value: "328",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Bookings",
    value: "42",
    icon: CalendarDays,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: IndianRupee,
    color: "from-purple-500 to-pink-500",
  },
];

const recentProperties = [
  {
    id: 1,
    title: "Luxury Villa",
    city: "Delhi",
    price: "₹95 Lakh",
    status: "Active",
  },
  {
    id: 2,
    title: "Modern Apartment",
    city: "Mumbai",
    price: "₹62 Lakh",
    status: "Pending",
  },
  {
    id: 3,
    title: "Farm House",
    city: "Jaipur",
    price: "₹1.4 Cr",
    status: "Active",
  },
];

const recentBookings = [
  {
    id: 1,
    customer: "Rahul Sharma",
    property: "Luxury Villa",
    date: "Today",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Aman Singh",
    property: "Apartment",
    date: "Tomorrow",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Priya Verma",
    property: "Farm House",
    date: "25 July",
    status: "Completed",
  },
];

const activities = [
  "New property added.",
  "Booking approved.",
  "New user registered.",
  "Payment received.",
  "Feedback submitted.",
];

export default function Dashboard() {

    const navigate = useNavigate();
  return (
    
      <div className="min-h-screen rounded-3xl bg-black/30 backdrop-blur-sm p-8">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-gray-300 mt-2">
              Welcome back, Admin 👋
            </p>

          </div>

          <button onClick={() => navigate("/admin/add-property")} className="mt-5 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition">
            <Plus size={20} />
            Add Property
          </button>

        </div>

        {/* Stats */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:scale-105 transition"
              >

                <div className="flex justify-between">

                  <div>

                    <p className="text-gray-300">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-3">
                      {item.value}
                    </h2>

                  </div>

                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <Icon
                      size={30}
                      className="text-white"
                    />
                  </div>

                </div>

                <div className="flex items-center text-green-400 mt-6">

                  <ArrowUpRight size={18} />

                  <span className="ml-2">
                    +12% this month
                  </span>

                </div>

              </div>

            );

          })}

        </div>

        {/* Tables */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Properties */}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl text-white font-bold">
                Recent Properties
              </h2>

              <button className="text-cyan-400 flex items-center gap-1">
                <Eye size={18} />
                View All
              </button>

            </div>

            <table className="w-full">

              <thead>

                <tr className="text-gray-300 border-b border-white/10">

                  <th className="text-left py-3">Title</th>

                  <th>City</th>

                  <th>Price</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {recentProperties.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-white/10 text-white"
                  >

                    <td className="py-4">
                      {item.title}
                    </td>

                    <td className="text-center">
                      {item.city}
                    </td>

                    <td className="text-center">
                      {item.price}
                    </td>

                    <td className="text-center">

                      <span className="bg-green-600 px-3 py-1 rounded-full text-sm">

                        {item.status}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Bookings */}

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <h2 className="text-2xl font-bold text-white mb-5">
              Recent Bookings
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b border-white/10 text-gray-300">

                  <th className="text-left py-3">
                    Customer
                  </th>

                  <th>Property</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {recentBookings.map((item) => (

                  <tr
                    key={item.id}
                    className="text-white border-b border-white/10"
                  >

                    <td className="py-4">
                      {item.customer}
                    </td>

                    <td className="text-center">
                      {item.property}
                    </td>

                    <td className="text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.status === "Approved"
                            ? "bg-green-600"
                            : item.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-blue-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <button className="bg-blue-600 rounded-xl py-4 text-white font-semibold hover:bg-blue-700">
                Add Property
              </button>

              <button className="bg-green-600 rounded-xl py-4 text-white font-semibold hover:bg-green-700">
                View Users
              </button>

              <button className="bg-purple-600 rounded-xl py-4 text-white font-semibold hover:bg-purple-700">
                Bookings
              </button>

              <button className="bg-orange-600 rounded-xl py-4 text-white font-semibold hover:bg-orange-700">
                Payments
              </button>

            </div>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              {activities.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 text-white"
                >

                  <div className="h-3 w-3 rounded-full bg-cyan-400"></div>

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    
  );
}