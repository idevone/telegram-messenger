import { instanceWithoutInterceptors } from "../baseApi";

export const login = async (body) => {
  const response = await instanceWithoutInterceptors.post("auth/login", body);
  return response.data;
};

export const logout = async () => {
  const response = await instanceWithoutInterceptors.post("auth/logout");
  return response.data;
};
