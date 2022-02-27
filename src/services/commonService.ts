import axios from "axios";

export const APIClient = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});
