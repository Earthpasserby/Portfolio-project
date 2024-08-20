import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
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
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-lime-200 sm:text-6xl text-4xl font-bold">
            I'm Iwuno Samuel
          </h1>
          <h6 className="text-lime-200 sm:text-5xl text-3xl font-bold pt-4 mx-7">
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
          <div className="flex pt-6  max-w-[200px] w-full justify-between mx-36 ">
            <FaLinkedin size={30} className="cursor-poointer text-lime-200 " />
            <FaInstagram size={30} className="cursor-poointer text-lime-200" />
            <FaTwitter size={30} className="cursor-poointer text-lime-200" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
