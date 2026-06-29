import { NavLink, useNavigate } from "react-router-dom";


import { useState } from "react";






export default function Navbar() {
 
  const navigate = useNavigate();
 
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-300 font-semibold hover:text-indigo-400"
      : "text-white hover:text-indigo-300";



  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-95 shadow-md">
      <div className="header-top py-2 bg-indigo-600 text-white text-center text-sm">
					<div className="template-ad flex items-center justify-center gap-2">
						<img src="/badge-icon.svg" alt="icon"/>
						<h5>No 1, Website to Buy / Sell </h5><img className="w-4 h-4" src="/home-icon.png" alt="icon"/><h5> <span>First Listing Free!!!</span></h5>
            
					</div>
				</div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
       
        <NavLink to="/" className="text-2xl font-bold flex items-center ">
        <img src="/logo.png" className="h-10 w-10 border-2 border-white rounded-full bg-gray-200 m-2" />
           Real<span className="text-indigo-300">Estate</span>
        </NavLink>
      
  


        {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm items-center">
  <NavLink to="/" className={navLinkClass} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink>

  <NavLink to="/Aboutus" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={navLinkClass}>
    About Us
  </NavLink>

  <NavLink to="/Listing" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={navLinkClass}>
   Listing
  </NavLink>

  <NavLink to="/Contact"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={navLinkClass}>
    Contact
  </NavLink>

</nav>


      </div>
    </header>
  );
}
    



    


