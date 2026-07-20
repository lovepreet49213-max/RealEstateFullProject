import { Bell, UserCircle, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-slate-200 shadow flex items-center justify-between px-6 bg-gradient-to-r from-slate-200 to-slate-300">

     <h1 className="text-2xl font-bold text-center py-6  ">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-5">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-lg outline-none"
          />
        </div>

        <button className="relative">
          <Bell size={24} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={36} />

          <div>
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Header;