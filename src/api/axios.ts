import axios from "axios";

const axiosIsntance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default axiosIsntance;
