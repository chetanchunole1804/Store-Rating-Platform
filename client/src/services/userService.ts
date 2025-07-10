import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
});

// Get all users
export const getAllUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

// Get user by ID
export const getUserById = async (id: string) => {
  const res = await API.get(`/users/${id}`);
  return res.data;
};

// Add a new user (admin only)
export const addUser = async (userData: {
  name: string;
  email: string;
  password: string;
  role: "user" | "store-owner" | "admin";
  address?: string;
}) => {
  const res = await API.post("/users", userData);
  return res.data;
};

// Update an existing user
export const updateUser = async (
  id: string,
  userData: {
    name?: string;
    email?: string;
    password?: string;
    role?: "user" | "store-owner" | "admin";
    address?: string;
  }
) => {
  const res = await API.put(`/users/${id}`, userData);
  return res.data;
};

// Delete a user
export const deleteUser = async (id: string) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};
