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
      title: "UPLAM",
      image: "/uplam.png",
      desc: "A Church website developed to show what the church is about,their services,how to worship with them",
      stack: ["Reactjs", "Vanilla css", "Javascript"],
      live: "https://uplam.vercel.app/",
    },
    {
      title: "VEGEFOODS",
      image: "/vegefoods.png",
      desc: "A Church website developed to show what the church is about,their services,how to worship with them",
      stack: ["Reactjs", "Vanilla css", "Javascript"],
      live: "https://vege-foods-seven.vercel.app/",
    },
    {
      title: "A COMPOSITOR PORTFOLIO",
      image: "/esther.png",
      desc: "A Church website developed to show what the church is about,their services,how to worship with them",
      stack: ["Reactjs", "StyledComponent", "Javascript"],
      live: "https://flatterz.vercel.app/",
    },
    {
      title: "URBAN FURNITURE-a sleek furniture website",
      image: "/urbanfurniture.png",
      desc: " I built a professional digital representation of a furniture business , a website that’s clean, navigable, and ready to show products and tell the brand story. Even without e-commerce functionality, it works as a showcase and contact hub, which is often the first step for creative businesses.",
      stack: ["React", "Tailwind CSS"],

      live: "https://urbanfurniture-ten.vercel.app/",
    },
    {
      title: "FashionForAll – An ecommerce website",
      image: "/Fashion.png",
      desc: "FashionForAll is a modern fashion brand creating stylish, high-quality pieces that let people express themselves with confidence and individuality",
      stack: ["Reactjs", "Tailwind CSS", "Context Api"],

      live: "",
    },
    // {
    //   title: "Shineon Cosmetics Clone – A skincare ecommerce website",
    //   image: "/Shineon.png",
    //   desc: "Cloned the ShineOn Cosmetics website to practice responsive design, UI/UX, and frontend development skills..",
    //   stack: ["Reactjs", "Tailwind CSS"],

    //   live: "",
    // },
  ];
  return (
    <div>
      <section className="projects-section" id="projects">
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
                  <a target="_blank" href={proj.live}>
                    🔗Live
                  </a>
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
