import { useState, useEffect } from "react";
import RicoOnFullDisplay from "./RicoOnFullDisplay";
import Carousel from "./Carousel";
import Controls from "./Controls";
import useDataContext from "../AppContext";
import { ContextTypes } from "../AppContext/types";

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
    return (
      <h1 className="font-black text-[50px] mt-[20vh] lg:my-[18vh] lg:px-24 lg:py-24 p-8 relative bg-black text-center h-[75vh] content-center">
        Oops! Rico isn't here right now. Try back later!
      </h1>
    );
  }

  return (
    <main className="flex flex-col mt-[20vh] lg:my-[18vh] lg:px-24 lg:pt-24 p-8 relative bg-black min-h-[115vh]">
      <RicoOnFullDisplay />
      <Controls />
      <Carousel />
    </main>
  );
};

export default Components;
