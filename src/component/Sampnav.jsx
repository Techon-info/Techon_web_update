import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sampnav.module.css";
import logo from "../assets/9.7-1.png";
import "boxicons/css/boxicons.min.css";

function Sampnav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Links */}
      <div className={`${styles.nav_links} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>Our Services</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.contact_btn} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Footer section inside mobile menu */}
        <div className={styles.nav_footer}>
          <div className={styles.social_links}>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>
          <p>© 2025 Techon IT Solution</p>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className={styles.contact_us}>
        <a
          href="https://wa.me/918807712204" // replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>

      {/* Hamburger */}
      <div className={styles.hamburgur} onClick={toggleMenu}>
        <i className={isOpen ? "bx bx-x" : "bx bx-menu-alt-right"}></i>
      </div>
    </nav>
  );
}

export default Sampnav;
