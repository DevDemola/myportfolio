import "./Footer.css";
import { FaHeart } from "react-icons/fa";
import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#" className="social-icon" aria-label="Email">
          <FiMail />
        </a>
        <a href="#" className="social-icon" aria-label="Twitter">
          <FiTwitter />
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
      </div>
      <div className="copyright">
        Made with <FaHeart className="heart" /> by <span>Omiyejuwon Ademola</span>
      </div>
    </footer>
  );
};

export default Footer;