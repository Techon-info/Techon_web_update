import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pages, pageKeyFor, SITE_URL } from '../../../data/seo';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Keeps <title>, description, canonical and social tags in sync with the current route
 * during client-side navigation. (Crawlers get the same values from the static HTML
 * generated at build time by vite.config.js.)
 */
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = pageKeyFor(pathname);
    // Unknown / detail routes keep the home metadata but should not compete with real pages.
    const meta = pages[key || '/'];
    const url = `${SITE_URL}${key && key !== '/' ? key : '/'}`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', key ? 'index, follow' : 'noindex, follow');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [pathname]);

  return null;
};

export default Seo;
