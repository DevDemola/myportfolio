import React from "react";
import "./Header.css";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-brand">Dev-Demmy</div>

      <nav className="header-nav">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      <div className="header-icons">
        <a
          href="https://github.com/DevDemola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-placeholder">
            <SiGithub />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/ademola-omiyejuwon-b9bb91310"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-placeholder">
            <FaLinkedin />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
