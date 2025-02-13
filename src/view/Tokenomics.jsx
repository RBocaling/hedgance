import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:gap-9 px-7">
        <div className="w-full md:w-1/2">
          <img
            src="/img/hero.png"
            alt=""
            className="relative z-30 w-full hidden md:flex"
          />
        </div>
        <div className="w-full md:w-1/2 relative ">
          <h1 className="text-4xl md:text-6xl text-[#f1c121] font-bold font-title flex items-center mb-9">
            TOKENOMICS
          </h1>
          <div className="relative  items-center justify-center gap-9 mb-3 z-30">
            {tokenomics.map((item, index) => (
              <div
                key={index}
                className="title-text text-stroke-xs text-2xl md:text-3xl text-white font-bold mb-9 flex items-center gap-7"
              >
                <h1 className=" text-stroke-xs text-3xl md:text-5xl letter font-bold">
                  {item.value}
                </h1>
                <h1 className=" text-stroke-xs text-xl md:text-2xl text-white font-bold">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
          <div className="relative flex  items-center gap-7 z-30">
            <h1 className=" text-stroke-xs text-3xl md:text-5xl letter font-bold">
              1,000,000,000
            </h1>
            <h1 className=" text-stroke-xs text-xl md:text-2xl text-white font-bold">
              Supply
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
