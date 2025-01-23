import RicoOnFullDisplay from "./RicoOnFullDisplay";
import Carousel from "./Carousel";
import CarouselControls from "./CarouselControls";

const Components: React.FC = () => (
  <main className="flex flex-col mt-[20vh] lg:my-[18vh] lg:px-24 lg:pt-24 p-8 relative bg-black">
    <RicoOnFullDisplay />
    <CarouselControls />
    <Carousel />
  </main>
);

export default Components;
