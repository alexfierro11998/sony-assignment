import Styles from "./Selections.module.css";
import useDataContext from "../../AppContext";
import { ContextTypes } from "../../AppContext/types";
import { ricoImagePaths } from "../../util/functions";

const Selections: React.FC = () => {
  const { selectedImageIndex, setSelectedImageIndex, slideData }: ContextTypes =
    useDataContext();
  const selectedStyles =
    "rounded-md border-thumbnail md:w-[160px] lg:w-full lg:max-w-[200px] xl:w-[280px]";
  const baseStyles =
    "p-2 w-full md:w-[160px] lg:w-full lg:max-w-[140px] xl:w-[160px] h-auto relative ";

  return (
    <>
      {ricoImagePaths(slideData, "thumbnail").map((image, index) => (
        <button
          onClick={() => setSelectedImageIndex(index)}
          className="w-1/3 flex justify-center items-center cursor-pointer transition-all duration-500"
          key={`Key: ${index + 1}`}
          aria-hidden={selectedImageIndex === index}
        >
          <div
            className={`${
              selectedImageIndex === index
                ? baseStyles + selectedStyles
                : baseStyles
            }`}
          >
            <div
              className={`${
                selectedImageIndex === index ? Styles["selected-border"] : ""
              }`}
            >
              <img
                className={`w-full h-auto rounded-md`}
                alt={slideData?.[selectedImageIndex].thumbnailAlt}
                src={image}
              />
            </div>
          </div>
        </button>
      ))}
    </>
  );
};

export default Selections;
