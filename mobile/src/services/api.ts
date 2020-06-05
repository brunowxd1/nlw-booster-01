import axios from "axios";

//Conecta à API
const api = axios.create({
  baseURL: "http://192.168.11.12:3333",
});

export default api;
