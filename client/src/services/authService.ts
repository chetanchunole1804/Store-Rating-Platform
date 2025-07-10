import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  withCredentials: true, // for cookies/session if used
});

// Login user
export const login = async (email: string, password: string) => {
  const res = await API.post("/auth/login", { email, password });
  return res.data; // contains token/user info
};

// Signup user
export const signup = async (userData: {
  name: string;
  email: string;
  password: string;
  address: string;
}) => {
  const res = await API.post("/auth/signup", userData);
  return res.data;
};

// Logout user
export const logout = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};
