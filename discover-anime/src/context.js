import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const initialState = {
  animeDB: [],
};

const AppProvider = ({ children }) => {
  const [savedInfo, setSavedInfo] = useState(initialState);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{ ...savedInfo, setSavedInfo, showMenu, setShowMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
