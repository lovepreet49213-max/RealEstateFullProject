import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

 
function Homepage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <section className="mt-25">
      <nav className="mb-6 ">

        <Link  to="/Aboutus" className="text-blue-500 hover:text-blue-700 mx-2">
          About Us
        </Link>
          <Link to="/Contact" className="text-green-500 hover:text-green-700 mx-2">
            Contact
          </Link>
        </nav>
        </section>
      <section className="mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
      <p className="text-lg mb-6">This is the main landing page of our application.</p>
      </section>
      <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Explore More</h2>
      <p className="text-lg mb-6 px-4">Feel free to navigate to the About Us or Contact pages using the links above.</p>
      </section>
      
    </div>
  );
}
export default Homepage;
