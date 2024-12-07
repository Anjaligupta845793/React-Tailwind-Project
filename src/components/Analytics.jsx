import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full py-20 bg-white px-4 ">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] mx-auto py-4" />
        <div className="flex flex-col justify-center ">
          <p className="font-bold text-[#00df9a]">DATA ANALTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold ">
            Manage Data Analitics Programmatically
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            nobis corporis inventore labore voluptate omnis exercitationem
            quibusdam. Numquam quaerat delectus, ad iure dolor quo cupiditate
            deserunt blanditiis non corporis autem.
          </p>
          <button className="bg-[#00df9a] w-[120px] rounded-md  p-2 mt-4 font-medium  text-black  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
