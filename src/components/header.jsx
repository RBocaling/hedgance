import React, { useState } from "react";
import { navlinks, socials } from "../constant";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-5">
        <h1 className="text-xl text-[#f1c121] font-bold font-title flex items-center">
          <img src="/img/hero.png" alt="" className="w-20 " />
          HEDHANCE
        </h1>
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="text-white text-xl">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-9">
          <div className="flex items-center gap-5">
            {socials.slice(0, 2)?.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="h-12 w-12 bg-dark-violet rounded-lg flex items-center justify-center"
              >
                <img src={item.img} className="w-[2rem]" alt="" />
              </a>
            ))}
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {" "}
          <CgMenuRight size={40} className="text-yellow-500 " />
        </button>
        <button className="btn hidden md:flex">Buy Now</button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed top-0 left-0 bottom-0 w-9/12 bg-[#1b1b1a] z-[999] py-5 md:hidden flex flex-col items-center justify-start duration-300 z-50 transition-all">
          <h1 className="text-xl text-[#f1c121] font-bold font-title flex items-center">
            <img src="/img/hero.png" alt="" className="w-20 " />
            HEDHANCE
          </h1>

          <ul className="flex flex-col items-center justify-center gap-5">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a href={item.url} className=" text-white text-3xl font-medium">
                  {item.label}
                </a>
              </li>
            ))}
            <button className="btn hidden md:flex">Buy Now</button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
