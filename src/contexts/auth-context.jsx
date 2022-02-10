import { authUser, getUserByEmail } from "../services/user-serivce";
import { createContext, useState } from "react";
import { useApi } from "../hooks/use-api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authUserApi = useApi(authUser);
  const getUserByEmailApi = useApi(getUserByEmail);

  const login = async ({ body, token }) => {
    const { accessToken } = await authUserApi({ body, token });

    localStorage.setItem("@dodipes:access-token", accessToken);

    const { email } = body;
    const userData = await getUserByEmailApi({ email });

    localStorage.setItem("@dodipes:user-data", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("@dodipes:access-token");
    localStorage.removeItem("@dodipes:user-data");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn: Boolean(user), login, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();
