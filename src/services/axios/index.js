import axios from "axios";
import store from "../../store";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080/api",
  timeout: 5000
});
const token = localStorage.getItem("token");

if (token) {
  axiosInstance.interceptors.request.use(config => {
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });
}

// TODO Back-end service down control
axiosInstance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status == 401) store.dispatch("auth/logout");
    return Promise.reject(error);
  }
);

export default axiosInstance;
