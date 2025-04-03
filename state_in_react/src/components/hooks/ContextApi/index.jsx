import { createContext, useContext } from "react";

// 1 step
export const BioContext = createContext();

// 2 step
export const BioProvider = ({ children }) => {
  const myName = "Kishan";
  const myAge = 19;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

//todo Create custome hooks

export const useBioContext = () => {
  const context = useContext(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
};
