import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/user/Homepage.jsx";
import AboutPage from "./pages/user/About.jsx";
import Contact from "./pages/user/Contact.jsx";
import LandingPage from "./pages/user/LandingPage.jsx";
import Listing from "./pages/user/Listing.jsx";
import PropertyDetail from "./pages/user/PropertyDetail.jsx";
import Feedback from "./pages/admin/Feedback.jsx";
import AddProperty from "./pages/admin/AddProperty.jsx";
import Login from "./pages/admin/Login.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import PropertyList from "./pages/admin/PropertyList.jsx";
import EditProperty from "./pages/admin/EditProperty.jsx";
import ViewAllBookings from "./pages/admin/ViewAllBookings.jsx";
import ViewUsers from "./pages/admin/Users.jsx";
import AdminRoute from "../routes/adminRoute.jsx";
import ViewProperty from "./pages/admin/ViewProperty.jsx";



export default function App() {
  return (
    
   
      <Routes>

        {/*User Routes */}
        <Route element={<UserLayout/>}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Aboutus" element={<AboutPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/admin/login" element={<Login />} />
       </Route>
        
       
        {/* Admin Login Route */}
        <Route element={<AdminLayout/>}>
      
      
       
        
     
        
       
      <Route element={<AdminRoute />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-property" element={<AddProperty />} />
        <Route path="/admin/edit-property/:id" element={<EditProperty />} />
        <Route path="/admin/all-properties" element={<PropertyList />} />
        <Route path="/admin/Feedback" element={<Feedback />} />
        <Route path="/admin/all-bookings" element={<ViewAllBookings />} />
        <Route path="/admin/users" element={<ViewUsers />} />
        <Route path="/admin/settings" element={<div>Settings Page</div>} />
        <Route path="/admin/view-property/:id" element={<ViewProperty />} />
        </Route>
        
       
        </Route>



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
   
    
  );
}
