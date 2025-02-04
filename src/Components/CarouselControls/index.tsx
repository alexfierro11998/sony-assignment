import Title from "./Title";
import Status from "./Status";
import Name from "./Name";
import Description from "./Description";
import NavButton from "./NavButton";
import useDataContext from "../../Context/context";

const CarouselControls: React.FC = () => {
  const { slideData, selectedImageIndex } = useDataContext();

  const selectedSlide = slideData?.[selectedImageIndex];

  return (
    <div className="w-full z-20">
      <Title title={selectedSlide?.title} />
      <Status />
      <Name />
      <Description />
      <NavButton />
    </div>
  );
};

export default CarouselControls;
