import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  CalendarDays,
  MessageSquare,
  LogOut,
  Building,
  UserCircle,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Properties",
    icon: Building2,
    path: "/admin/all-properties",
  },
  {
    name: "Bookings",
    icon: CalendarDays,
    path: "/admin/all-bookings",
  },
  {
    name: "Users",
    icon: Users,
    path: "/admin/users",
  },
  {
    name: "Feedback",
    icon: MessageSquare,
    path: "/admin/feedback",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen sticky top-0 bg-slate-700 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-7 border-b border-slate-800 bg-gradient-to-r from-slate-700 to-slate-800">

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
          <Building className="text-white" size={24} />
        </div>

        <div className="ml-4">
          <h2 className="text-white font-bold text-xl tracking-wide">
            RoyalEstate
          </h2>

          <p className="text-slate-400 text-xs">
            Admin Dashboard
          </p>
        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 overflow-y-auto">

       

        <div className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-lg"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-2 bottom-2  rounded-r-full bg-blue-600"></span>
                    )}

                    <Icon
                      size={20}
                      className={`transition ${
                        isActive
                          ? "text-blue-600"
                          : "group-hover:text-blue-400"
                      }`}
                    />

                    <span className="font-medium text-[15px]">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">


        <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-700 text-slate-300 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300">

          <LogOut size={18} />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}