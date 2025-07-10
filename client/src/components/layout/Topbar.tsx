import ThemeToggle from "../shared/ThemeToggle";
import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Store Rating Platform</h1>
      <div className="flex items-center gap-4">
        <span>{user?.email}</span>
        <ThemeToggle />
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
