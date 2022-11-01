import React from "react";
import bgImg from "../assets/cyber-bg.png";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StorageIcon from "@mui/icons-material/Storage";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-indigo-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1248px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-blue-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className=" text-indigo-600"/> App security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <StorageIcon className=" text-indigo-600"/> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className=" text-indigo-600"/> App security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <StorageIcon className=" text-indigo-600"/> Dashboard Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
