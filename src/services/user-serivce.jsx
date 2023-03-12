import { publicApi, privateApi } from "../services/api";

export const authUser = ({ body, token }) => {
  const headers = token ? { authorization: `Bearer ${token}` } : {};

  return publicApi.post("/api/auth", body, { headers });
};

export const getUserByEmail = ({ email }) =>
  privateApi.get(`/api/users/email/${email}`);

export const addUser = () => {
  return ({ body }) => publicApi.post("/api/user", body);
};
