import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import styles from '../styles/Services.module.css';

// Import your service images
import webDevImg from '../assets/web.png';
import appDevImg from '../assets/app.svg';
import graphicImg from '../assets/graphic.svg';
import cyberSecImg from '../assets/cybersec.svg';
import logoDesignImg from '../assets/logo.svg';
import Footer from '../component/Footer';

const Services_page = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies to meet your specific business needs.',
      image: webDevImg,
      link: '/portfolio?category=web-development',
      features: [
        'Responsive Design',
        'Modern Technologies',
        'SEO Optimized',
        'Fast Performance'
      ]
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
      image: graphicImg,
      link: '/portfolio?category=ui-ux-design',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing'
      ]
    },
    {
      id: 3,
      title: 'App Development',
      description: 'Developing user-centric mobile applications for both Android and iOS platforms.',
      image: appDevImg,
      link: '/portfolio?category=app-development',
      features: [
        'Native Apps',
        'Cross-platform',
        'Scalable Solutions',
        'User-friendly Interface'
      ]
    },
    {
      id: 4,
      title: 'Logo Design',
      description: 'Creating unique and memorable brand identities through professional logo design and branding solutions.',
      image: logoDesignImg,
      link: '/portfolio?category=logo-design',
      features: [
        'Brand Identity',
        'Custom Designs',
        'Unlimited Revisions',
        'Vector Files'
      ]
    },
    {
      id: 5,
      title: 'Cybersecurity Consultancy',
      description: 'Comprehensive security assessments and strategic guidance to protect your digital infrastructure from cyber threats.',
      image: cyberSecImg,
      link: '/portfolio?category=cybersecurity',
      features: [
        'Risk Assessment',
        'Penetration Testing',
        'Security Audits',
        'Compliance Management'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className={styles.services_page}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.main_heading}>Our Services</h1>
            <p className={styles.subtitle}>
              Comprehensive digital solutions to transform your business
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className={styles.services_content}>
          <div className={styles.services_container}>
            <div className={styles.section_intro}>
              <h2 className={styles.section_heading}>
                What We <span className={styles.gradient_text}>Offer</span>
              </h2>
              <p className={styles.intro_text}>
                From concept to execution, we provide end-to-end digital services 
                tailored to help your business thrive in the digital landscape.
              </p>
            </div>

            <div className={styles.services_grid}>
              {services.map((service) => (
                <div key={service.id} className={styles.service_card}>
                  <div className={styles.card_image}>
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  
                  <div className={styles.card_content}>
                    <h3 className={styles.card_title}>{service.title}</h3>
                    <p className={styles.card_description}>{service.description}</p>
                    
                    <ul className={styles.features_list}>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={service.link} className={styles.read_more_btn}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process_section}>
          <div className={styles.process_container}>
            <h2 className={styles.section_heading}>Our Process</h2>
            <p className={styles.section_subtext}>
              A streamlined approach to deliver exceptional results
            </p>

            <div className={styles.process_grid}>
              <div className={styles.process_step}>
                <div className={styles.step_number}>01</div>
                <h3>Discovery & Planning</h3>
                <p>
                  We begin by understanding your goals, target audience, and 
                  project requirements to create a strategic roadmap.
                </p>
              </div>

              <div className={styles.process_step}>
                <div className={styles.step_number}>02</div>
                <h3>Design & Development</h3>
                <p>
                  Our team brings your vision to life with creative designs 
                  and robust development practices.
                </p>
              </div>

              <div className={styles.process_step}>
                <div className={styles.step_number}>03</div>
                <h3>Testing & Quality Assurance</h3>
                <p>
                  Rigorous testing ensures your solution works flawlessly 
                  across all devices and platforms.
                </p>
              </div>

              <div className={styles.process_step}>
                <div className={styles.step_number}>04</div>
                <h3>Launch & Support</h3>
                <p>
                  We launch your project and provide ongoing support to ensure 
                  long-term success and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_content}>
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's collaborate to create something amazing together. 
              Get in touch with us today!
            </p>
            <div className={styles.cta_buttons}>
              <Link to="/contact" className={styles.cta_primary}>
                Get Started
              </Link>
              <Link to="/portfolio" className={styles.cta_secondary}>
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default Services_page;
