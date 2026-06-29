import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Phone ,Mail, Key,  LocateFixed, HandCoins, PlugZap,Home, Warehouse, Info} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const navigate = useNavigate();
  return (
       <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
               <img src="/logo.png" className="h-20 w-20" />
               
              Real<span className="text-indigo-500">Estate
                
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              RealEstate helps you find secure, affordable properties near you —
              for rent or purchase. Easy booking, trusted owners.
            </p>

          
          </div>

          {/* Navigation */}
         <div>
  <h3 className="text-lg font-semibold text-white mb-4">
    Navigation
  </h3>

  <ul className="space-y-2 text-sm">
    <li>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 hover:text-white"
      >
        <Home className="w-4 h-4 text-indigo-400" />
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/Listing"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 hover:text-white"
      >
        <Warehouse className="w-4 h-4 text-indigo-400" />
        Property List
      </Link>
    </li>

    <li>
      <Link
        to="/Aboutus"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 hover:text-white"
      >
        <Info className="w-4 h-4 text-indigo-400" />
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/Contact"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 hover:text-white"
      >
        <Phone className="w-4 h-4 text-indigo-400" />
        Contact Us
      </Link>
    </li>
  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li> <Key className="w-4 h-4 inline-block mr-1 text-indigo-400" />Rent Property</li>
              <li> <HandCoins className="w-4 h-4 inline-block mr-1 text-indigo-400" />Buy Property</li>
              <li> <LocateFixed className="w-4 h-4 inline-block mr-1 text-indigo-400" />Nearby Properties</li>
              <li> <PlugZap className="w-4 h-4 inline-block mr-1 text-indigo-400" />EV Friendly Properties</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            
          <div className="space-y-2 text-sm">
  {/* Phone */}
  <p className="flex items-center gap-2">
    <Phone className="w-4 h-4 text-indigo-400" />
    <a
      href="tel:+919876543210"
      className="hover:text-white transition"
    >
      +91 98765 43210
    </a>
  </p>

  {/* Email */}
  <p className="flex items-center gap-2">
    <Mail className="w-4 h-4 text-indigo-400" />
    <a
      href="mailto:support@realestate.com"
      className="hover:text-white transition"
    >
      support@realestate.com
    </a>
  </p>

  {/* Location */}
  <p className="flex items-center gap-2">
    <MapPin className="w-4 h-4 text-indigo-400" />
    <a
      href="https://www.google.com/maps/search/?api=1&query=Bangalore, India"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      Bangalore, India
    </a>
  </p>
</div>

           
              {/* Social Icons */}
            <div className="flex gap-4 mt-6">
           <div className="flex gap-4 mt-6">
 
<a
  href="https://www.facebook.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="RealEstate Facebook"
>
  <FaFacebook className="w-5 h-5" />
</a>
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RealEstate Instagram"
    className="hover:text-white transition"
  >
    <FaInstagram className="w-5 h-5" />
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RealEstate Twitter"
    className="hover:text-white transition"
  >
    <FaTwitter className="w-5 h-5" />
  </a>

  <a
    href="https://www.linkedin.com/company/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="RealEstate LinkedIn"
    className="hover:text-white transition"
  >
    <FaLinkedin className="w-5 h-5" />
  </a>
</div>

            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} RealEstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
