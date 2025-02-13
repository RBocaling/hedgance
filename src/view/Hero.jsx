import React from "react";
import SlidingText from "../components/SlidingText";
import Header from "../components/header";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-x-hidden md:overflow-hidden z-30"
    >
      <Header />
      <div className="container mx-auto relative flex flex-col items-center justify-center pt-10 md:pt-16 z-30 mt-20">
        <div className="flex gap-5 justify-center items-center text-[#f1c121] -mt-32">
          <h1 className="text neon-text">
            <span className="letter">H</span>
            <span className="letter letter-2">E</span>
            <span className="letter">D</span>
            <span className="letter">G</span>
            <span className="letter">A</span>
            <span className="letter">N</span>
            <span className="letter">C</span>
            <span className="letter">E</span>
          </h1>
        </div>

        <img
          src="/img/hero.png"
          alt=""
          className="relative z-30 -mt-20 md:-mt-64 w-full md:w-[70%] "
        />
      </div>

      <SlidingText />
    </section>
  );
};

export default Hero;
