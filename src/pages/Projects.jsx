import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Splita",
    description:
      "A futuristic admin dashboard with real-time analytics and motion-rich UI components.",
    img: "/Splita.png",
    link: "#",
    tech: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Vegefoods",
    description:
      "Secure crypto wallet with multi-chain support and seamless user experience.",
    img: "/vegefoods.png",
    link: "#",
    tech: ["Solidity", "React", "Web3.js"],
  },
  {
    title: "Urban Furniture",
    description:
      "Modern e-commerce interface with interactive product previews and motion effects.",
    img: "urbanfurniture.png",
    link: "#",
    tech: ["Next.js", "CSS Grid", "GSAP"],
  },
  {
    title: "Flatterz",
    description:
      "Modern e-commerce interface with interactive product previews and motion effects.",
    img: "/esther.png",
    link: "#",
    tech: ["Next.js", "CSS Grid", "GSAP"],
  },
  {
    title: "Uplam",
    description:
      "Modern e-commerce interface with interactive product previews and motion effects.",
    img: "/uplam.png",
    link: "#",
    tech: ["Next.js", "CSS Grid", "GSAP"],
  },
  {
    title: "Fashion4All",
    description:
      "Modern e-commerce interface with interactive product previews and motion effects.",
    img: "/Fashion.png",
    link: "#",
    tech: ["Next.js", "CSS Grid", "GSAP"],
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-intro">
          Here’s a selection of projects I’ve crafted — blending design, code, and a touch of magic.
        </p>

        <div className="projects-cards">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
