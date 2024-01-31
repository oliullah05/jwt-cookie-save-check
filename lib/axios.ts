import axios from "axios";
import { serverURI } from "./utils";

const exportApi = axios.create({
  baseURL: serverURI,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
export default exportApi
