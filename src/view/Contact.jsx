import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full pt-12 pb-40">
      <div className="container mx-auto flex flex-col items-center justify-center md:py-5 contact relative">
        <h1 className="text-4xl md:text-8xl text-[#f1c121] font-bold font-title flex items-center">
          CONTACT
        </h1>
        <div className="flex items-center justify-between md:w-[32rem] gap-2 px-7 mt-5">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="p-3 rounded-full bg-[#f1c1s21] shadow-lg letter"
            >
              <img
                src={item.img}
                className="w-10 h-10 md:w-12 md:h-12"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
