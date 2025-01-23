import React from "react";
import Title from "./Title";
import Status from "./Status";
import Name from "./Name";
import Description from "./Description";
import NavButton from "./NavButton";

const CarouselControls: React.FC = () => {
  return (
    <div className="w-full z-20">
      <Title />
      <Status />
      <Name />
      <Description />
      <NavButton />
    </div>
  );
};

export default CarouselControls;
