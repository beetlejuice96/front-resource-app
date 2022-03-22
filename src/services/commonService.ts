import axios from "axios";

export const APIClient = axios.create({
  baseURL: "http://192.168.0.100:5000/api",
  timeout: 10000,
});
