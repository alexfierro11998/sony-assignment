import { useMemo } from "react";
import useDataContext, { ContextTypes } from "../../Context/context";
import { ricoImagePaths } from "../../util/functions";
import { useImagePreloader } from "../../util/hooks";

const RicoOnFullDisplay: React.FC = () => {
  const { selectedImageIndex, slideData }: ContextTypes = useDataContext();

  const imagePaths: Array<string> = useMemo(
    () => ricoImagePaths(slideData, "background"),
    []
  );

  /*
   * memoizing this cuts unnecessary re-renders down by 50% (6 to 3)
   * side note: you can also define this outside the component to achieve a similar effect
   * but I decided to do this to show off since this is supposed to be a show case of proficiency in React
   */

  /*
   * preload all images showcasing rico before component is mounted
   * and serve images from browser's cache instead of loading the image
   * for the first time when you click on a different image
   */
  const imagesPreloaded: boolean = useImagePreloader(imagePaths);

  if (!imagesPreloaded) {
    return <div className="absolute inset-0 w-full bg-black" />;
  }
  console.log(slideData?.[selectedImageIndex].background);
  return (
    <div className="absolute inset-0 w-full">
      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100%  z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10 left-50" />
        <img
          src={slideData?.[selectedImageIndex].background}
          alt={slideData?.[selectedImageIndex].backgroundAlt}
          className="ml-auto w-[72%]"
        />
        {slideData?.[selectedImageIndex].cutout && (
          <img
            src={slideData?.[selectedImageIndex].cutout}
            alt={slideData?.[selectedImageIndex].cutoutAlt}
            className="absolute bottom-0 right-[15vw] top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
          />
        )}
      </div>
    </div>
  );
};

export default RicoOnFullDisplay;
