import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Homepage.jsx";
import AboutPage from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import LandingPage from "./component/LandingPage.jsx";
import Listing from "./component/Listing.jsx";
import PropertyDetail from "./component/PropertyDetail.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home */}
        <Route path="/" element={<LandingPage />} />

        {/* Other Routes */}
        <Route path="/Aboutus" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Listing" element={<Listing />} />
        
        {/* Property Detail Route */}
        <Route path="/property/:id" element={<PropertyDetail />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-2xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
