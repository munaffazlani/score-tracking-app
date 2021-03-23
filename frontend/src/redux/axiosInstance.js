import axios from "axios";

const apiurl = "http://localhost:3003/";

export const axiosInstance = axios.create({
  baseURL: apiurl,
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});
