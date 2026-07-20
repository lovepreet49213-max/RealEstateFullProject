import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
    isActive
      ? "bg-blue-50 text-blue-700"
      : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
  }`;

export default function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">

      {/* Top Bar */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">

            <img
              src="/badge-icon.svg"
              alt="icon"
              className="w-5 h-5"
            />

            <span>No.1 Website to Buy / Sell Properties</span>

            <img
              src="/car-1.png"
              alt="icon"
              className="w-5 h-5"
            />

            <span className="font-semibold">
              First Listing Free!!!
            </span>

          </div>

        </div>

      </div>

      {/* Navbar */}

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.png"
            className="h-11 w-11"
            alt="Logo"
          />

          <h2 className="text-3xl font-bold text-slate-800">

            Real

            <span className="text-blue-700">
              Estate
            </span>

          </h2>

        </NavLink>


       {/* ================= Desktop Navigation ================= */}

<nav className="hidden md:flex items-center gap-3">

  <NavLink
    to="/"
    className={navLinkClass}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    Home
  </NavLink>

  <NavLink
    to="/Aboutus"
    className={navLinkClass}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    About Us
  </NavLink>

  <NavLink
    to="/Listing"
    className={navLinkClass}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    Listing
  </NavLink>

  <NavLink
    to="/Contact"
    className={navLinkClass}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    Contact
  </NavLink>

  <div className="ml-4">

    {true ? (
      <button
        onClick={() => navigate("/admin/login")}
        className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Login
      </button>
    ) : (
      <button
        onClick={handleLogout}
        className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Logout
      </button>
    )}

  </div>

</nav>
            {/* ================= Mobile Menu Button ================= */}

      <button
        className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      </div>

      {/* ================= Mobile Menu ================= */}

      {open && (
        <>
          {/* Overlay */}

          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}

          <div className="md:hidden fixed inset-x-0 top-[90px] z-40">

            <div className="mx-4 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 animate-slideDown">

              {/* Navigation */}

              <div className="space-y-3">

                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/Aboutus"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/Listing"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Listing
                </NavLink>

                <NavLink
                  to="/Contact"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>

              </div>

              <div className="border-t border-slate-200 my-6"></div>

              {/* Auth */}

              {!admin ? (

                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/admin/login");
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Login
                </button>

              ) : (

                <button
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Logout
                </button>

              )}

            </div>

          </div>
        </>
      )}

    </header>
  );
}