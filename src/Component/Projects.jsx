// import React from "react";
import ProjectItem from "./ProjectItem";
import auteImg from "../assets/asute.png";
import comeImg from "../assets/come.png";
import brandImg from "../assets/brand.png";
import palynxImg from "../assets/palynx.png";
import talentapply from "../assets/talentapply.png";
import astosi from "../assets/astosi.png";
import support from "../assets/support.png";
import wilsco from "../assets/wilsco.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-green-800">
        Projects
      </h1>
      <p className="text-center py-8 text-green-800">
        Here are some live and demo projects which i have worked on, i currently
        have two live projects looking forward to get hands on more projects
        while enhancing or building up my skill set.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://www.talentapply.io/">
          <ProjectItem
            img={talentapply}
            title="Discover(events & more)live project"
          />
        </a>
        <a href="https://wilscotravels.com/">
          <ProjectItem
            img={wilsco}
            title="Discover(events & more)live project"
          />
        </a>
        <a href="https://astosilab.com/">
          <ProjectItem
            img={astosi}
            title="Discover(events & more)live project"
          />
        </a>
        <a href="https://prodevs.io/support">
          <ProjectItem
            img={support}
            title="Discover(events & more)live project"
          />
        </a>
        <a href="https://www.palynx.com/">
          <ProjectItem
            img={palynxImg}
            title="Discover(events & more)live project"
          />
        </a>
        <a href="https://earthpasserby.github.io/ecommerce/detail.html">
          <ProjectItem img={comeImg} title="E-commerce demo " />
        </a>
        <a href="https://tbp-site.vercel.app/">
          <ProjectItem img={brandImg} title="Branding/Digital Marketing demo" />
        </a>
        <a href="https://astutetechmedicals.com.ng/">
          <ProjectItem img={auteImg} title="Medical Outreach live project" />
        </a>
      </div>
    </div>
  );
};
export default Projects;
