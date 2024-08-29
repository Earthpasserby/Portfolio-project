// import React from "react";
import {  FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="Black.png"
        alt="background-image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/5">
        <div className=" m-auto h-full w-full flex flex-col justify-center  items-center">
          <h1 className="text-lime-100 sm:text-6xl text-4xl font-bold text-center items-stretch">
            I'm Iwuno Samuel
          </h1>
          <h6 className="text-lime-200 sm:text-5xl text-3xl font-bold pt-4 mx-7 text-center">
            <TypeAnimation
              className="mx-2"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web-developer.",
                2000,
                "Writer.",
                1000,
                "Farmer&Entreprenuer.",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h6>
          <div className="flex pt-10  max-w-[300px] w-full justify-between">
            <a href="https://www.linkedin.com/in/iwuno-samuel-5819b6121/">
              <FaLinkedin
                size={30}
                className="cursor-poointer text-lime-200 "
              />
            </a>
            <a href="https://wa.me/message/2O47ANZPICY5M1">
              <FaWhatsapp size={30} className="cursor-poointer text-lime-200" />
            </a>
            <a href="https://x.com/iwuno68">
              <FaTwitter size={30} className="cursor-poointer text-lime-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
