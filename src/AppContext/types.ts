interface ProviderProps {
    children: React.ReactNode;
}
  
interface SlideDataType {
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
  
interface ContextTypes {
    selectedImageIndex: number;
    setSelectedImageIndex: (index: number) => void;
    slideData: Array<SlideDataType> | null;
    setSlideData: (data: Array<SlideDataType>) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
}

export type { ContextTypes, SlideDataType, ProviderProps };