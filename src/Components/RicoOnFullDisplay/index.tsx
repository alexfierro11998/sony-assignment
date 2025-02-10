import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useDataContext from "../../AppContext";
import { ContextTypes } from "../../AppContext/types";
import { ricoImagePaths } from "../../util/functions";
import { useImagePreloader } from "../../util/hooks";

const RicoOnFullDisplay: React.FC = () => {
  const { selectedImageIndex, slideData }: ContextTypes = useDataContext();
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  const imagePaths: Array<string> = useMemo(
    () => ricoImagePaths(slideData, "background"),
    []
  );

  const imagesPreloaded: boolean = useImagePreloader(imagePaths);
  if (!imagesPreloaded) {
    return <div className="absolute inset-0 w-full bg-black" />;
  }

  const currentSlide = slideData?.[selectedImageIndex];

  return (
    <div className="absolute inset-0 w-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-[#252d3700] from-40% via-[#000000] via-72.92% to-[#09101A] to-100%  z-20 min-h-[115vh]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] from-75% to-[#000000] to-100% z-10 left-50" />

        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide?.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={currentSlide?.background}
            alt={currentSlide?.backgroundAlt}
            className="ml-auto w-[72%]"
            aria-label="Background Image"
            role="img"
            onLoad={() => setBackgroundLoaded(true)}
          />
        </AnimatePresence>

        {currentSlide?.cutout && backgroundLoaded && (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.cutout}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={currentSlide.cutout}
              alt={currentSlide.cutoutAlt}
              className={`absolute bottom-0 right-[15vw] top-[-90px] h-[calc(100%+70px)] lg:h-[calc(100%+90px)] ${
                selectedImageIndex === 5 ? "right-0" : ""
              }`}
              aria-label="Cutout Image"
              role="img"
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default RicoOnFullDisplay;
