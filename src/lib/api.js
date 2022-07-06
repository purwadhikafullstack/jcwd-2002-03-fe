/* eslint-disable no-param-reassign */
import axios from "axios";
import jsCookie from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2003",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = jsCookie.get("user_token") || "";

  return config;
});

export default axiosInstance;
