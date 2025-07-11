import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { role } = useAuth();
  const location = useLocation();

  const menu = {
    admin: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "Users", path: "/admin/users" },
      { label: "Stores", path: "/admin/stores" },
    ],
    "store-owner": [
      { label: "Dashboard", path: "/store/dashboard" },
    ],
    user: [
      { label: "Browse Stores", path: "/user/stores" },
    ],
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-2xl border-r border-white">
      <h2 className="text-xl font-bold mb-6 text-purple-300 tracking-wide">
        Menu
      </h2>
      <nav className="space-y-3">
        {(menu[role] || []).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-purple-600 text-white shadow-inner"
                  : "hover:bg-white/10 hover:text-purple-300"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
