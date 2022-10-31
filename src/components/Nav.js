import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";

const Nav = () => {
  return (
    <div className="w-screen h-[90px] z-10 bg-blue-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full ">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent mr-3 font-bold">Sign in</button>
          <button className="border-none bg-transparent">sign out</button>
        </div>
      </div>

      <ReorderIcon />
    </div>
  );
};

export default Nav;
