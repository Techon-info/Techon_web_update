import React from "react";
import Navbar from "../component/Navbar";
import styles from "../styles/About.module.css";
import aboutImage from "../assets/about.svg"; // Replace with your image
import Footer from "../component/Footer";

const About_page = () => {
  return (
    <>
      <Navbar />

      <main className={styles.about_page}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.main_heading}>Who we are?</h1>
            <p className={styles.subtitle}>
              Your trusted partner in digital transformation
            </p>
          </div>
        </section>

        {/* Main About Section */}
        <section className={styles.main_about}>
          <div className={styles.about_container}>
            <div className={styles.about_image}>
              <img
                src={aboutImage}
                alt="Techon IT Solutions Team Collaboration"
                loading="lazy"
              />
            </div>

            <div className={styles.about_content}>
              <h2 className={styles.section_heading}>
                Driven by Ideas,{" "}
                <span className={styles.gradient_text}>
                  Designed for Impact
                </span>
              </h2>

              <p className={styles.description}>
                At <strong>Techon IT Solutions</strong>, we're not just a tech
                company. We're your creative and strategic partners.
                Specializing in web and app development, UI/UX design, and logo
                design, we help transform your vision into digital excellence.
              </p>
            </div>
          </div>
        </section>


   {/* Services Grid Section */}
<section className={styles.services_section}>
  <div className={styles.section_header}>
    <h2 className={styles.section_heading}>What We Do</h2>
    <p className={styles.section_subtext}>
      Comprehensive digital solutions tailored to your needs
    </p>
  </div>

  <div className={styles.services_grid}>
    {/* Web Development */}
    <div className={styles.service_card}>
      <div className={styles.service_icon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke="currentColor" strokeWidth="2"/>
          <polyline points="7.5 19.79 7.5 14.6 3 12" stroke="currentColor" strokeWidth="2"/>
          <polyline points="21 12 16.5 14.6 16.5 19.79" stroke="currentColor" strokeWidth="2"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      <h3>Web Development</h3>
      <p>
        Custom websites built with modern technologies, responsive design, 
        and optimized performance for seamless user experiences.
      </p>
    </div>

    {/* App Development */}
    <div className={styles.service_card}>
      <div className={styles.service_icon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h3>App Development</h3>
      <p>
        Native and cross-platform mobile applications that engage users 
        with intuitive interfaces and powerful functionality.
      </p>
    </div>

    {/* Graphic Design - Combined UI/UX and Logo & Branding */}
    <div className={styles.service_card}>
<div className={styles.service_icon}>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2"/>
    <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
  </svg>
</div>


      <h3>Graphic Design</h3>
      <p>
        Comprehensive visual solutions including UI/UX design for digital products, 
        logo design, brand identity, and creative marketing materials that bring 
        your brand vision to life.
      </p>
    </div>

    {/* Cybersecurity Consultancy */}
    <div className={styles.service_card}>
      <div className={styles.service_icon}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
          <path d="M12 17v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h3>Cybersecurity Consultancy</h3>
      <p>
        Expert security assessments, vulnerability testing, penetration testing, 
        and strategic guidance to protect your digital infrastructure from 
        evolving cyber threats.
      </p>
    </div>
  </div>
</section>



        {/* Values Section */}
        <section className={styles.values_section}>
          <div className={styles.section_header}>
            <h2 className={styles.section_heading}>Our Core Values</h2>
            <p className={styles.section_subtext}>
              The principles that guide everything we do
            </p>
          </div>

          <div className={styles.values_grid}>
            <div className={styles.value_item}>
              <div className={styles.value_number}>01</div>
              <h3>Innovation First</h3>
              <p>
                We stay ahead of technology trends to deliver cutting-edge
                solutions that give you a competitive advantage.
              </p>
            </div>

            <div className={styles.value_item}>
              <div className={styles.value_number}>02</div>
              <h3>Quality Driven</h3>
              <p>
                Every project undergoes rigorous testing and refinement to
                ensure it meets the highest standards of excellence.
              </p>
            </div>

            <div className={styles.value_item}>
              <div className={styles.value_number}>03</div>
              <h3>Client Partnership</h3>
              <p>
                We work collaboratively with clients, treating your success as
                our own and building lasting relationships.
              </p>
            </div>

            <div className={styles.value_item}>
              <div className={styles.value_number}>04</div>
              <h3>User-Centered</h3>
              <p>
                Every design decision prioritizes the end-user experience,
                ensuring intuitive and engaging digital products.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_content}>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let's collaborate to bring your vision to life with innovative
              solutions that drive real results.
            </p>
            <div className={styles.cta_buttons}>
              <a href="/contact" className={styles.cta_primary}>
                Get Started
              </a>
              <a href="/portfolio" className={styles.cta_secondary}>
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default About_page;
