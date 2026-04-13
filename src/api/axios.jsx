import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://qclaybackendwoofel-1.onrender.com/api/v1",
    headers: { "Content-Type" : "application/json" }
})