import { useState, useEffect } from "react";

export const useImagePreloader = (imagePaths: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const loadImage = (path: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    };

    Promise.all(imagePaths.map((path) => loadImage(path)))
      .then(() => setImagesPreloaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, [imagePaths]);

  return imagesPreloaded;
};
