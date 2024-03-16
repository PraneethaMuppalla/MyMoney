import axios from "axios";

const token = localStorage.getItem("token");
let axiosInstance;

if (!token) {
  axiosInstance = axios.create({
    // baseURL: "http://192.168.198.242:8080",
    baseURL: "http://localhost:8080",
  });
} else {
  axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: { Authorization: token },
  });
}

export default axiosInstance;
