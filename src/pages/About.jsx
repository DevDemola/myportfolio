import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiSolidity } from "react-icons/si";
import "./About.css";

// Experiences remain the same
const experiences = [
  {
    role: "Frontend Developer",
    company: "PayOnUs",
    duration: "Jan 2026 - Present",
    description:
      "Built responsive web applications with React, improving performance and user experience.",
    logo: "/onus.jpeg", 
  },
  {
    role: "Frontend Developer",
    company: "The Curve Africa",
    duration: "May 2025 - Nov 2025",
    description:
      "Designed intuitive interfaces and collaborated with developers to implement seamless designs.",
    logo: "/curve.png",
  },
];

// Skills with icons and brand colors
const skills = [
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Solidity", icon: <SiSolidity />, color: "#363636" },
  { name: "UI/UX Design", icon: <FaFigma />, color: "#f24e1e" },
];

const About = () => {
  return (
    <section id="about" className="about grid-bg">
      <div className="about-container">

        <span className="about-eyebrow">ABOUT ME</span>

        <h2 className="about-title">
          I don’t just write code.<br />
          <span>I design how systems think.</span>
        </h2>

        <p className="about-text">
          I’m a software engineer who enjoys building clean, scalable systems
          that actually make sense. From intuitive user interfaces to smart
          contracts that run trustlessly on the blockchain, I care deeply about
          how things work under the hood.
        </p>

        <p className="about-text">
          My approach blends engineering discipline with product thinking.
          I believe good software should feel obvious to users, solid to
          developers, and resilient in the real world.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Frontend Engineering</h3>
            <p>
              Crafting responsive, accessible interfaces with attention to
              detail, performance, and motion.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Blockchain & Smart Contracts</h3>
            <p>
              Designing secure, auditable smart contracts that power
              decentralized applications.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Problem Solving</h3>
            <p>
              Breaking down complex problems into simple, elegant solutions
              that scale.
            </p>
          </div>
        </div>

        {/* Skills Section with Icons */}
        <div className="about-skills">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-icon-wrapper" title={skill.name}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Section with Logos */}
        <div className="about-experiences">
          <h2 className="experiences-title">My Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <div className="experience-info">
                  <h3>{exp.role} - {exp.company}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
