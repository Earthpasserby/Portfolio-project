import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="bg-green-700">
      <h1 className="text-4xl font-bold text-center text-lime-100">Contact</h1>
      <div className="flex justify-center">
        <div className="flex pt-6  max-w-[200px] w-full justify-between mx-36">
          <FaLinkedin size={30} className="cursor-poointer text-lime-100 " />
          <FaInstagram size={30} className="cursor-poointer text-lime-100" />
          <FaTwitter size={30} className="cursor-poointer text-lime-100" />
        </div>
      </div>
      <div className="flex justify-center ">
        <a>
          <p className=" mt-5 text-lime-100 text-2xl text-center">
            GET IN TOUCH
          </p>
          <p className=" mt-5 text-lime-100 text-sm text-center">
            2024 Iwuno-Samuel. Reserved for gigs
          </p>
        </a>
      </div>
    </div>
  );
};
export default Contact;
