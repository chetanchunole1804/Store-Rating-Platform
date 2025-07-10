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
    // Validate all fields before submit
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
      // Try to extract server-side validation errors
      if (err?.response?.data?.message && typeof err.response.data.message === 'object') {
        // If server sends validation errors as an object
        setErrors((prev: any) => ({ ...prev, ...err.response.data.message }));
      } else if (err?.response?.data?.message && typeof err.response.data.message === 'string') {
        // If server sends a single error message
        Toast.error(err.response.data.message);
      } else {
        Toast.error(err?.message || "Signup failed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto mt-12 space-y-4"
      >
        <h2 className="text-2xl font-bold">Signup</h2>
        {fields.map((field) => (
          <div key={field} className="mb-2">
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              className={`w-full border px-3 py-2 rounded ${
                errors[field] ? "border-red-500" : ""
              }`}
              value={form[field]}
              onChange={handleChange}
              required
              disabled={submitting}
            />
            {errors[field] && (
              <div className="text-red-500 text-xs mt-1">
                {errors[field]}
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={submitting}
        >
          {submitting ? "Signing up..." : "Signup"}
        </button>
      </form>
      <p className="mt-4 text-center">
        If you already have an account then{" "}
        <a href="/login" className="text-green-600 hover:underline">
          login here
        </a>
        .
      </p>
    </>
  );
};

export default SignupForm;
