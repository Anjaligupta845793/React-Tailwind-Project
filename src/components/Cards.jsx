import React from "react";
import Single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-20 text-black bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 text-center py-9 px-5">
        <div className=" p-6  hover:scale-105  rounded-lg shadow-xl duration-300 my-4">
          <img
            src={Single}
            alt="single"
            className="w-20  bg-white mx-auto mt-[-2rem]"
          />
          <h1 className="md:text-3xl text-2xl py-4">Single User</h1>
          <h1 className="py-2 font-bold md:text-3xl text-2xl">$149</h1>
          <p className="py-3">500 GB storage</p>
          <p className="py-3">1 User Alowed</p>
          <p className="py-3">send up to 280</p>
          <button className="bg-[#00df9a] w-[120px] rounded-lg  mx-auto p-2 mt-4 font-medium  text-black">
            Start Trial
          </button>
        </div>
        <div className=" p-6  rounded-lg shadow-lg hover:scale-105 duration-300 my-4">
          <img src={double} alt="" className="w-20 mx-auto mt-[-2rem]" />
          <h1 className="md:text-3xl text-2xl py-4">Partnership</h1>
          <h1 className="py-2 font-bold md:text-3xl text-2xl">$199</h1>
          <p className="py-3">500 GB storage</p>
          <p className="py-3">1 User Alowed</p>
          <p className="py-3">send up to 280</p>
          <button className="bg-[#00df9a] w-[120px] rounded-lg mx-auto p-2 mt-4 font-medium  text-black">
            Start Trial
          </button>
        </div>
        <div className=" p-6 rounded-lg shadow-lg hover:scale-105 duration-300 my-4">
          <img src={triple} alt="" className="w-20 mx-auto mt-[-2rem]" />
          <h1 className="md:text-3xl text-2xl py-4">Group Account</h1>
          <h1 className="py-2 font-bold md:text-3xl text-2xl">$299</h1>
          <p className="py-3">500 GB storage</p>
          <p className="py-3">1 User Alowed</p>
          <p className="py-3">send up to 280</p>
          <button className="bg-[#00df9a] w-[120px] rounded-md mx-auto p-2 mt-4 font-medium  text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
