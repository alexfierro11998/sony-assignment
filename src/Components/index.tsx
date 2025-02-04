import { useState, useEffect } from "react";
import RicoOnFullDisplay from "./RicoOnFullDisplay";
import Carousel from "./Carousel";
import CarouselControls from "./CarouselControls";
import useDataContext, { ContextTypes } from "../Context/context";

const Components: React.FC = () => {
  const { setLoading, setSlideData }: ContextTypes = useDataContext();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/data")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSlideData(data.slides);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <></>;
  }

  return (
    <main className="flex flex-col mt-[20vh] lg:my-[18vh] lg:px-24 lg:pt-24 p-8 relative bg-black">
      <RicoOnFullDisplay />
      <CarouselControls />
      <Carousel />
    </main>
  );
};

export default Components;
