import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from '../component/Navbar';
import styles from '../styles/Contact.module.css';
import Footer from '../component/Footer';

const Contact_page = () => {
  const form = useRef();
  
  // State management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC;
  // Initialize EmailJS
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init(publicKey);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS sendForm method
      // Replace these with your actual EmailJS credentials:
      // 'YOUR_SERVICE_ID' - Your EmailJS service ID
      // 'YOUR_TEMPLATE_ID' - Your EmailJS template ID
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log('Email sent successfully:', result.text);
      
      // Success state
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Error state
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      
      <main className={styles.contact_page}>
        {/* Hero Section */}
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <h1 className={styles.main_heading}>Contact</h1>
            <p className={styles.subtitle}>
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </section>


        {/* Contact Form Section */}
        <section className={styles.form_section}>
          <div className={styles.form_container}>
            <div className={styles.form_header}>
              <h2 className={styles.section_heading}>
                Shoot us a <span className={styles.gradient_text}>message</span>
              </h2>
              <p className={styles.form_subtext}>
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className={styles.contact_form}>
              <div className={styles.form_row}>
                <div className={styles.form_group}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className={styles.form_group}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className={styles.form_row}>
                <div className={styles.form_group}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className={styles.form_group}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
              </div>

              <div className={styles.form_group}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>
              <br />
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`${styles.status_message} ${styles[submitStatus.type]}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submit_btn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className={styles.info_section}>
          <div className={styles.info_container}>
            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Address, Location</h3>
              <p>Tiruchengode</p>
            </div>

            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Working Hours</h3>
              <p>9 AM - 8 PM</p>
            </div>

            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Phone Number</h3>
              <p>88077 12204</p>
            </div>

            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Email Address</h3>
              <p>techonitsolution@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Map Section (Optional)
        <section className={styles.map_section}>
          <div className={styles.map_container}>
            <iframe
              title="Techon IT Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125384.27347778183!2d78.59761797410156!3d10.790478800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5e0f1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section> */}
      </main>

      <Footer/>
    </>
  );
};

export default Contact_page;
