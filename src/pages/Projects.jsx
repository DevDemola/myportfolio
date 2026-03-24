import React from "react";
import "./Projects.css";
import { FiArrowRight } from "react-icons/fi";
// import BrandsSection from "../components/BrandsSection";

const Projects = () => {
  const handleScroll = () => {
    const section = document.getElementById("projects-list");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="projects-hero">
        <div className="projects-content">
          <h1>Past Projects</h1>

          <p>
            Take a look at some of the clients I've had the privilege to work with!
          </p>

          <button className="arrow-btn" onClick={handleScroll}>
            <FiArrowRight />
          </button>
        </div>
      </section>

      <section id="projects-list">
        {/* <BrandsSection /> */}
      </section>
    </>
  );
};

export default Projects;