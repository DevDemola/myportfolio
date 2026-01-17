import "./Hero.css";
// import profileImg from "../assets/profile.jpg"; // replace with your image path

const Hero = () => {
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
            Software Engineer & Tech Enthusiast<br />
            {/* <span>(Smart Contracts) Developer</span> */}
          </h2>

          <p>
            I create thoughtful, scalable software solutions and develop smart
            contracts for decentralized applications. Passionate about tech
            that empowers people and solves real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              See What I’ve Built →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me ⚡
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
