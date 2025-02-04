import React, { createContext, useContext, useState } from "react";

// I would've used Redux for this demo since it's part of your stack
// but Context API is better suited since this is a really small app

interface ProviderProps {
  children: React.ReactNode;
}

export interface SlideDataType {
  thumbnail: `${string}.webp`;
  thumbnailAlt: string;
  background: `${string}.webp`;
  backgroundAlt: string;
  cutout?: `${string}.webp`;
  cutoutAlt?: string;
  headline: string;
  title: string;
  overline: string;
  paragraph: string;
  button: "Learn More";
  buttonLink: "https://www.playstation.com/";
}

export interface ContextTypes {
  selectedImageIndex: number;
  setSelectedImageIndex: (index: number) => void;
  slideData: Array<SlideDataType> | null;
  setSlideData: (data: Array<SlideDataType>) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const DataContext = createContext<ContextTypes | null>(null);

export const DataContextProvider = ({ children }: ProviderProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [slideData, setSlideData] = useState<Array<SlideDataType> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
