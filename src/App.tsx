import React from "react";
import Carousel from "./components/Carousel";
import CarouselControls from "./components/CarouselControls";
import RicoOnFullDisplay from "./components/RicoOnFullDisplay";

const App: React.FC = () => {
  return (
    <main className="flex flex-col mt-[20vh] lg:my-[18vh] lg:px-24 lg:pt-24 p-8 relative bg-black">
      <RicoOnFullDisplay />
      <CarouselControls />
      <Carousel />
    </main>
  );
};

export default App;
