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
      // Send login request
      const data = await loginUser(email, password);
      // Use backend user role if available, else fallback to selected role
      const user = data.user || data;
      user.role = user.role || role;
      login(user);
      Toast.success("Logged in successfully");
      // Redirect based on role
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
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mt-12 space-y-4"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <select
          className="w-full border px-3 py-2 rounded mb-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roleOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        If you don't have an account then{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          register here
        </a>
        .
      </p>
    </>
  );
};

export default LoginForm;
