import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import styles from '../styles/Home.module.css';
import homeImage from '../assets/Good_team_bro.svg';
import Footer from '../component/Footer';

const Home_page = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <main className={styles.Home_page}>
        <section className={styles.Home_content}>
          <h1 className={styles.heading}>
            Looking for a team that just{' '}
            <span className={styles.headingAccent}>gets your brand?</span>
          </h1>

          <p className={styles.paragraph}>
            At <span className={styles.highlight}>Techon IT Solution</span>, we build,
            design, and deliver digital excellence — tailored just for you.
          </p>

          <div className={styles.cta_group}>
            <Link to="/contact" className={styles.cta} aria-label="Get started with Techon">
              Get Started
            </Link>

            <Link to="/portfolio" className={styles.secondary} aria-label="View portfolio">
              View Portfolio
            </Link>
          </div>
        </section>

        <figure className={styles.Home_img} aria-hidden="true">
          <img src={homeImage} alt="Illustration: Tech & design services" loading="lazy" />
        </figure>
      </main>


      {/* Services Overview Section */}
      <section className={styles.services_overview}>
        <div className={styles.services_content}>
          <div className={styles.section_header}>
            <h2 className={styles.section_heading}>
              What We <span className={styles.gradient_text}>Offer</span>
            </h2>
            <p className={styles.section_description}>
              Comprehensive digital solutions to transform your business
            </p>
          </div>

          <div className={styles.services_grid}>
            <div className={styles.service_item}>
              <div className={styles.service_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>Modern, responsive websites built with cutting-edge technologies</p>
            </div>

            <div className={styles.service_item}>
              <div className={styles.service_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>App Development</h3>
              <p>Native and cross-platform apps for iOS and Android</p>
            </div>

            <div className={styles.service_item}>
              <div className={styles.service_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Graphic Design</h3>
              <p>Creative UI/UX design, logos, and brand identities</p>
            </div>

            <div className={styles.service_item}>
              <div className={styles.service_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3>Cybersecurity</h3>
              <p>Comprehensive security assessments and consulting</p>
            </div>
          </div>

          <div className={styles.services_cta}>
            <Link to="/services" className={styles.view_all_btn}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats_section}>
        <div className={styles.stats_container}>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>20+</div>
            <div className={styles.stat_label}>Projects Delivered</div>
          </div>

          <div className={styles.stat_card}>
            <div className={styles.stat_number}>10+</div>
            <div className={styles.stat_label}>Happy Clients</div>
          </div>

          <div className={styles.stat_card}>
            <div className={styles.stat_number}>1+</div>
            <div className={styles.stat_label}>Years Experience</div>
          </div>

          <div className={styles.stat_card}>
            <div className={styles.stat_number}>24/7</div>
            <div className={styles.stat_label}>Support Available</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.why_choose_section}>
        <div className={styles.why_choose_content}>
          <div className={styles.section_header}>
            <h2 className={styles.section_heading}>
              Why Choose <span className={styles.gradient_text}>Techon IT Solution?</span>
            </h2>
            <p className={styles.section_description}>
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className={styles.features_grid}>
            <div className={styles.feature_card}>
              <div className={styles.feature_number}>01</div>
              <h3>Expert Team</h3>
              <p>
                Skilled professionals with years of experience in web development, 
                design, and cybersecurity
              </p>
            </div>

            <div className={styles.feature_card}>
              <div className={styles.feature_number}>02</div>
              <h3>Client-Focused</h3>
              <p>
                We prioritize your needs and work collaboratively to achieve 
                your business goals
              </p>
            </div>

            <div className={styles.feature_card}>
              <div className={styles.feature_number}>03</div>
              <h3>Quality Assured</h3>
              <p>
                Rigorous testing and quality checks ensure flawless delivery 
                of every project
              </p>
            </div>

            <div className={styles.feature_card}>
              <div className={styles.feature_number}>04</div>
              <h3>Timely Delivery</h3>
              <p>
                We respect deadlines and deliver projects on time without 
                compromising quality
              </p>
            </div>

            <div className={styles.feature_card}>
              <div className={styles.feature_number}>05</div>
              <h3>Ongoing Support</h3>
              <p>
                24/7 support and maintenance to keep your digital assets 
                running smoothly
              </p>
            </div>

            <div className={styles.feature_card}>
              <div className={styles.feature_number}>06</div>
              <h3>Competitive Pricing</h3>
              <p>
                Transparent pricing with no hidden costs, offering excellent 
                value for your investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.final_cta_section}>
        <div className={styles.final_cta_content}>
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>
            Let's discuss your project and create something amazing together
          </p>
          <div className={styles.final_cta_buttons}>
            <Link to="/contact" className={styles.cta_primary}>
              Start Your Project
            </Link>
            <Link to="/about" className={styles.cta_outline}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Home_page;
