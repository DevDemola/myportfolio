import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Splita",
    description:
      "Splita is a platform that digitizes traditional Ajo by allowing groups to contribute money periodically and receive payouts in turns. dashboard with real-time analytics and motion-rich UI components.",
    img: "/Splita.png",
    link: "https://splita.vercel.app/#",
    tech: ["React", "Javascript", "Tailwind", "Nodejs", "Expressjs"],
  },
  {
    title: "LUXELIPS",
    description:
      "A modern website built for a lip care vendor to showcase and sell lip care products. The platform features a clean and responsive design, product display pages, and an easy-to-navigate interface that enhances the brand’s online presence and improves customer engagement.",
    img: "/luxelips.png",
    link: "https://luxe-lips.vercel.app/",
    tech: ["Vanilla css", "React", "Typescript"],
  },
  {
    title: "VENDOROS",
    description:
      "A modern vendor management dashboard built with React that allows business owners to manage orders, products, and customers in one place. The platform features a clean responsive UI, interactive tables, modals for creating orders and products, and a mobile-friendly sidebar for seamless navigation across devices.",
    img: "/vendoros.png",
    link: "https://vendoros.vercel.app/",
    tech: ["React", "Tailwind CSS", "Firebase", "Javascript"],
  },
  {
    title: "Flatterz",
    description:
      "Flatterz is a professional portfolio website developed for a digital illustrator to showcase her artwork, highlight her creative skills, and present her projects in a visually engaging and organized way",

    img: "/esther.png",
    link: "https://flatterz.vercel.app/",
    tech: ["Vue", "Typescript", "Styled Component"],
  },
  {
    title: "Uplam",
    description:
      "Uplam is a church website developed to provide comprehensive information about the church, including its mission, programs, events, and community activities, making it easier for members and visitors to stay informed and connected.",
    img: "/uplam.png",
    link: "https://uplam.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  // {
  //   title: "Fashion4All",
  //   description:
  //     "Modern e-commerce interface with interactive product previews and motion effects.",
  //   img: "/Fashion.png",
  //   link: "#",
  //   tech: ["Next.js", "CSS Grid", "GSAP"],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-intro">
          Here’s a selection of projects I’ve crafted — blending design, code,
          and a touch of magic.
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
