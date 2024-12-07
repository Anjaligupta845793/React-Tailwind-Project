import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div
        className="flex flex-col justify-center  text-center h-[calc(100vh-80px)] 
      "
      >
        <p className=" font-bold text-[#00df9a] p-2 ">
          GROWING WITH DATA ANALITICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6 py-4 ">
          Grow With Data
        </h1>
        <div className="flex justify-center">
          <h4 className=" sm:text-3xl text-2xl font-bold ">
            Fast Flexible for{" "}
          </h4>
          <ReactTyped
            className="text-2xl  sm:text-3xl font-bold ml-2 "
            strings={["BTC", "BTB"]}
            typeSpeed={140}
            backSpeed={120}
            loop
          />
        </div>
        <h1 className=" md:text-2xl text-xl text-gray-500 ">
          Monitor your data analitics to grow your bussiness
        </h1>
        <button className="bg-[#00df9a] w-[120px] rounded-md mx-auto p-2 mt-4 font-medium  text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
