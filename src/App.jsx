import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loader from './components/common/Loader/Loader';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Products from './pages/Products/Products';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Contact from './pages/Contact/Contact';

const MIN_LOADER_MS = 1500;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = () => window.setTimeout(() => setLoading(false), MIN_LOADER_MS);
    if (document.readyState === 'complete') {
      const t = done();
      return () => window.clearTimeout(t);
    }
    let t;
    const onLoad = () => { t = done(); };
    window.addEventListener('load', onLoad);
    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(t);
    };
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        {/* Old URL kept working */}
        <Route path="/service" element={<Navigate to="/services" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
