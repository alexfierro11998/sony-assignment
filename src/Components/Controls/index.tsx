import Headline from "./Headline";
import Overline from "./Overline";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import useDataContext from "../../AppContext";

const CarouselControls: React.FC = () => {
  const { slideData, selectedImageIndex, loading } = useDataContext();

  const selectedSlide = slideData?.[selectedImageIndex];

  return (
    <div className="w-full z-20">
      <Headline headline={selectedSlide?.headline} />
      <Overline overline={selectedSlide?.overline} loading={loading} />
      <Title title={selectedSlide?.title} />
      <Paragraph paragraph={selectedSlide?.paragraph} />
      <Button
        buttonText={selectedSlide?.button}
        buttonLink={selectedSlide?.buttonLink}
        loading={loading}
      />
    </div>
  );
};

export default CarouselControls;
