/**
 * Services shown on /services and as individual pages at /services/<slug>.
 * Pure data (no imports) so vite.config.js can read it to build SEO pages and the sitemap.
 */
export const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    short:
      'Custom websites and web applications built with the latest technologies to meet your specific business needs.',
    features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized', 'Fast Performance'],
    seoTitle: 'Web Development Services | Techon IT Solution',
    seoDescription:
      'Custom, responsive and SEO-friendly websites and web applications for businesses, built by Techon IT Solution. See our work and get a free consultation.',
    intro:
      'We design and build fast, responsive websites and web applications that look great on every device and are ready to be found on Google.',
    offers: [
      { title: 'Business websites', text: 'Clear, professional websites that explain what you do and turn visitors into enquiries.' },
      { title: 'Web applications', text: 'Custom dashboards, portals and tools that fit the way your business works.' },
      { title: 'E-commerce and booking', text: 'Online stores and booking flows that make it easy for customers to buy from you.' },
      { title: 'SEO and speed', text: 'Clean structure, fast loading and search-friendly pages from day one.' },
    ],
    category: 'web-development',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short:
      'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    seoTitle: 'UI/UX Design Services | Techon IT Solution',
    seoDescription:
      'User-focused UI/UX design for websites and apps: research, wireframes, prototypes and usability testing from Techon IT Solution.',
    intro:
      'Good design makes a product easy to use. We research your users, map the journey and design interfaces that feel simple and look polished.',
    offers: [
      { title: 'User research', text: 'Understanding who your users are and what they need before any screen is drawn.' },
      { title: 'Wireframes and flows', text: 'Page layouts and user journeys that are agreed before development starts.' },
      { title: 'Interactive prototypes', text: 'Clickable previews so you can try the product before it is built.' },
      { title: 'Usability testing', text: 'Checking designs with real users and refining what does not work.' },
    ],
    category: 'ui-ux-design',
  },
  {
    slug: 'app-development',
    title: 'App Development',
    short: 'Developing user-centric mobile applications for both Android and iOS platforms.',
    features: ['Native Apps', 'Cross-platform', 'Scalable Solutions', 'User-friendly Interface'],
    seoTitle: 'Mobile App Development Services | Techon IT Solution',
    seoDescription:
      'Android and iOS mobile app development for businesses: native and cross-platform apps with a clean, user-friendly interface from Techon IT Solution.',
    intro:
      'We build mobile apps for Android and iOS that are easy to use, reliable and ready to grow with your business.',
    offers: [
      { title: 'Android and iOS apps', text: 'Apps for both platforms, built natively or cross-platform depending on your needs.' },
      { title: 'Business apps', text: 'Management, booking and customer apps designed around your daily workflow.' },
      { title: 'Clean interfaces', text: 'Simple screens and smooth navigation that users pick up quickly.' },
      { title: 'Launch support', text: 'Help with testing, store listing and release.' },
    ],
    category: 'app-development',
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    short:
      'Creating unique and memorable brand identities through professional logo design and branding solutions.',
    features: ['Brand Identity', 'Custom Designs', 'Unlimited Revisions', 'Vector Files'],
    seoTitle: 'Logo & Brand Identity Design | Techon IT Solution',
    seoDescription:
      'Custom logo design and brand identity for new and growing businesses, with vector files and revisions, from Techon IT Solution.',
    intro:
      'Your logo is the face of your brand. We create original logos and brand identities that are memorable and work everywhere you use them.',
    offers: [
      { title: 'Custom logo design', text: 'Original concepts created for your business, not templates.' },
      { title: 'Brand identity', text: 'Colours, typography and style guidelines so your brand looks consistent.' },
      { title: 'Print and social designs', text: 'Business cards, posters and social media graphics in your brand style.' },
      { title: 'Vector files', text: 'Final files ready for print, web and social media.' },
    ],
    category: 'logo-design',
  },
  {
    slug: 'cybersecurity-consultancy',
    title: 'Cybersecurity Consultancy',
    short:
      'Comprehensive security assessments and strategic guidance to protect your digital infrastructure from cyber threats.',
    features: ['Risk Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Management'],
    seoTitle: 'Cybersecurity Consultancy | Techon IT Solution',
    seoDescription:
      'Security assessments, audits and guidance to protect your website, apps and data from cyber threats, from Techon IT Solution.',
    intro:
      'We help businesses find and fix security weaknesses before attackers do, with clear reports and practical next steps.',
    offers: [
      { title: 'Risk assessment', text: 'Identifying what could go wrong and how serious it would be.' },
      { title: 'Penetration testing', text: 'Controlled testing of your website or application to find vulnerabilities.' },
      { title: 'Security audits', text: 'A structured review of your systems, access and practices.' },
      { title: 'Guidance and compliance', text: 'Practical recommendations to improve security and meet requirements.' },
    ],
    category: 'cybersecurity',
  },
  {
    slug: 'product-development',
    title: 'Product Development',
    short:
      'We turn your idea into a ready-to-use software product, from planning and design to launch and ongoing improvement, just like we built our own Techon FlowDesk.',
    features: ['Idea to MVP', 'Custom Business Software', 'Scalable Architecture', 'Launch & Ongoing Support'],
    seoTitle: 'Software Product Development | Techon IT Solution',
    seoDescription:
      'From idea to launch: custom software product development, MVPs and business software by the team that built Techon FlowDesk.',
    intro:
      'Have a software idea? We take it from concept to a working product: planning, design, development, launch and improvement. We use the same approach we used to build our own product, Techon FlowDesk.',
    offers: [
      { title: 'Idea to MVP', text: 'Turning your concept into a first working version you can test with real users.' },
      { title: 'Custom business software', text: 'Software built around your process, such as management, booking and billing tools.' },
      { title: 'Scalable foundations', text: 'A structure that can grow as your users and features grow.' },
      { title: 'Launch and support', text: 'Help releasing your product and improving it after launch.' },
    ],
    category: null,
    link: '/products',
    linkLabel: 'See our own product, Techon FlowDesk',
  },
];

export const processSteps = [
  { title: 'Discovery & Planning', text: 'We understand your goals, audience and requirements, then agree a clear plan.' },
  { title: 'Design & Development', text: 'We design and build your solution, sharing progress along the way.' },
  { title: 'Testing & Quality', text: 'We test across devices and scenarios so it works properly.' },
  { title: 'Launch & Support', text: 'We launch your project and stay available for improvements.' },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
