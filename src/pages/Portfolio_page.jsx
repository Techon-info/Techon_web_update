import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import styles from '../styles/Portfolio.module.css';
import { Link } from "react-router-dom";

// Import placeholder images (replace with your actual project images)
import defaultProject from '../assets/default.png';
import lazeno from '../assets/portfolio/Artboard_1.jpg';
import sv_logo from '../assets/portfolio/sv_logo.jpg';
import app_dev from '../assets/portfolio/App_1.jpg';
import kvg from '../assets/portfolio/Artboard 7.jpg';
import ef from '../assets/portfolio/Artboard 6.jpg';
import jp from '../assets/portfolio/Artboard 9.jpg';
import ck from '../assets/portfolio/Artboard 5.jpg';
import tf from '../assets/portfolio/Artboard 4.jpg'

const Portfolio_page = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Portfolio projects data - Add your real projects here
  const projects = [
    // Web Development Projects
    {
      id: 1,
      title: 'E-Commerce Website',
      company: 'Lazeno Consultancy Service',
      category: 'Web Development',
      image: lazeno, // Replace with actual image
      description: 'Modern e-commerce platform with seamless shopping experience',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      websiteLink: 'https://lazenoconsultancyservice.com', // Live website link
      developedBy: 'techon'
    },

    // App Development Projects
    {
      id: 2,
      title: 'Doctor patient Mnagemnet',
      company:'MDE',
      category: 'App Development',
      image: app_dev,
      description: 'Mobile fitness app with workout tracking and meal planning',
      technologies: ['React Native', 'Redux', 'Firebase'],
      websiteLink: null, // No website for mobile app
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.fitlife',
      appStoreLink: 'https://apps.apple.com/app/fitlife/id123456',
      developedBy: 'techon'
    },

    // Logo Design Projects
    {
      id: 3,
      title: 'Tech Startup Branding',
      company: 'SV Groups',
      category: 'Logo Design',
      image: sv_logo,
      description: 'Complete brand identity including logo and style guide',
      technologies: ['Illustrator', 'Photoshop', 'Brand Strategy'],
      websiteLink: null,
      developedBy: 'techon'
    },
       {
      id: 4,
      title: 'Tech Startup Branding',
      company: 'Jocker Photography',
      category: 'Logo Design',
      image: jp,
      description: 'Complete brand identity including logo and style guide',
      technologies: ['Illustrator', 'Photoshop', 'Brand Strategy'],
      websiteLink: null,
      developedBy: 'techon'
    },

       {
      id: 5,
      title: 'Tech Startup Branding',
      company: 'Coffe Kasakudhiya',
      category: 'Logo Design',
      image: ck,
      description: 'Complete brand identity including logo and style guide',
      technologies: ['Illustrator', 'Photoshop', 'Brand Strategy'],
      websiteLink: null,
      developedBy: 'techon'
    },

    {
      id: 8,
      title: 'Restaurant Logo & Menu',
      company: 'Sri Palani Aandavar Real Estate',
      category: 'Graphic Design',
      image: kvg,
      description: 'Logo design with complementary menu and business cards',
      technologies: ['Illustrator', 'InDesign', 'Typography'],
      websiteLink: 'https://example-bellacucina.com',
      developedBy: 'techon'
    },

    // Graphic Design Projects
    {
      id: 9,
      title: 'Social Media Campaign',
      company: 'Ego Friendly',
      category: 'Graphic Design',
      image: ef,
      description: 'Complete social media graphics and marketing materials',
      technologies: ['Photoshop', 'Illustrator', 'Canva'],
      websiteLink: null,
      developedBy: 'techon'
    },

     {
      id: 10,
      title: 'Bag Desining',
      company: 'Top Fashion',
      category: 'Graphic Design',
      image: tf,
      description: 'Complete social media graphics and marketing materials',
      technologies: ['Photoshop', 'Illustrator', 'Canva'],
      websiteLink: null,
      developedBy: 'techon'
    }
  ];
  

  // Filter categories
  const categories = [
    'All',
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Logo Design',
    'Graphic Design',
    'Cybersecurity'
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Handle project card click
  const handleProjectClick = (project) => {
    if (project.websiteLink) {
      window.open(project.websiteLink, '_blank', 'noopener,noreferrer');
    } else if (project.playStoreLink) {
      window.open(project.playStoreLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <Navbar />
      
      <main className={styles.portfolio_page}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.main_heading}>Our Portfolio</h1>
            <p className={styles.subtitle}>
              Showcase of our successful projects across different domains
            </p>
          </div>
        </section>

        {/* Portfolio Content */}
        <section className={styles.portfolio_content}>
          <div className={styles.portfolio_container}>
            {/* Filter Tabs */}
            <div className={styles.filter_section}>
              <div className={styles.filter_tabs}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filter_btn} ${
                      activeFilter === category ? styles.active : ''
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Count */}
            <div className={styles.results_info}>
              <p>
                Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className={styles.projects_grid}>
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className={styles.project_card}
                    onClick={() => handleProjectClick(project)}
                    style={{ cursor: project.websiteLink || project.playStoreLink ? 'pointer' : 'default' }}
                  >
                    {/* Project Image */}
                    <div className={styles.card_image}>
                      <img src={project.image} alt={project.title} loading="lazy" />
                      
                      {/* Category Badge */}
                      {/* <div className={styles.category_badge}>
                        {project.category}
                      </div> */}

                      {/* Hover Overlay */}
                      {(project.websiteLink || project.playStoreLink) && (
                        <div className={styles.hover_overlay}>
                          <div className={styles.overlay_content}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                            </svg>
                            <span>View {project.websiteLink ? 'Website' : 'App'}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className={styles.card_content}>
                      <div className={styles.card_header}>
                        <div>
                          <p className={styles.project_type}>
                            {project.category === 'Web Development' ? 'Website for' : 
                             project.category === 'App Development' ? 'Mobile App for' :
                             project.category === 'Logo Design' ? 'Logo Design for' :
                             project.category === 'UI/UX Design' ? 'UI/UX Design for' :
                             project.category === 'Graphic Design' ? 'Graphics for' :
                             'Project for'}
                          </p>
                          <h3 className={styles.company_name}>{project.company}</h3>
                        </div>
                      </div>

                      <p className={styles.developed_by}>
                        developed by {project.developedBy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.no_projects}>
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.cta_section}>
          <div className={styles.cta_content}>
            <h2>Have a Project in Mind?</h2>
            <p>
              Let's collaborate and create something amazing together
            </p>
            <Link to="/contact" className={styles.cta_btn}>
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio_page;


