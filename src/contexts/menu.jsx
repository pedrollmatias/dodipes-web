import { useState, createContext } from "react";

export const MenuProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(0);

  return (
    <MenuContext.Provider
      value={{
        refresh,
        triggerRefresh: () => setRefresh((oldRefresh) => (oldRefresh += 1)),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const MenuContext = createContext({
  refresh: 0,
  triggerRefresh: () => {},
});
