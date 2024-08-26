import React from "react";
import Port from "./Port";
const data = [
  {
    year: 2024,
    title: "ProDevs",
    duration: "Active",
    details:
      "At ProDevs currently on an internship role as a Frontend-Developer, which covers implementations of designs on figma using different frontend frameworks and language (Html, Css, Bootstrap, TailwindCss, React.js) framework and consumption of api for proper functionalities on web platforms",
  },
  {
    year: 2023,
    title: "Marketbox",
    duration: "Active",
    details:
      "At MarketBox is a startup that covers digital-market reach for organization and business looking to reach a particular audience or market within the digital sphere, i basically cover part content writing and anything related with website creations and questions related to the web-market ",
  },
  {
    year: 2016,
    title: "INITS",
    duration: "6months",
    details:
      "At INITS we were tasked to work on the Dangote Poverty Alleviation Program which was targeted for the women and girl child, We were able to accumulate datas for recipient of this aids across different local government in Nigeria",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center  text-green-800">
        Portfolio
      </h1>
      {data.map((item, idx) => (
        <Port
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};
export default Portfolio;
