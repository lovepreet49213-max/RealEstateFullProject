import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-72 h-screen z-40">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="ml-72">

        {/* Header */}
        <div className="fixed top-0 left-72 right-0 z-30">
          <Header />
        </div>

        {/* Content */}
       <main className="pt-20 min-h-screen bg-slate-600">
  <div className="p-6 max-w-7xl mx-auto">
    <Outlet />
  </div>
</main>

      </div>

    </div>
  );
}