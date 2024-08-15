import { useUserStore } from "../../store/useUserStore";
import axios from "axios";
const { VITE_API_URL } = import.meta.env;

const baseConfig = {
  baseURL: VITE_API_URL,
  withCredentials: true,
};

export const instanceWithoutInterceptors = axios.create(baseConfig);

export const instance = axios.create(baseConfig);

instance.interceptors.request.use(
  (config) => {
    const { accessToken } = useUserStore.getState();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const { removeCredentials } = useUserStore.getState();

      removeCredentials();
    }
    return Promise.reject(error);
  }
);
