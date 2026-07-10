import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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

      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");

      if (res.data.user.admin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };
return (
  <div
    className="min-h-screen bg-cover bg-center relative"
    style={{
      backgroundImage: `url(${"/hero.jpg"})`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative z-10 min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16">

        <h1 className="text-6xl font-bold text-white leading-tight">
          Find Your
          <br />
          Dream Home
        </h1>

        <p className="text-gray-300 mt-8 text-xl leading-9">
          Buy, Sell & Rent premium properties with trusted
          real estate agents.
        </p>

        <div className="flex gap-12 mt-14">

          <div>
            <h2 className="text-4xl font-bold text-white">
              10K+
            </h2>

            <p className="text-gray-300">
              Properties
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              5K+
            </h2>

            <p className="text-gray-300">
              Customers
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white">
              350+
            </h2>

            <p className="text-gray-300">
              Agents
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">

        <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-md p-10">

          <h2 className="text-4xl font-bold text-center text-white">
            Welcome Back
          </h2>

          <p className="text-center text-gray-300 mt-2 mb-8">
            Login to continue
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}

            <div>

              <label className="text-white">
                Email
              </label>

              <div className="relative mt-2">

                <Mail
                  className="absolute left-3 top-3.5 text-gray-300"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-300"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-white">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  className="absolute left-3 top-3.5 text-gray-300"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter Password"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-12 text-white placeholder-gray-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-3.5 text-white"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="flex gap-2 text-white">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-300"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="text-center text-gray-300 mt-8">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-300 ml-2 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  </div>
);
}