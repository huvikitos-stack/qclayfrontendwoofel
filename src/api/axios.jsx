import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://qclaybackend1.vercel.app/api/v1",
    headers: { "Content-Type" : "application/json" }
})