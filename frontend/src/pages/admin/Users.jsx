import React, { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserPlus,
  Filter,
} from "lucide-react";

export default function ViewUsers() {

  // ==========================
  // Dummy Users
  // ==========================

  const [users] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      role: "Customer",
      city: "Delhi",
      status: "Active",
      joined: "10 Jul 2026",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Aman Singh",
      email: "aman@gmail.com",
      phone: "9876543211",
      role: "Agent",
      city: "Mumbai",
      status: "Active",
      joined: "08 Jul 2026",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9876543212",
      role: "Customer",
      city: "Chandigarh",
      status: "Inactive",
      joined: "05 Jul 2026",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876543213",
      role: "Customer",
      city: "Jaipur",
      status: "Active",
      joined: "01 Jul 2026",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Karan Mehta",
      email: "karan@gmail.com",
      phone: "9876543214",
      role: "Agent",
      city: "Noida",
      status: "Blocked",
      joined: "28 Jun 2026",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      name: "Simran Kaur",
      email: "simran@gmail.com",
      phone: "9876543215",
      role: "Customer",
      city: "Ludhiana",
      status: "Active",
      joined: "20 Jun 2026",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 7,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      phone: "9876543216",
      role: "Customer",
      city: "Delhi",
      status: "Inactive",
      joined: "15 Jun 2026",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 8,
      name: "Anjali Sharma",
      email: "anjali@gmail.com",
      phone: "9876543217",
      role: "Agent",
      city: "Mohali",
      status: "Active",
      joined: "12 Jun 2026",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  ]);

  // ==========================
  // Search & Filter
  // ==========================

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // ==========================
  // Pagination
  // ==========================

  const usersPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // ==========================
  // Filter Users
  // ==========================

  const filteredUsers = useMemo(() => {

    return users.filter((user) => {

      const matchSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.city.toLowerCase().includes(search.toLowerCase());

      const matchRole =
        roleFilter === "All" || user.role === roleFilter;

      const matchStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchSearch && matchRole && matchStatus;

    });

  }, [users, search, roleFilter, statusFilter]);

  // ==========================
  // Pagination Data
  // ==========================

  const indexOfLastUser = currentPage * usersPerPage;

  const indexOfFirstUser =
    indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(
    filteredUsers.length / usersPerPage
  );

  // ==========================
  // Action Buttons
  // ==========================

  const handleView = (user) => {
    console.log("View", user);
  };

  const handleEdit = (user) => {
    console.log("Edit", user);
  };

  const handleDelete = (id) => {

    if (window.confirm("Delete this user?")) {
      console.log("Delete", id);
    }

  };
    return (

    

      <div className="min-h-screen rounded-3xl bg-black/30 backdrop-blur-sm p-8">
    <div>

      {/* ================= Header ================= */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Users Management
          </h1>

          <p className="text-gray-300 mt-2">
            Manage all registered users
          </p>

        </div>

        <button
          className="mt-5 lg:mt-0 flex items-center gap-2 px-6 py-3 rounded-xl
          bg-gradient-to-r from-blue-600 to-indigo-700
          text-white font-semibold hover:scale-105 transition"
        >
          <UserPlus size={20} />
          Add User
        </button>

      </div>

      {/* ================= Statistics ================= */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-300">
                Total Users
              </p>

              <h2 className="text-4xl font-bold text-white mt-2">
                {users.length}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

              <Users className="text-white" size={30} />

            </div>

          </div>

        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

          <p className="text-gray-300">
            Active Users
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">

            {users.filter(x => x.status === "Active").length}

          </h2>

        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

          <p className="text-gray-300">
            Agents
          </p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">

            {users.filter(x => x.role === "Agent").length}

          </h2>

        </div>

      </div>

      {/* ================= Search & Filter ================= */}

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 mb-8">

        <div className="grid lg:grid-cols-3 gap-5">

          <div className="relative">

            <Search
              className="absolute left-4 top-3 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10
              border border-white/20 text-white placeholder-gray-400 outline-none"
            />

          </div>

          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl bg-white/10 border border-white/20
            text-white px-4 py-3"
          >

            <option className="text-black">All</option>
            <option className="text-black">Customer</option>
            <option className="text-black">Agent</option>

          </select>

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-xl bg-white/10 border border-white/20
            text-white px-4 py-3"
          >

            <option className="text-black">All</option>
            <option className="text-black">Active</option>
            <option className="text-black">Inactive</option>
            <option className="text-black">Blocked</option>

          </select>

        </div>

      </div>

      {/* ================= Table ================= */}

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-white/10">

              <tr className="text-gray-300">

                <th className="text-left px-6 py-4">User</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>City</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {currentUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={user.avatar}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <span className="text-white font-semibold">

                        {user.name}

                      </span>

                    </div>

                  </td>

                  <td className="text-center text-gray-200">

                    {user.email}

                  </td>

                  <td className="text-center text-gray-200">

                    {user.phone}

                  </td>

                  <td className="text-center">

                    <span className="px-3 py-1 rounded-full bg-cyan-600 text-white text-sm">

                      {user.role}

                    </span>

                  </td>

                  <td className="text-center text-gray-200">

                    {user.city}

                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white
                      ${
                        user.status === "Active"
                          ? "bg-green-600"
                          : user.status === "Inactive"
                          ? "bg-yellow-500"
                          : "bg-red-600"
                      }`}
                    >

                      {user.status}

                    </span>

                  </td>

                  <td className="text-center text-gray-200">

                    {user.joined}

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => handleView(user)}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => handleEdit(user)}
                        className="text-yellow-400 hover:text-yellow-300"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
            {/* ================= Empty State ================= */}

      {filteredUsers.length === 0 && (
        <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">

          <Users
            size={60}
            className="mx-auto text-gray-400 mb-5"
          />

          <h2 className="text-2xl font-bold text-white">
            No Users Found
          </h2>

          <p className="text-gray-300 mt-2">
            Try changing your search or filters.
          </p>

        </div>
      )}

      {/* ================= Pagination ================= */}

      {filteredUsers.length > 0 && (
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

          <p className="text-gray-300">

            Showing{" "}
            <span className="text-white font-semibold">
              {indexOfFirstUser + 1}
            </span>

            {" "}to{" "}

            <span className="text-white font-semibold">
              {Math.min(indexOfLastUser, filteredUsers.length)}
            </span>

            {" "}of{" "}

            <span className="text-white font-semibold">
              {filteredUsers.length}
            </span>

            {" "}users

          </p>

          <div className="flex gap-2">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-xl transition
                ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-blue-600"
                }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (

              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-xl font-semibold transition
                  ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                {index + 1}
              </button>

            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-xl transition
                ${
                  currentPage === totalPages
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-blue-600"
                }`}
            >
              Next
            </button>

          </div>

        </div>
      )}
    </div>
    </div>
  
  );
}