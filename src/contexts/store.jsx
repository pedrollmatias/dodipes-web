import { useState, createContext } from "react";

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState();

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = createContext({
  store: undefined,
  setStore: () => {},
});
