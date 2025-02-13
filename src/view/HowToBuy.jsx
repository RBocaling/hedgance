import React from "react";
import { tokenomics } from "../constant";

const HowToBuy = () => {
  const steps = [
    "Download and set up a crypto wallet like Metamask or Trust Wallet.",
    "Buy BNB (Binance Coin) on an exchange like Binance.",
    "Transfer BNB to your wallet.",
    "Connect your wallet to PancakeSwap.",
    "Swap BNB for HEDGANCE tokens.",
  ];
  return (
    <section className="relative w-full mb-20 mt-24 md:mt-0">
      <div className="container mx-auto flex flex-col  items-center justify-center md:gap-9 px-7">
        <h1 className="text-4xl md:text-5xl whitespace-nowrap  text-[#f1c121] font-bold font-title flex items-center mb-9">
          HOW TO BUY
        </h1>
        <li className="relative flex flex-col items-start gap- mb-3 z-30 letter">
          {steps.map((item, index) => (
            <ul
              key={index}
              className=" text-stroke-xs text-xl md:text-2xl text-white font-semibold my-5"
            >
              {`${index + 1}.  ${item}`}
            </ul>
          ))}
        </li>
      </div>
    </section>
  );
};

export default HowToBuy;
