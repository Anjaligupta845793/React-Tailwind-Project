import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-20 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 justify-center px-4">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-2xl text-xl ">
            Want Tips & tricks to optimize your flow ?
          </h1>
          <p className="py-4">Sign up to our newsletter and stay up to date </p>
        </div>
        <div className="py-4">
          <div className="flex  flex-col sm:flex-row w-full items-center justify-between">
            <input
              type="email"
              className=" rounded  mr-4 flex h-10  text-black w-full"
              placeholder="enter your email"
            />
            <button className="bg-[#00df9a] w-[220px] rounded-md   p-2 my-4 text-center font-medium  text-black sm:mx-auto ">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
