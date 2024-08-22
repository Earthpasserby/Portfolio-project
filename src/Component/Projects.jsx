import React from "react";
import ProjectItem from "./ProjectItem";
import auteImg from "../assets/asute.png";
import comeImg from "../assets/come.png";
import brandImg from "../assets/brand.png";
import palynxImg from "../assets/palynx.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800">
        Projects
      </h1>
      <p className="text-center py-8 text-green-800">
        This a some live and demo projects which i have worked on, i currently
        have two live projects looking forward to get hands on more projects
        while enhancing or building up my skill set
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={comeImg} title="E-commerce demo " />
        <ProjectItem img={brandImg} title="Branding/Digital Marketing demo" />
        <ProjectItem img={auteImg} title="Medical Outreach live project" />
        <ProjectItem img={palynxImg} title="Discover (events, people & places) live project" />
      </div>
    </div>
  );
};
export default Projects;
