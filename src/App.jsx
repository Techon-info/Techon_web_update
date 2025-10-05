import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Services_page from "./pages/Services_page";
import About_page from "./pages/About_page";
import Portfolio_page from "./pages/Portfolio_page";
import Contact_page from "./pages/Contact_page";
import Master_page from "./pages/Master_page";
import Loader from "./Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if page is fully loaded
    const handleLoad = () => {
      // Add a minimum display time for better UX
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    // If document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Master_page />} />
        <Route path="/Service" element={<Services_page />} />
        <Route path="/About" element={<About_page />} />
        <Route path="/Portfolio" element={<Portfolio_page />} />
        <Route path="/Contact" element={<Contact_page />} />
        
      </Routes>
    </>
  );
}

export default App;
