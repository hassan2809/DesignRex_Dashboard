import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => { // Changed 'Children' to 'children'
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children} {/* Changed 'Children' to 'children' */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
