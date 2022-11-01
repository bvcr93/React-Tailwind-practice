import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import ClearIcon from "@mui/icons-material/Clear";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[90px] z-10 bg-blue-200 fixed drop-shadow-lg">
      <div className="px-4 flex justify-between items-center w-full h-full ">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>
        <div className=" hidden md:flex pr-4">
          <button className="border-none bg-transparent mr-3 font-bold text-black ">
            Sign in
          </button>
          <button className="px-8 py-3">sign up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <ReorderIcon /> : <ClearIcon />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-blue-200 w-full px-8"}>
        <li className="border-b-2 border-blue-300 w-full">Home</li>
        <li className="border-b-2 border-blue-300 w-full">About</li>
        <li className="border-b-2 border-blue-300 w-full">Support</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4 mt-3">
            Sign in
          </button>
          <button className=" px-8 py-3">Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
