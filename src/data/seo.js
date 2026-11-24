/**
 * Single source of truth for SEO metadata.
 * Used by:
 *  - src/components/common/Seo (updates <head> on client-side navigation)
 *  - vite.config.js (writes per-page static HTML + sitemap.xml at build time)
 * Keep this file free of browser/React imports so Node can load it.
 */
import { services } from './services.js';

export const SITE_URL = 'https://www.techonitsolution.in';
export const SITE_NAME = 'Techon IT Solution';
export const DEFAULT_IMAGE = `${SITE_URL}/150.jpg`;

export const pages = {
  '/': {
    title: 'Techon IT Solution | Web, App & Software Development',
    description:
      'Techon IT Solution builds websites, mobile apps, UI/UX and brand designs, and software products like Techon FlowDesk. Get a free consultation today.',
    heading: 'Web, App & Software Development Company',
    summary:
      'We build websites, mobile apps, UI/UX design, logos and brand identities, cybersecurity consulting and our own software product, Techon FlowDesk.',
    priority: '1.0',
  },
  '/about': {
    title: 'About Us | Techon IT Solution',
    description:
      'Meet Techon IT Solution, the creative and technical team behind websites, apps and software products. Learn who we are and how we work with clients.',
    heading: 'About Techon IT Solution',
    summary: 'Your trusted partner in digital transformation: web and app development, UI/UX design and logo design.',
    priority: '0.8',
  },
  '/services': {
    title: 'Our Services | Web, App, UI/UX & Product Development',
    description:
      'Web development, app development, UI/UX design, logo design, cybersecurity consultancy and custom product development from Techon IT Solution.',
    heading: 'Our Services',
    summary:
      'Web development, UI/UX design, app development, logo design, cybersecurity consultancy and product development.',
    priority: '0.9',
  },
  '/products': {
    title: 'Techon FlowDesk | Business Management for Studios & Events',
    description:
      'Techon FlowDesk manages enquiries, clients, quotations, events, bookings, invoices and expenses for studios and event businesses in one workspace.',
    heading: 'Techon FlowDesk',
    summary:
      'Business management software for photography studios, event managers, wedding planners and decorators.',
    priority: '0.9',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Techon FlowDesk',
      url: 'https://techonflowdesk.com',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'FlowDesk brings enquiries, clients, quotations, events, bookings, invoices and expenses into one workspace, branded with your logo and colours.',
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    },
  },
  '/portfolio': {
    title: 'Portfolio | Websites, Apps & Brand Design Projects',
    description:
      'Explore projects by Techon IT Solution: websites like Harish Academy and Lazeno Consultancy, mobile apps, logo designs and graphic design work.',
    heading: 'Our Portfolio',
    summary: 'Websites, apps, logo and graphic design projects delivered for our clients.',
    priority: '0.8',
  },
  '/contact': {
    title: 'Contact Us | Techon IT Solution',
    description:
      'Contact Techon IT Solution for a website, app, design or software project. Call 88077 12204, WhatsApp us or send a message for a quick reply.',
    heading: 'Contact Techon IT Solution',
    summary: 'Call 88077 12204, WhatsApp or email techonitsolution@gmail.com. Working hours 9 AM to 8 PM.',
    priority: '0.7',
  },
};

// One indexable page per service, so each can appear on its own in search results.
for (const service of services) {
  pages[`/services/${service.slug}`] = {
    title: service.seoTitle,
    description: service.seoDescription,
    heading: service.title,
    summary: service.intro,
    priority: '0.8',
    parent: '/services',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.seoDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    },
  };
}

/** BreadcrumbList structured data (Home > Services > Service) helps Google understand site structure. */
export const breadcrumbFor = (route) => {
  if (route === '/') return null;
  const trail = [{ name: 'Home', path: '/' }];
  const page = pages[route];
  if (page.parent) trail.push({ name: pages[page.parent].heading, path: page.parent });
  trail.push({ name: page.heading, path: route });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '/' : item.path}`,
    })),
  };
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE,
      email: 'techonitsolution@gmail.com',
      telephone: '+91-88077-12204',
      sameAs: [
        'https://www.instagram.com/mr_techon',
        'https://www.linkedin.com/company/techonitsolution',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

/** Normalise a pathname to a key of `pages` (case-insensitive, no trailing slash). */
export const pageKeyFor = (pathname) => {
  const clean = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  return pages[clean] ? clean : null;
};
