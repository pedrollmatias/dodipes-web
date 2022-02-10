import { createContext, useState } from "react";

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});
