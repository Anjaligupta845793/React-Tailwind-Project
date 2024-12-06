import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className=" text-white flex justify-between items-center px-5 h-20 max-w-[1260px] mx-auto ">
      <h1 className="text-3xl text-[#00df9a] font-bold ">LOGO</h1>
      <ul className="md:flex  hidden ">
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Product</li>
        <li className="p-4">Home</li>
      </ul>
      <div onClick={() => setNav(!nav)} className="block md:hidden">
        {!nav ? <IoClose size={40} /> : <IoMenu size={40} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl text-[#00df9a] font-bold m-5">LOGO</h1>
        <ul className=" p-4  border-b border-gray-600 uppercase">
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4 border-b border-gray-600 ">Contact</li>
          <li className="p-4 border-b border-gray-600 ">Product</li>
          <li className="p-4  ">Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
