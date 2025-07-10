import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { role } = useAuth();

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
    <aside className="w-64 bg-gray-900 text-white h-full p-4 space-y-2">
      {(menu[role] || []).map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
