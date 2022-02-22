import { createContext, useEffect, useState } from "react";
import { useAuthentication } from "../hooks/use-authentication";

export const AuthProvider = ({ children }) => {
  const [disableAuthSubmit, setDisableAuthSubmit] = useState(false);
  const { accessToken, user, loading, handleSignIn, handleSignOut } =
    useAuthentication();

  useEffect(() => {
    if (!accessToken) {
      localStorage.removeItem("@dodipes:access-token");
      localStorage.removeItem("@dodipes:user-data");
    } else {
      localStorage.setItem("@dodipes:access-token", accessToken);
    }

    if (!user) {
      localStorage.removeItem("@dodipes:user-data");
    } else {
      const userStr = JSON.stringify(user);
      localStorage.setItem("@dodipes:user-data", userStr);
    }
  }, [accessToken, user]);

  return (
    <AuthContext.Provider
      value={{
        disableAuthSubmit,
        handleSignIn,
        handleSignOut,
        loadingAuth: loading,
        loggedIn: Boolean(user),
        setDisableAuthSubmit,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext({
  disableAuthSubmit: false,
  handleSignIn: () => {},
  handleSignOut: () => {},
  loadingAuth: false,
  loggedIn: false,
  setDisableAuthSubmit: () => {},
});
