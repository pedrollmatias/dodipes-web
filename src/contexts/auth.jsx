import { api } from "../services/api";
import { createContext, useState } from "react";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ body, token }) => {
    const bearerToken = `Bearer ${token}`;
    const headers = { authorization: bearerToken };
    const { data } = await api.post("/api/auth", body, { headers });
    const { accessToken } = data;

    sessionStorage.setItem('@dodipes:token', accessToken);
    setUser(true);
  };

  return (
    <AuthContext.Provider value={{ loggedIn: Boolean(user), login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext({});
