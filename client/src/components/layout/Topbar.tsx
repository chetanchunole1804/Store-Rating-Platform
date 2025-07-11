import ThemeToggle from "../shared/ThemeToggle";
import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 text-white shadow-lg px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
        Store Rating Platform
      </h1>

      <div className="flex items-center gap-4">
        {user?.email && (
          <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white border border-white/20 backdrop-blur-md shadow-inner">
            {user.email}
          </span>
        )}

        <ThemeToggle />

        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-600 hover:to-red-600 transition-all duration-200 px-4 py-1.5 rounded-md text-white font-semibold shadow-md hover:scale-105 active:scale-95"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
