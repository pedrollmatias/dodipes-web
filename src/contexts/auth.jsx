import { createContext, useState } from "react";
import { useAuthentication } from "../hooks/use-authentication";

export const AuthProvider = ({ children }) => {
  const [disableAuthSubmit, setDisableAuthSubmit] = useState(false);
  const { user, loading, handleSignIn, handleSignOut } = useAuthentication();

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
