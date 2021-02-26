import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://kitsu.io/api/edge/trending/anime";
const AppContext = React.createContext();

const initialState = { animeDB: [], loading: false };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const resp = await fetch(url);
      const data = await resp.json();

      const anime = data.data;
      console.log(anime);
      dispatch({ type: "DISPLAY_ITEMS", payload: anime });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
