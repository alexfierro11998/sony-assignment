import { useMemo } from "react";
import useDataContext from "../../AppContext";
import { ContextTypes } from "../../AppContext/types";
import { ricoImagePaths } from "../../util/functions";
import { useImagePreloader } from "../../util/hooks";

const RicoOnFullDisplay: React.FC = () => {
  const { selectedImageIndex, slideData }: ContextTypes = useDataContext();
  const imagePaths: Array<string> = useMemo(
    () => ricoImagePaths(slideData, "background"),
    []
  );
  const imagesPreloaded: boolean = useImagePreloader(imagePaths);

  if (!imagesPreloaded) {
    return <div className="absolute inset-0 w-full bg-black" />;
  }

  const currentSlide = slideData?.[selectedImageIndex];

  const baseStyles = `absolute bottom-0 top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]`;

  const spiderStyles = "right-" + (selectedImageIndex === 5 ? "0" : "[15vw]");

  const cutoutStyles = [baseStyles, spiderStyles].join(" ");

  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100% z-20 min-h-[115vh]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10 left-50" />

        <img
          src={currentSlide?.background}
          alt={currentSlide?.backgroundAlt}
          className="ml-auto w-[72%]"
          aria-label="Background Image"
          role="img"
        />

        {currentSlide?.cutout && (
          <img
            src={currentSlide.cutout}
            alt={currentSlide.cutoutAlt}
            className={cutoutStyles}
            aria-label="Cutout Image"
            role="img"
          />
        )}
      </div>
    </div>
  );
};

export default RicoOnFullDisplay;
