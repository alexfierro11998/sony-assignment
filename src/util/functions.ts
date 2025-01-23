type ImagePathType = 'background' | 'thumbnail'

export const ricoImagePaths =(type: ImagePathType) => {
    const basePath = "/assets/images/";
    const initImages = Array.from({ length: 6 }, (_, i) => i + 1);
    return initImages.map(i => `${basePath}${i}-${type}.webp`);
};