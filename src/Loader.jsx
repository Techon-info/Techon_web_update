import React, { useEffect, useState } from 'react';
import styles from '../src/styles/Loader.module.css';
import logo from '../src/assets/9.7-1.png'; // Your company logo

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loader_wrapper}>
      {/* Background Animation */}
      <div className={styles.loader_background}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      {/* Main Loader Content */}
      <div className={styles.loader_content}>
        {/* Logo */}
        <div className={styles.logo_container}>
          <img src={logo} alt="Techon IT Solution" className={styles.logo} />
        </div>

        {/* Loading Animation - Choose one of these options */}
        
        {/* Option 1: Circular Spinner */}
      {/* Option 2: Animated Dots */}
<div className={styles.dots_loader}>
  <div className={styles.dot}></div>
  <div className={styles.dot}></div>
  <div className={styles.dot}></div>
</div>


        {/* Loading Text */}
        <div className={styles.loading_text}>
          <h2>Techon</h2>
          <p>Preparing your digital experience...</p>
        </div>

        {/* Progress Bar */}
        <div className={styles.progress_container}>
          <div className={styles.progress_bar}>
            <div 
              className={styles.progress_fill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progress_text}>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
