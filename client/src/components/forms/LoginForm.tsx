import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import Toast from "../shared/Toast";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Store Owner", value: "store-owner" },
  { label: "User", value: "user" },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      const user = data.user || data;
      user.role = user.role || role;
      login(user);
      Toast.success("Logged in successfully");
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "store-owner") {
        navigate("/store/dashboard");
      } else if (user.role === "user") {
        navigate("/user/stores");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      Toast.error(err?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white font-semibold disabled:opacity-60"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
