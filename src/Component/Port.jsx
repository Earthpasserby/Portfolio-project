import React from "react";
const Port = ({ year, title, duration, details }) => {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10">
          <div />
          <p>
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
