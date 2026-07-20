import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllProperties,
  deleteProperty,
} from "../../apiServices/propertyApi";

import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PropertyList() {

  // ===========================
  // States
  // ===========================

  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [typeFilter, setTypeFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // ===========================
  // Load Properties
  // ===========================

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);

      const res = await getAllProperties();

      setProperties(res.properties || []);

      setError("");

    } catch (err) {

      setError("Unable to load properties.");

      setProperties([]);

    } finally {

      setLoading(false);

    }
  };

  // ===========================
  // Delete Property
  // ===========================

  const handleDeleteProperty = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {

      await deleteProperty(id);

      alert("Property Deleted Successfully");

      fetchProperties();

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Unable to delete property."
      );

    }

  };

  // ===========================
  // Search & Filters
  // ===========================

  const filteredProperties = useMemo(() => {

    return (properties || []).filter((item) => {

      const matchSearch =
        item.title
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        item.city
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ||
        item.status === statusFilter;

      const matchType =
        typeFilter === "All" ||
        item.type === typeFilter;

      return (
        matchSearch &&
        matchStatus &&
        matchType
      );

    });

  }, [
    properties,
    search,
    statusFilter,
    typeFilter,
  ]);

  // ===========================
  // Pagination
  // ===========================

  const totalPages = Math.ceil(
    filteredProperties.length / itemsPerPage
  );

  const paginatedProperties =
    filteredProperties.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  // ===========================
  // Loading
  // ===========================

  if (loading) {

    return (

      <div className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">

        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl px-10 py-8">

          <h1 className="text-3xl font-bold text-white">
            Loading Properties...
          </h1>

        </div>

      </div>

    );

  }

  // ===========================
  // Error
  // ===========================

  if (error) {

    return (

      <div className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">

        <div className="bg-red-500/20 backdrop-blur-xl border border-red-400 rounded-3xl px-10 py-8">

          <h1 className="text-2xl font-bold text-red-200">
            {error}
          </h1>

        </div>

      </div>

    );

  }

  return (

  

      

        <div className="min-h-screen rounded-3xl bg-black/30 backdrop-blur-sm p-8">

      <div className="relative z-10 p-8">

        {/* ================= Header ================= */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-white">
              Property Management
            </h1>

            <p className="text-gray-300 mt-3 text-lg">
              Manage all listed properties
            </p>

          </div>

          <Link
            to="/admin/add-property"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl shadow-xl transition duration-300"
          >

            <Plus size={22} />

            Add Property

          </Link>

        </div>

        {/* ================= Search Card ================= */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 mb-8">

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Search */}

            <div className="relative">

              <Search
                className="absolute left-4 top-4 text-gray-300"
                size={20}
              />

              <input
                type="text"
                placeholder="Search by title or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 outline-none focus:border-blue-500"
              />

            </div>

            {/* Status */}

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="bg-white/10 border border-white/20 rounded-xl p-3 text-white outline-none"
            >
              <option className="text-black">All</option>
              <option className="text-black">Active</option>
              <option className="text-black">Inactive</option>
            </select>

            {/* Type */}

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
              className="bg-white/10 border border-white/20 rounded-xl p-3 text-white outline-none"
            >
              <option className="text-black">All</option>
              <option className="text-black">Sale</option>
              <option className="text-black">Rent</option>
            </select>

          </div>

        </div>

        {/* Total Count */}

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-white">

            Total Properties

            <span className="ml-3 bg-blue-600 px-4 py-2 rounded-full text-lg">

              {filteredProperties.length}

            </span>

          </h2>

        </div>

        {/* ================= Table ================= */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden overflow-x-auto">

          <table className="w-full">

            <thead className="bg-white/10">

              <tr className="text-white">

                <th className="text-left p-5">Image</th>

                <th className="text-left p-5">Property</th>

                <th className="text-left p-5">City</th>

                <th className="text-left p-5">Type</th>

                <th className="text-left p-5">Price</th>

                <th className="text-left p-5">Status</th>

                <th className="text-center p-5">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>
              {paginatedProperties.length === 0 ? (

  <tr>

    <td
      colSpan="7"
      className="py-20 text-center text-gray-300 text-xl"
    >
      No Properties Found
    </td>

  </tr>

) : (

  paginatedProperties.map((property) => (

    <tr
      key={property._id}
      className="border-b border-white/10 hover:bg-white/10 transition duration-300"
    >

      {/* Image */}

      <td className="p-5">

        <img
          src={
            property.images?.length
              ? `http://localhost:8000/${property.images[0].replace(/\\/g, "/")}`
              : "https://via.placeholder.com/500"
          }
          alt={property.title}
          className="w-28 h-20 rounded-2xl object-cover shadow-lg"
        />

      </td>

      {/* Property */}

      <td className="p-5">

        <h3 className="text-white font-bold text-lg">

          {property.title}

        </h3>

        <p className="text-gray-300 mt-1">

          {property.category}

        </p>

      </td>

      {/* City */}

      <td className="p-5 text-gray-200">

        {property.city}

      </td>

      {/* Type */}

      <td className="p-5">

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            property.type === "Sale"
              ? "bg-blue-500/20 text-blue-300"
              : "bg-green-500/20 text-green-300"
          }`}
        >

          {property.type}

        </span>

      </td>

      {/* Price */}

      <td className="p-5">

        <span className="text-white font-bold text-lg">

          ₹{Number(property.price || 0).toLocaleString("en-IN")}

        </span>

      </td>

      {/* Status */}

      <td className="p-5">

        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            property.status === "Inactive"
              ? "bg-red-500/20 text-red-300"
              : "bg-green-500/20 text-green-300"
          }`}
        >

          {property.status || "Active"}

        </span>

      </td>

      {/* Actions */}

      <td className="p-5">

        <div className="flex justify-center gap-3">

          {/* View */}

          <Link
            to={`/admin/view-property/${property._id}`}
            className="bg-blue-500/20 hover:bg-blue-600 transition p-3 rounded-xl"
          >

            <Eye
              size={18}
              className="text-blue-300"
            />

          </Link>

          {/* Edit */}

          <Link
            to={`/admin/edit-property/${property._id}`}
            className="bg-yellow-500/20 hover:bg-yellow-500 transition p-3 rounded-xl"
          >

            <Pencil
              size={18}
              className="text-yellow-300"
            />

          </Link>

          {/* Delete */}

          <button
            onClick={() =>
              handleDeleteProperty(property._id)
            }
            className="bg-red-500/20 hover:bg-red-600 transition p-3 rounded-xl"
          >

            <Trash2
              size={18}
              className="text-red-300"
            />

          </button>

        </div>

      </td>

    </tr>

  ))

)}

</tbody>

</table>

</div>
      {/* ================= Pagination ================= */}

      {totalPages > 1 && (

        <div className="flex justify-center items-center gap-3 mt-10">

          {/* Previous */}

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 transition ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed bg-white/5"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Page Numbers */}

          {Array.from({ length: totalPages }).map((_, index) => (

            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`w-12 h-12 rounded-xl font-semibold transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
              }`}
            >
              {index + 1}
            </button>

          ))}

          {/* Next */}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 transition ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed bg-white/5"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            <ChevronRight size={20} />
          </button>

        </div>

      )}

      </div>

    </div>
    

  );

}