import React from "react";
import Selections from "./Selections";

const Carousel: React.FC = () => {
  return (
    <div className="flex mt-12 lg:mt-24 lg:mb-12 z-20">
      <section className="flex flex-row flex-wrap lg:flex-nowrap gap-0 lg:gap-4 xl:gap-12 w-full lg:max-w-[1200px] items-center lg:items-end justify-between z-10">
        <Selections />
      </section>
    </div>
  );
};

export default Carousel;
