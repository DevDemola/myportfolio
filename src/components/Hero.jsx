import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-image">
          <div className="image-ring">
            <img src="me.png" alt="demola" />
          </div>
        </div>

        <div className="hero-content">
          <h1>Ademola Omiyejuwon</h1>

          <h2>Software Engineer & Tech Enthusiast</h2>

          <p>
            I build interactive, responsive, and beautiful web experiences. I
            turn complex interfaces into intuitive designs that users love,
            focusing on performance, accessibility, and smooth interactions.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => navigate("/projects")}
            >
              See What I’ve Built →
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Me ⚡
            </button>
          </div>

          {/* SOCIALS */}
          <div className="hero-socials">
            <a href="https://github.com/DevDemola" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/omiyejuwon-ademola-b9bb91310" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;