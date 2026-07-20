import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

// API
import {
  getAllBookings,
  deleteBooking,
  updateBookingStatus,
} from "../../apiServices/bookingApi";

export default function ViewAllBookings() {

  // ======================================
  // States
  // ======================================

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // ======================================
  // Load Bookings
  // ======================================

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {

    try {

      setLoading(true);

      const res = await getAllBookings();

      setBookings(res.bookings || []);

      setError("");

    } catch (err) {

      console.log(err);

      setError("Unable to load bookings.");

      setBookings([]);

    } finally {

      setLoading(false);

    }

  };

  // ======================================
  // Delete Booking
  // ======================================

  const handleDeleteBooking = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {

      await deleteBooking(id);

      alert("Booking Deleted Successfully");

      fetchBookings();

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Unable to delete booking."
      );

    }

  };

  // ======================================
  // Update Status
  // ======================================

  const handleStatusChange = async (id, status) => {

    try {

      await updateBookingStatus(id, { status });

      fetchBookings();

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Unable to update booking."
      );

    }

  };

  // ======================================
  // Search + Filter
  // ======================================

  const filteredBookings = useMemo(() => {

    return bookings.filter((booking) => {

      const matchSearch =

        booking.fullName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        booking.email
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||

        booking.propertyName
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ||
        booking.status === statusFilter;

      return matchSearch && matchStatus;

    });

  }, [bookings, search, statusFilter]);

  // ======================================
  // Pagination
  // ======================================

  const totalPages = Math.ceil(
    filteredBookings.length / itemsPerPage
  );

  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ======================================
  // Loading
  // ======================================

  if (loading) {

    return (

      <div className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-8">

          <h1 className="text-3xl font-bold text-white">

            Loading Bookings...

          </h1>

        </div>

      </div>

    );

  }

  // ======================================
  // Error
  // ======================================

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

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-white">

              Booking Management

            </h1>

            <p className="text-gray-300 mt-3 text-lg">

              View and manage all property bookings

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">

            <div className="flex items-center gap-3">

              <CalendarDays className="text-blue-400" />

              <span className="text-white text-lg font-semibold">

                {filteredBookings.length} Bookings

              </span>

            </div>

          </div>

        </div>

        {/* Search & Filters */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 mb-8">

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="relative">

              <Search
                className="absolute left-4 top-4 text-gray-300"
                size={20}
              />

              <input
                type="text"
                placeholder="Search customer, email or property..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-300 outline-none focus:border-blue-500"
              />

            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-xl p-3 text-white outline-none"
            >
              <option className="text-black">All</option>
              <option className="text-black">Pending</option>
              <option className="text-black">Confirmed</option>
              <option className="text-black">Completed</option>
              <option className="text-black">Cancelled</option>
            </select>

          </div>

        </div>

        {/* Booking Table */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden overflow-x-auto">

          <table className="w-full">

            <thead className="bg-white/10">

              <tr className="text-white">

                <th className="text-left p-5">Customer</th>

                <th className="text-left p-5">Property</th>

                <th className="text-left p-5">Visit Date</th>

                <th className="text-left p-5">Phone</th>

                <th className="text-left p-5">Status</th>

                <th className="text-center p-5">Actions</th>

              </tr>

            </thead>

            <tbody>
                {paginatedBookings.length === 0 ? (

  <tr>

    <td
      colSpan="6"
      className="text-center py-16 text-gray-300 text-xl"
    >
      No Bookings Found
    </td>

  </tr>

) : (

  paginatedBookings.map((booking) => (

    <tr
      key={booking._id}
      className="border-b border-white/10 hover:bg-white/10 transition duration-300"
    >

      {/* Customer */}

      <td className="p-5">

        <h3 className="text-white font-semibold text-lg">

          {booking.fullName}

        </h3>

        <p className="text-gray-300 text-sm mt-1">

          {booking.email}

        </p>

      </td>

      {/* Property */}

      <td className="p-5">

        <h3 className="text-white font-semibold">

          {booking.propertyName}

        </h3>

        <p className="text-gray-300 text-sm">

          {booking.propertyType}

        </p>

      </td>

      {/* Visit Date */}

      <td className="p-5 text-gray-200">

        <div>

          <p>

            {booking.visitDate}

          </p>

          <p className="text-sm text-gray-400 mt-1">

            {booking.visitTime}

          </p>

        </div>

      </td>

      {/* Phone */}

      <td className="p-5 text-gray-200">

        {booking.phone}

      </td>

      {/* Status */}

      <td className="p-5">

        <select
          value={booking.status}
          onChange={(e) =>
            handleStatusChange(
              booking._id,
              e.target.value
            )
          }
          className={`rounded-xl px-4 py-2 font-semibold outline-none border

          ${
            booking.status === "Pending"
              ? "bg-yellow-500/20 border-yellow-400 text-yellow-300"
              : booking.status === "Confirmed"
              ? "bg-blue-500/20 border-blue-400 text-blue-300"
              : booking.status === "Completed"
              ? "bg-green-500/20 border-green-400 text-green-300"
              : "bg-red-500/20 border-red-400 text-red-300"
          }`}
        >

          <option className="text-black">
            Pending
          </option>

          <option className="text-black">
            Confirmed
          </option>

          <option className="text-black">
            Completed
          </option>

          <option className="text-black">
            Cancelled
          </option>

        </select>

      </td>

      {/* Actions */}

      <td className="p-5">

        <div className="flex justify-center gap-3">

          {/* View */}

          <button
            className="bg-blue-500/20 hover:bg-blue-600 transition p-3 rounded-xl"
          >

            <Eye
              size={18}
              className="text-blue-300"
            />

          </button>

          {/* Delete */}

          <button
            onClick={() =>
              handleDeleteBooking(booking._id)
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

   

  );

}