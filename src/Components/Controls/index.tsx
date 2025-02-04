import Headline from "./Headline";
import Overline from "./Overline";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import useDataContext from "../../Context/context";

const CarouselControls: React.FC = () => {
  const { slideData, selectedImageIndex } = useDataContext();

  const selectedSlide = slideData?.[selectedImageIndex];

  return (
    <div className="w-full z-20">
      <Headline headline={selectedSlide?.headline} />
      <Overline overline={selectedSlide?.overline} />
      <Title title={selectedSlide?.title} />
      <Paragraph paragraph={selectedSlide?.paragraph} />
      <Button
        buttonText={selectedSlide?.button}
        buttonLink={selectedSlide?.buttonLink}
      />
    </div>
  );
};

export default CarouselControls;
