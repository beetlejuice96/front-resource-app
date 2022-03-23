import axios from "axios";
import CONFIG from "../configs";
export const APIClient = axios.create({
  baseURL: CONFIG.SERVICES.API.URL,
  timeout: 10000,
});
