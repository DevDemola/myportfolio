import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT – IMAGE */}
        <div className="hero-image">
          <div className="image-ring">
            <img src="me.png" alt="demola" />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="hero-content">
          <h1>Ademola Omiyejuwon</h1>

          <h2>
            Software Engineer & Tech Enthusiast
          </h2>

          <p>
            I create thoughtful, scalable software solutions and develop smart
            contracts for decentralized applications.
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
