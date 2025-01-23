import React, { createContext, useContext, useState } from "react";

// I would've used Redux for this demo since it's part of your stack
// but Context API is better suited since this is a really small app

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextTypes {
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
}

const DataContext = createContext<ContextTypes | null>(null);

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <DataContext.Provider value={{ selectedImageIndex, setSelectedImageIndex }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to bypass needing to null check
const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a context provioder");
  }
  return context;
};

export default useDataContext;
