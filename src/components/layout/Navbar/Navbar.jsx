import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from "../../../assets/ggg.png";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  // Check if link is active
  const isActiveLink = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.toLowerCase().startsWith(path);

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
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActiveLink('/about') ? styles.active_link : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/products" 
                className={isActiveLink('/products') ? styles.active_link : ''}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={isActiveLink('/portfolio') ? styles.active_link : ''}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            
            <li>
              <Link 
                to="/services" 
                className={isActiveLink('/services') ? styles.active_link : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={styles.contact_btn} 
                onClick={closeMenu}
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
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
