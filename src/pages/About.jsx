import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  // SiNextdotjs,
  // SiSolidity,
  SiFirebase,
  // SiVueDotJs,
  SiAngular,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import "./About.css";

const experiences = [
  {
    role: "Frontend Developer",
    company: "PayOnUs",
    duration: "Jan 2026 - Present",
    description:
      "Currently interning at Payonus, where I contribute to building and improving web applications, working with modern technologies, and gaining hands-on experience in fintech solutions.",
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
  {
    role: "Frontend Developer",
    company: "SPLITA",
    duration: "May 2025 - Nov 2025",
    description:
      "Building responsive and user-friendly interfaces, turning complex designs into seamless web experiences using modern frontend technologies.",
    logo: "/splitalogo.png",
  },
];

const skills = [
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  // { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  // { name: "Solidity", icon: <SiSolidity />, color: "#363636" },
  { name: "UI/UX Design", icon: <FaFigma />, color: "#f24e1e" },
  { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
  { name: "Vue.js", icon: <SiVuedotjs />, color: "#42b883" },
  { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38b2ac" },
];

const About = () => {
  return (
    <section id="about" className="about grid-bg">
      <div className="about-container">
        <span className="about-eyebrow">ABOUT ME</span>

        <h2 className="about-title">
          I don’t just write code.
          <br />
          <span>I design how systems think.</span>
        </h2>

        <p className="about-text">
          I’m a Frontend Developer who builds interactive, responsive, and
          beautiful web experiences. I turn complex interfaces into intuitive
          designs that users love, focusing on performance, accessibility, and
          smooth interactions.
        </p>

        <p className="about-text">
          My approach blends engineering discipline with design thinking. I
          believe good frontend code should feel obvious to users, maintainable
          for developers, and resilient across devices. I’m passionate about
          crafting interfaces that are not only functional but delightful to
          use.
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
            <h3>Problem Solving</h3>
            <p>
              Breaking down complex problems into simple, elegant solutions that
              scale.
            </p>
          </div>
        </div>

        <div className="about-skills">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-icon-wrapper"
                title={skill.name}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="curve-journey">
          <h2 className="journey-title">
            My Journey at THE CURVE AFRICA by Kora
          </h2>

          <div className="journey-container">
            <div className="journey-image">
              <img src="/Team Splita.jpg" alt="The Curve Africa Journey" />
            </div>

            <div className="journey-text">
              <h3>The Curve Africa <span style={{fontSize:"16px"}}>by kora</span></h3>

              <p>
                My journey at The Curve Africa by Kora was a defining step in my
                development as a software engineer. During this program, I
                deepened my understanding of frontend engineering while
                collaborating with other aspiring developers across Africa.
              </p>

              <p>
                Through hands-on projects, mentorship, and continuous learning,
                I strengthened my skills in building modern web applications,
                writing maintainable code, and translating design ideas into
                functional user interfaces.
              </p>

              <p>
                The experience helped shape my problem-solving mindset and
                reinforced my passion for creating technology that impacts
                people at scale.
              </p>
            </div>
          </div>
        </div>
        <div className="about-experiences">
          <h2 className="experiences-title">My Experiences</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="company-logo"
                />
                <div className="experience-info">
                  <h3>
                    {exp.role} - {exp.company}
                  </h3>
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
