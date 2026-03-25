import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to sections
  const handleScroll = (path) => {
    setIsOpen(false); // close mobile menu
    if (path.startsWith("#")) {
      const section = document.querySelector(path);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path); // navigate to page
    }
  };

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleScroll("/")}>
            <img src="./LOGO.png" alt="Brand Logo" className="logo-img" />
          </div>

          {/* Nav Links */}
          <nav className={`nav-links ${isOpen ? "active" : ""}`}>
            <a onClick={() => handleScroll("/")}>Home</a>
            <a onClick={() => handleScroll("/about")}>About Me</a>
            <a onClick={() => handleScroll("/projects")}>Portfolio</a>
            {/* <a onClick={() => handleScroll("/services")}>Services</a> */}
            <a onClick={() => handleScroll("/contact")}>Contact</a>

            {/* Mobile CTA Button */}
            {isMobile && (
              <button
                className="mobile-cta-btn"
                onClick={() => handleScroll("/contact")}
              >
                Start a Project <FiArrowRight className="arrow-icon" />
              </button>
            )}
          </nav>

          {/* Desktop CTA Button */}
          {!isMobile && (
            <button
              className="cta-btn"
              onClick={() => handleScroll("/contact")}
            >
              Start a Project <IoArrowForwardCircle className="arrow-icon" />
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
