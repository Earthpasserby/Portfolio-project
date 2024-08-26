import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="text-4xl font-bold text-center text-green-800">Contact</h1>
      <div className="flex justify-center">
        <div className="flex pt-6  max-w-[200px] w-full justify-between mx-36">
          <FaLinkedin size={30} className="cursor-poointer text-lime-800 " />
          <FaInstagram size={30} className="cursor-poointer text-lime-800" />
          <FaTwitter size={30} className="cursor-poointer text-lime-800" />
        </div>
      </div>
      <div>
        <a>
          <p className="text-center mt-5 rounded-lg bg-green-800 text-lime-200 text-2xl">
            GET IN TOUCH
          </p>
        </a>
      </div>
    </div>
  );
};
export default Contact;
