import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from "../assets/9.7-1.png";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo_container}>
          <img src={logo} alt="Techon IT Solution Logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className={`${styles.nav_links} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={isActiveLink('/') ? styles.active_link : ''}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActiveLink('/about') ? styles.active_link : ''}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/portfolio" 
                className={isActiveLink('/portfolio') ? styles.active_link : ''}
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            
            <li>
              <Link 
                to="/Service" 
                className={isActiveLink('/services') ? styles.active_link : ''}
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={styles.contact_btn} 
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Footer */}
          <div className={styles.nav_footer}>
            <div className={styles.social_links}>
              <a 
                href="https://www.instagram.com/mr_techon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/techonitsolution" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a 
                href="https://wa.me/918807712204" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a 
                href="mailto:techonitsolution@gmail.com"
                aria-label="Email"
              >
                <i className="bx bx-envelope"></i>
              </a>
            </div>
            <p>© 2025 Techon IT Solution</p>
          </div>
        </div>

        {/* WhatsApp Floating Button (Desktop) */}
        <div className={styles.contact_us}>
          <a
            href="https://wa.me/918807712204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>

        {/* Hamburger Menu */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <i className={isOpen ? "bx bx-x" : "bx bx-menu-alt-right"}></i>
        </button>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
