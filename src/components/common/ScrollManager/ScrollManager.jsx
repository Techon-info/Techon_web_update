import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ScrollManager.module.css';

/**
 * Selectors that receive the scroll-reveal animation automatically,
 * so individual pages don't need any extra markup.
 */
const REVEAL_SELECTOR = [
  'section > *',
  'main > *:not(section)',
  'footer',
  '[data-reveal]',
].join(',');

const GRID_SELECTOR = '[class*="grid"] > *, [class*="cards"] > *, [class*="steps"] > *';
const MAX_STAGGER_STEPS = 6;
const STAGGER_MS = 90;
const DURATION_MS = 750;

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * 1. Resets scroll to the top on every route change (SPA "scroll restoration").
 * 2. Scrolls to #hash targets when a link has one.
 * 3. Reveals sections/cards as they enter the viewport (IntersectionObserver).
 * 4. Renders a thin scroll-progress bar.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  // Take over from the browser's own restoration, which fights SPA navigation.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top (or hash target) BEFORE paint, with no smooth animation.
  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // Scroll-reveal animations, re-armed for every page.
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add('rv-in');
          // Remove helper classes afterwards so the element's own hover styles work again.
          const delay = parseInt(el.style.getPropertyValue('--rv-delay'), 10) || 0;
          timers.push(
            window.setTimeout(() => {
              el.classList.remove('rv', 'rv-in');
              el.style.removeProperty('--rv-delay');
            }, DURATION_MS + delay + 80)
          );
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const raf = window.requestAnimationFrame(() => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        const position = window.getComputedStyle(el).position;
        if (position === 'absolute' || position === 'fixed') return;
        if (el.matches(GRID_SELECTOR)) {
          const index = Array.prototype.indexOf.call(el.parentElement.children, el);
          el.style.setProperty('--rv-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
        }
        el.classList.add('rv');
        observer.observe(el);
      });
    });

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      timers.forEach(window.clearTimeout);
      document.querySelectorAll('.rv, .rv-in').forEach((el) => {
        el.classList.remove('rv', 'rv-in');
        el.style.removeProperty('--rv-delay');
      });
    };
  }, [pathname]);

  // Scroll progress bar.
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return undefined;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return <div id="scroll-progress" className={styles.progress} aria-hidden="true" />;
};

export default ScrollManager;
