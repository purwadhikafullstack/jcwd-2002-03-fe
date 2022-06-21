import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:2060",
});


export default axiosInstance;
