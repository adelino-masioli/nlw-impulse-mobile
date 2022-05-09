import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.23.116.89:3333",
});
