import { useState } from "react";
import { signup } from "../../services/authService";
import Toast from "../shared/Toast";

const fields = ["name", "email", "password", "address"] as const;
type Field = typeof fields[number];

const validate = (field: string, value: string) => {
  switch (field) {
    case "name":
      if (!value.trim()) return "Name is required.";
      break;
    case "email":
      if (!value) return "Email is required.";
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
        return "Invalid email address.";
      break;
    case "password":
      if (!value) return "Password is required.";
      if (value.length < 6)
        return "Password must be at least 6 characters.";
      break;
    case "address":
      if (!value.trim()) return "Address is required.";
      break;
    default:
      return "";
  }
  return "";
};

const SignupForm = () => {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<Field, string>>({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.entries(form).forEach(([key, value]) => {
      newErrors[key] = validate(key, value);
    });
    setErrors(newErrors);
    if (Object.values(newErrors).some((err) => err)) return;
    setSubmitting(true);
    try {
      await signup(form);
      Toast.success("Signup successful. Please login.");
      setForm({ name: "", email: "", password: "", address: "" });
      setErrors({ name: "", email: "", password: "", address: "" });
    } catch (err: any) {
      if (err?.response?.data?.message && typeof err.response.data.message === "object") {
        setErrors((prev: any) => ({ ...prev, ...err.response.data.message }));
      } else if (err?.response?.data?.message && typeof err.response.data.message === "string") {
        Toast.error(err.response.data.message);
      } else {
        Toast.error(err?.message || "Signup failed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                className={`w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 outline-none transition border ${
                  errors[field]
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/20 focus:border-green-400"
                }`}
                value={form[field]}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors[field] && (
                <p className="text-red-400 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 active:scale-95 transition text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitting}
          >
            {submitting ? "Signing up..." : "Signup"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-green-400 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
