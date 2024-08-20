import React, { useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineMenu,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-green-500"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full  bg-green-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome size={20} className="text-green-300" />
            <span className="pl-4 text-green-100">Home</span>
          </a>
          <a
            href="#portfolio"
            className="w-[75%] flex justify-center items-center rounded-full  bg-green-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <BsPerson size={20} className="text-green-300" />
            <span className="pl-4 text-green-100">Portfolio</span>
          </a>{" "}
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full  bg-green-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <GrProjects size={20} className="text-green-300" />
            <span className="pl-4 text-green-100">Projects</span>
          </a>{" "}
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full  bg-green-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineContacts size={20} className="text-green-300" />
            <span className="pl-4 text-green-100">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col ">
          <a
            href="#home"
            className="rounded-full  bg-green-800  m-2 p-4 cursor-pointer ease-in duration-300"
          >
            <AiOutlineHome size={20} className="text-slate-100" />
          </a>
          <a
            href="#portfolio"
            className="rounded-full  bg-green-800   m-2 p-4 cursor-pointer ease-in duration-300"
          >
            <AiOutlineLaptop size={20} className="text-slate-100" />
          </a>
          <a
            href="#projects"
            className="rounded-full  bg-green-800 m-2 p-4 cursor-pointer ease-in duration-300"
          >
            <GrProjects size={20} className="text-slate-100" />
          </a>{" "}
          <a
            href="#contact"
            className="rounded-full  bg-green-800 m-2 p-4 cursor-pointer ease-in duration-300"
          >
            <AiOutlineContacts size={20} className="text-slate-100" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
