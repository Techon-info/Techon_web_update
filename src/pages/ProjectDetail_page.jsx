import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import styles from '../styles/ProjectDetail.module.css';

// Import project images
import defaultProject from '../assets/default.png';

const ProjectDetail_page = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All projects data (same as Portfolio_page)
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      company: 'Fashion Store',
      category: 'Web Development',
      image: defaultProject,
      galleryImages: [defaultProject, defaultProject, defaultProject], // Add multiple images
      description: 'Modern e-commerce platform with seamless shopping experience',
      fullDescription: 'A comprehensive e-commerce solution built for a fashion retail client. The platform features advanced product filtering, secure payment gateway integration, real-time inventory management, and a responsive design that works flawlessly across all devices.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express.js'],
      websiteLink: 'https://www.lazenoconsultancyservice.com/',
      developedBy: 'techon',
      duration: '3 months',
      client: 'Fashion Store Ltd.',
      challenges: [
        'Creating a scalable architecture to handle high traffic',
        'Implementing secure payment processing',
        'Building a user-friendly admin dashboard'
      ],
      solutions: [
        'Microservices architecture for scalability',
        'Stripe integration with PCI compliance',
        'Custom CMS with intuitive UI'
      ],
      results: [
        '40% increase in conversion rate',
        '60% faster page load times',
        '99.9% uptime achieved'
      ]
    },
    // Logo Design Projects
    {
      id: 8,
      title: 'Tech Startup Branding',
      company: 'InnovateTech',
      category: 'Logo Design',
      image: defaultProject,
      galleryImages: [
        defaultProject, // Main logo
        defaultProject, // Logo variations
        defaultProject, // Business cards
        defaultProject, // Brand colors
        defaultProject  // Typography
      ],
      description: 'Complete brand identity including logo and style guide',
      fullDescription: 'A comprehensive branding project for a tech startup, including logo design, color palette, typography, and brand guidelines. The design reflects innovation, trust, and modern technology.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
      websiteLink: null,
      developedBy: 'techon',
      duration: '6 weeks',
      client: 'InnovateTech Inc.',
      challenges: [
        'Creating a unique identity in a saturated tech market',
        'Balancing modern aesthetics with professional credibility',
        'Ensuring scalability across all media'
      ],
      solutions: [
        'Minimalist design with bold typography',
        'Versatile logo that works in any size',
        'Comprehensive brand guideline document'
      ],
      results: [
        'Increased brand recognition by 70%',
        'Positive feedback from 95% of stakeholders',
        'Successfully used across 10+ marketing channels'
      ],
      colorPalette: ['#6a0dad', '#7e57c2', '#b794f6', '#1d0d2a'],
      fonts: ['Poppins', 'Inter']
    },
    // Graphic Design Projects
    {
      id: 10,
      title: 'Social Media Campaign',
      company: 'Fashion Brand',
      category: 'Graphic Design',
      image: defaultProject,
      galleryImages: [
        defaultProject, // Instagram posts
        defaultProject, // Facebook banners
        defaultProject, // Story templates
        defaultProject, // Ad creatives
        defaultProject, // Email headers
        defaultProject  // Product mockups
      ],
      description: 'Complete social media graphics and marketing materials',
      fullDescription: 'A comprehensive social media campaign design for a fashion brand, including Instagram posts, Facebook banners, story templates, ad creatives, and email marketing materials. The design system maintains brand consistency across all platforms.',
      technologies: ['Photoshop', 'Illustrator', 'Canva', 'After Effects'],
      websiteLink: null,
      developedBy: 'techon',
      duration: '2 months',
      client: 'Fashion Brand Co.',
      challenges: [
        'Creating cohesive designs for multiple platforms',
        'Maintaining brand identity across different formats',
        'Optimizing designs for engagement'
      ],
      solutions: [
        'Developed a flexible design system',
        'Created reusable templates',
        'A/B tested designs for best performance'
      ],
      results: [
        '150% increase in engagement rate',
        '80% growth in follower count',
        '3x more click-throughs on ads'
      ],
      platforms: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn']
    }
    // Add more projects...
  ];

  // Find the specific project
  const project = allProjects.find(p => p.id === parseInt(id));

  // Redirect if project not found
  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.galleryImages.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Navbar />
      
      <main className={styles.project_detail_page}>
        {/* Breadcrumb */}
        <section className={styles.breadcrumb}>
          <div className={styles.container}>
            <Link to="/">Home</Link>
            <span className={styles.separator}>/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{project.company}</span>
          </div>
        </section>

        

        {/* Image Gallery */}
        <section className={styles.gallery_section}>
          <div className={styles.container}>
            {/* Main Image Viewer */}
            <div className={styles.main_image_container}>
              <button 
                className={styles.nav_btn_prev} 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <i className="bx bx-chevron-left"></i>
              </button>
              
              <div className={styles.main_image}>
                <img 
                  src={project.galleryImages[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  loading="lazy"
                />
              </div>

              <button 
                className={styles.nav_btn_next} 
                onClick={nextImage}
                aria-label="Next image"
              >
                <i className="bx bx-chevron-right"></i>
              </button>

              {/* Image Counter */}
              <div className={styles.image_counter}>
                {currentImageIndex + 1} / {project.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className={styles.thumbnail_gallery}>
              {project.galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className={`${styles.thumbnail} ${
                    index === currentImageIndex ? styles.active : ''
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className={styles.cta_section}>
          <div className={styles.container}>
            <h2>Interested in Similar Work?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
            <div className={styles.cta_buttons}>
              <Link to="/contact" className={styles.cta_primary}>
                Start Your Project
              </Link>
              <Link to="/portfolio" className={styles.cta_secondary}>
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail_page;
