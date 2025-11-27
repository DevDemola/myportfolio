import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
    { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
  ];

  return (
    <div>
      <section className="skills-section">
        <div className="skills-left">
          <h2>⚡ Skills & Toolbox</h2>
          <p>
            To bring ideas to life, I rely on a blend of design precision and
            technical expertise. Each tool here represents part of the creative
            process that turns vision into impactful, user-friendly experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
