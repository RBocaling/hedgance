import React from "react";
const About = () => {
  return (
    <section id="about" className="relative w-full  mt-16 md:mt-0 z-30">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end px-5  z-30 ">
        <div className="relative w-full md:w-1/2 pl-4">
          {" "}
          <h1 className="text-3xl md:text-5xl text-[#f1c121] font-bold font-title flex items-center mb-9">
            ABOUT US
          </h1>
          <p className="title-text text-stroke-xs text-xl md:text-2xl text-white font-bold mb-9 mt-9 md:mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            deserunt, dolorem error ullam inventore expedita.. <br /> <br />{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sed, culpa cumque odio quis mollitia possimus reprehenderit, atque
            totam, dolorum necessitatibus ducimus. Rerum, perferendis sed.
          </p>
          <button className="btn ">Buy Now</button>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/img/hero.png" alt="" className="relative z-30 w-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
