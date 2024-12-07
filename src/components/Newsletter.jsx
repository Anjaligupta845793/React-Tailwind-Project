import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-20 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center px-4">
        <h1 className="md:text-3xl sm:text-2xl text-xl ">
          Want Tips & tricks to optimize your flow ?
        </h1>
        <p className="py-4">Sign up to our newsletter and stay up to date </p>
        <input
          type="text"
          className="py-2 rounded px-2"
          placeholder="enter your email"
        />
        <button className="bg-[#00df9a] w-[120px] rounded-md  p-2 mt-4 font-medium  text-black sm:mx-auto ">
          Notify Me
        </button>
        <p className="py-2">
          we care about the protection of your data Read our news letter
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
