import React from "react";
import { FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="bg-green-600 mt-20 rounded-lg p-2 ">
      <h1 className="text-4xl font-bold text-center text-lime-100 pt-5">
        Contact
      </h1>
      <div className="flex justify-center">
        {/* <div className="flex pt-6  max-w-[200px] w-full justify-between mx-36">
          <a href="https://www.linkedin.com/in/iwuno-samuel-5819b6121/">
            <FaLinkedin size={30} className="cursor-poointer text-lime-200 " />
          </a>
          <a href="https://wa.me/message/2O47ANZPICY5M1">
            <FaWhatsapp size={30} className="cursor-poointer text-lime-200" />
          </a>
          <a href="https://x.com/iwuno68">
            <FaTwitter size={30} className="cursor-poointer text-lime-200" />
          </a>
        </div> */}
      </div>
      <div className="flex justify-center p-5">
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="flex">
            <a href="https://www.linkedin.com/in/iwuno-samuel-5819b6121/">
              <FaLinkedin
                size={30}
                className="cursor-poointer text-lime-200 "
              />
            </a>
            <p className=" pt-1 mx-2 text-lime-100 text-md text-center">
              Linkup on Linkedin
            </p>
          </div>
          <div className="flex">
            <a href="https://earthpasserby.github.io/ecommerce/detail.html">
              <FaTwitter size={30} className="cursor-poointer text-lime-200" />
            </a>
            <p className=" pt-1 mx-2 text-lime-100 text-md text-center">
              Follow on Twitter
            </p>
          </div>
          <div className="flex">
            <a href="https://wa.me/message/2O47ANZPICY5M1">
              <FaWhatsapp size={30} className="cursor-poointer text-lime-200" />
            </a>
            <p className=" pt-1 mx-2 text-lime-100 text-md text-center">
              Reach on Whatsapp
            </p>
          </div>

          <div className="flex">
            <a href="https://earthpasserby.github.io/ecommerce/detail.html">
              <FaTwitter size={30} className="cursor-poointer text-lime-200" />
            </a>
            <p className=" pt-1 mx-2 text-lime-100 text-md text-center">
              Reach on Instagram
            </p>
          </div>
        </div>
      </div>
      <div>
      
        <a href="mailto:iwuno68@gmail.com">
          <p className="p-2 rounded-lg text-lime-500 font-semibold text-2xl text-center bg-lime-100">
            GET IN TOUCH
          </p>
        </a>
        <p className=" mt-5 text-lime-100 text-sm text-center">
          2024 Iwuno-Samuel. Reserved for Gigs
        </p>
      </div>
    </div>
  );
};
export default Contact;
