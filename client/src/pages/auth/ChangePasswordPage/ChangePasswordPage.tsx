import { useState } from "react";
import Toast from "../../../components/shared/Toast";

const ChangePasswordPage = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Replace with actual API call
      if (form.oldPassword === form.newPassword) {
        throw new Error("New password cannot be the same as old password");
      }

      Toast.success("Password updated successfully");
      setForm({ oldPassword: "", newPassword: "" });
    } catch (err: any) {
      Toast.error(err.message || "Failed to update password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="oldPassword"
          type="password"
          placeholder="Old Password"
          value={form.oldPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          name="newPassword"
          type="password"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
