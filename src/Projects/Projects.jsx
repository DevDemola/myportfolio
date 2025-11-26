import React from "react";
import "./Project.css";
const Projects = () => {
  const projects = [
    {
      title: "SPLITA – Digital Ajo Savings Platform",
      image: "/Splita.png",
      desc: " Splita digitizes the ajo savings culture by automating group contributions and payouts through a transparent, wallet-based platform .",
      stack: ["Reactjs", "StyledComponent", "Javascript"],
      live: "https://splita.vercel.app/",
    },
    {
      title: "DAWN EATS - Web app for fast food delivery",
      image: "/Splita.png",
      desc: "A mobile CRUD application built with React Native and Context API for managing and updating tasks in a smooth interface.",
      stack: ["Reactjs", "Vanilla css", "Javascript"],
      live: "#",
    },
    {
      title: "UPLAM – A church website",
      image: "/Splita.png",
      desc: "A personal blog site to share insights, moments, and experiences from my developer journey.",
      stack: ["React", "Tailwind CSS"],

      live: "#",
    },
  ];
  return (
    <div>
      <section className="projects-section">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>
            A collection of my most impactful works — where design, logic, and
            creativity come together to solve real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.image} alt={proj.title} />

              <div className="project-content">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                <div className="project-tags">
                  {proj.stack.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a target="_blank">🔗 Live</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
