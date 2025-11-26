import React from "react";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <p>
        I’m a frontend developer who values beauty in both design and code.
        <br />
        My focus is on creating web experiences that feel smooth, elegant, and
        intentional—the kind of interfaces that not only work but leave a
        lasting impression.
        <br />
        I enjoy bringing clarity and life into ideas through clean, structured
        code, while maintaining a strong sense of creativity and precision.
        <br />
        My approach is simple: design with empathy, build with excellence, and
        keep learning with curiosity. Ever since I can remember, I’ve been drawn
        to creating.
        <br />
        From doodling in notebooks to designing websites, I’ve always loved
        turning thoughts into something tangible. My work is a reflection of my
        curiosity, attention to detail, and the joy I find in making ideas come
        alive.
      </p>
      <button
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1ZtmyZDJQQt2h_tkicAmUf0pdDHO_qGQxghItosU6q0U/edit?usp=sharing",
            "_blank"
          )
        }
      >
        Resume →
      </button>
    </section>
  );
};

export default Aboutme;
