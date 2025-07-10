import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  withCredentials: true,
});

// Submit a rating for a store
export const submitRating = async (storeId: string, rating: number, comment?: string) => {
  const res = await API.post(`/ratings/${storeId}`, { rating, comment });
  return res.data;
};

// Get ratings for a specific store
export const getStoreRatings = async (storeId: string) => {
  const res = await API.get(`/ratings/store/${storeId}`);
  return res.data;
};

// Get average rating stats (admin/store owner)
export const getRatingStats = async () => {
  const res = await API.get("/ratings/stats");
  return res.data;
};

// Get rating given by a user to a specific store
export const getUserRating = async (storeId: string) => {
  const res = await API.get(`/ratings/user/${storeId}`);
  return res.data;
};
