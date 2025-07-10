import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true,
});

// Get all stores (for admin/user)
export const getAllStores = async () => {
  const res = await API.get("/stores");
  return res.data;
};

// Get store by ID
export const getStoreById = async (id: string) => {
  const res = await API.get(`/stores/${id}`);
  return res.data;
};

// Add a new store
export const addStore = async (storeData: {
  name: string;
  address: string;
  category?: string;
}) => {
  const res = await API.post("/stores", storeData);
  return res.data;
};

// Update a store
export const updateStore = async (
  id: string,
  storeData: {
    name: string;
    address: string;
    category?: string;
  }
) => {
  const res = await API.put(`/stores/${id}`, storeData);
  return res.data;
};

// Delete a store
export const deleteStore = async (id: string) => {
  const res = await API.delete(`/stores/${id}`);
  return res.data;
};
