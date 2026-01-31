// src/api/userApi.js
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/api/users`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
