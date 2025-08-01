import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API_CLIENT,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }
    console.error("Erro na resposta:", error.response?.status, error.message);
    return Promise.reject(error);
  },
);

export default api;
