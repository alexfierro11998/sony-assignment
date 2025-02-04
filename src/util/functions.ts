type ImagePathType = 'background' | 'thumbnail'
import { SlideDataType } from "../AppContext/types";


// helper function to keep code DRY when fetching images
export const ricoImagePaths = (slideData: Array<SlideDataType> | null, type: ImagePathType) => {
    if (!slideData) return [];

    return slideData.reduce<string[]>((accu, slide) => {
        const newRefPoint = [...accu];
        if (type === "background" && slide.cutout) {
          newRefPoint.push(slide.cutout);
        }
        newRefPoint.push(slide[type]);
  
        return newRefPoint;
    }, []);
};