import apiClient from "./apiClient";

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/login", credentials);
  const token = response.data.token;

  if (token) {
    localStorage.setItem("token", token);
  }

  return response.data;
};
