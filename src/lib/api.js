/* eslint-disable no-param-reassign */
import axios from "axios";
import jsCookie from "js-cookie";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = jsCookie.get("token") || "";

    return config;
});


export default axiosInstance;
