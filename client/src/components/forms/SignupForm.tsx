import { useState } from "react";
import { signup } from "../../services/authService";
import Toast from "../shared/Toast";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(form);
      Toast.success("Signup successful. Please login.");
    } catch (err: any) {
      Toast.error(err?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-12 space-y-4">
      <h2 className="text-2xl font-bold">Signup</h2>
      {["name", "email", "password", "address"].map((field) => (
        <input
          key={field}
          type={field === "password" ? "password" : "text"}
          name={field}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          className="w-full border px-3 py-2 rounded"
          value={(form as any)[field]}
          onChange={handleChange}
          required
        />
      ))}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
