import { useState, useEffect } from "react";

/*
 * create image object for each path
 * and allow browser to cache the images
 * did this to optimize UX :)
 */
export const useImagePreloader = (imagePaths: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

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
