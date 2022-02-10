import { publicApi, privateApi } from "../services/api";

export const authUser = () => {
  return ({ body, token }) => {
    const headers = token ? { authorization: `Bearer ${token}` } : {};
    
    return publicApi.post("/api/auth", body, { headers });
  };
};

export const getUserByEmail = () => {
  return ({ email }) =>
    privateApi.post("/api/users/email", {
      email,
    });
};

export const registerUser = () => {
  return (body) => publicApi.post("/api/user/registration", body);
};
