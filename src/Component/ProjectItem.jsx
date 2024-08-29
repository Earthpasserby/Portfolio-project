// import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-green-200 to-green-400">
      <img
        src={img}
        alt="Portfolio-img"
        className="rounded-xl group-hover:opacity-20"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-green-900 traking-wider text-center">
          {title}
        </h3>
        <a href="https://wa.me/message/2O47ANZPICY5M1">
          <p className="text-center p-3 rounded-lg bg-white text-green-800 font-bold cursor-pointer text-lg">
            Lets Work
          </p>
        </a>
      </div>
    </div>
  );
};
export default ProjectItem;
