import { useState } from "react";
import "./Navbar.css";
import { LuHouse, LuMousePointer2 } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoCodeSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="logo">
          <span className="name">Ademola Omiyejuwon :)</span>
          <span className="role">Software Engineer</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <NavLink to="/" end className="nav-item">
            <LuHouse className="nav-icon" />
            <span>Home</span>
          </NavLink>

          <NavLink to="/about" className="nav-item">
            <FiUser className="nav-icon" />
            <span>About</span>
          </NavLink>

          <NavLink to="/projects" className="nav-item">
            <IoCodeSharp className="nav-icon" />
            <span>Projects</span>
          </NavLink>

          <NavLink to="/contact" className="nav-cta">
            <span>Let’s Build</span>
            <LuMousePointer2 className="cta-icon" />
          </NavLink>
        </nav>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let’s Build
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default NavBar;
