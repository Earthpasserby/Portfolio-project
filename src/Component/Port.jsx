import React from "react";
const Port = ({ year, title, duration, details }) => {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-10">
          <div className="absolute w-3 h-3 bg-green-800 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span>{year}</span>
            <span>{title}</span>
            <span>{duration}</span>
          </p>
          <p>{details}</p>
        </li>
      </ol>
    </>
  );
};
export default Port;
