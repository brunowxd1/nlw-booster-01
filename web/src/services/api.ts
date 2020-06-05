import axios from "axios";

//Conecta ao banco de dados
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
