import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="slide w-full bg-[#f1c121]  relative z-20 flex items-center md:py-2  rotate-1 -mt-20 md:-mt-52">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="flex items-center gap-12">
            <h1 className="text-xl text-[#f1c121] font-bold font-title flex items-center">
              <img src="/img/hero.png" alt="" className="w-20 " />
              HEDHANCE
            </h1>

            <h1 className="text-4xl">*</h1>
            <h1
              key={i}
              className="title-text text-stroke-sm text-4xl text-white  px-12 tracking-wider"
            >
              BINANCE
            </h1>
            <h1 className="text-4xl">*</h1>
            <h1
              key={i}
              className="title-text text-stroke-sm text-4xl text-white  px-12 tracking-wider"
            >
              Buy Now
            </h1>
          </div>
        ))}
      </Marquee>
      <img
        src="/imgs/groupImg.pngs"
        className="absolute   left-0 -top-20 w-full opacity-15"
        alt=""
      />
    </section>
  );
};

export default SlidingText;
