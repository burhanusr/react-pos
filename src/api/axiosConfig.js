import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This ensures that cookies are sent with every request
});

export default axiosInstance;
