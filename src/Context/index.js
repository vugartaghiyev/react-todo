import { createContext, useState, useReducer } from "react";
import { reducer } from "./reducer";

export const Context = createContext();

const initialState = {
  list: [
    {
      id: 0,
      text: "hey",
      completed: false,
    },
    {
      id: 1,
      text: "Hi",
      completed: true,
    },
    {
      id: 2,
      text: "What's up",
      completed: false,
    },
  ],
  filterType: "all",
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
