import React from "react";
import "./Experience.css";
// import experienceImage from "./experience-image.png"; // replace with your image path

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-image">
          <img src="./Team Splita.jpg" alt="Experience" />
        </div>

        <div className="experience-text">
          <h2>My Journey at Curve Africa</h2>
          <h4> The Curve Africa | MAY 2025 - NOV 2025</h4>
          <p>
            Joining Curve Africa was a transformative experience for me. I
            gained hands-on experience building real-world web applications,
            working closely with modern technologies like React and CSS
            frameworks, and collaborating effectively with my peers.
            <br />
            <br />
            Throughout the program, I worked on multiple projects that
            challenged me to think critically, design thoughtfully, and write
            clean, maintainable code. My team and I also participated in a
            hackathon for our final project, where we conceptualized, designed,
            and developed a fully functional web application from scratch.
            <br />
            <br />
            This journey not only strengthened my technical skills but also
            taught me the importance of teamwork, problem-solving, and
            perseverance in a fast-paced development environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
