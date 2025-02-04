import { createContext, useContext, useState } from "react";
import { ProviderProps, SlideDataType, ContextTypes } from "./types";

// I would've used Redux for this demo since it's part of your stack
// but Context API is better suited since this is a really small app

const DataContext = createContext<ContextTypes | null>(null);

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [slideData, setSlideData] = useState<Array<SlideDataType> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <DataContext.Provider
      value={{
        selectedImageIndex,
        setSelectedImageIndex,
        slideData,
        setSlideData,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a context provioder");
  }
  return context;
};

export default useDataContext;
