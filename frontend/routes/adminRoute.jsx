import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!user?.admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}