import React from "react";
import "./Projects.css";
import { FiArrowRight } from "react-icons/fi";
import BrandsSection from "../components/BrandsSection";

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
        <BrandsSection />
      </section>
       <section className="cta">
      <h2>
        Ready to <span>Build</span> Your Website?
      </h2>

      <p>
        I’m excited that you want to work together on a project! Please fill out the form below with as much detail as possible. I’ll get back to you within 2 working days to arrange a free call where we can have a friendly chat about your project goals.
      </p>

      <button className="cta-btn">
        Start a Project
        <span className="arrow">→</span>
      </button>
    </section>
    </>
  );
};

export default Projects;