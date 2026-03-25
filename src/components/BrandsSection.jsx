import React from "react";
import "./BrandsSection.css";

const projects = [
  {
    title: "Flatterz",
    image: "/esther.png",
    tags: ["Branding", "Social Media", "Print"],
  },
  {
    title: "LuxeLips",
    image: "/luxelips.png",
    tags: ["Branding", "Website", "Social"],
  },
  {
    title: "Vendoros",
    image: "/vendoros.png",
    tags: ["Branding", "Website"],
  },
];

export default function BrandsSection() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Selected Projects</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="cards" key={index}>
            <div className="card-images">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-contents">
              <h3>{project.title}</h3>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <button className="view-btn">View Project →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
