import React from "react";
import useDataContext from "../../Context/context";
import { ricoImagePaths } from "../../util/functions";

const RicoOnFullDisplay: React.FC = () => {
  const { selectedImageIndex } = useDataContext();
  const imagePaths = ricoImagePaths("background");

  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100%  z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10 left-50" />
        <picture>
          <source
            media="(min-width:2560px)"
            srcSet={`/assets/images/${selectedImageIndex + 1}-background.webp`}
          />
          <source
            media="(max-width:1920px)"
            srcSet={`/assets/images/${selectedImageIndex + 1}-background.webp`}
          />
          <img
            src={`/assets/images/${selectedImageIndex + 1}-background.webp`}
            alt="thumnail"
            className="ml-auto"
          />
        </picture>
        {selectedImageIndex === 0 && (
          <picture>
            <source
              media="(min-width:2560px)"
              srcSet="assets/images/1-foreground-cutout.webp"
            />
            <source
              media="(max-width:1920px)"
              srcSet="assets/images/1-foreground-cutout.webp"
            />
            <img
              src="assets/images/1-foreground-cutout.webp"
              alt="Big Rico"
              className="absolute bottom-0 right-[15vw] top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)]"
            />
          </picture>
        )}
      </div>
    </div>
  );
};

export default RicoOnFullDisplay;
