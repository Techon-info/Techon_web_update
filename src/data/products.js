/**
 * Products shown on the Home page and /products.
 * Source of truth for the copy: https://techonflowdesk.com (keep in sync when the product site changes).
 * Prices are intentionally NOT listed: the product site only offers a "custom plan" request form.
 */
const BASE = 'https://techonflowdesk.com';

export const products = [
  {
    id: 'flowdesk',
    name: 'Techon FlowDesk',
    shortName: 'FlowDesk',
    status: 'Now in early access',
    audienceLine: 'Built for studios & event businesses',
    tagline: 'Keep every client, booking and payment in flow.',
    description:
      'FlowDesk brings enquiries, clients, quotations, events, bookings, invoices and expenses into one workspace, branded with your logo and colours.',
    links: {
      site: BASE,
      register: `${BASE}/register/`,
      login: `${BASE}/login/`,
      pricing: `${BASE}/pricing/`,
      customize: `${BASE}/customize/`,
      docs: `${BASE}/docs/`,
    },

    problem: {
      heading: 'One place, not five',
      text: 'Most studios and event businesses run on a mix of tools that never talk to each other. FlowDesk replaces them with one connected workspace.',
      pains: [
        { from: 'WhatsApp chats', issue: 'Enquiries get buried' },
        { from: 'Excel sheets', issue: 'Bookings clash' },
        { from: 'Manual PDF quotes', issue: 'Quotes are slow and unbranded' },
        { from: 'Paper diary', issue: 'Important dates are easy to miss' },
        { from: 'Receipt box', issue: 'Expenses never add up' },
      ],
    },

    features: [
      {
        label: 'Enquiries & clients',
        title: 'Never lose an enquiry',
        text: 'Capture enquiries from calls, Instagram, WhatsApp or referrals, track follow-ups, and convert them into clients in one click. You can also add clients directly.',
      },
      {
        label: 'Quotations',
        title: 'Quotes that look like your brand',
        text: 'Add services from your catalogue, apply discounts and GST, set payment milestones and choose from four templates. Issued quotes are locked as a record.',
      },
      {
        label: 'Events & calendar',
        title: 'One event, many sessions',
        text: 'Plan multi-session events, for example a wedding with mehndi, ceremony and reception, each with its own time and venue, all on one calendar.',
      },
      {
        label: 'Bookings',
        title: 'Bookings without the back-and-forth',
        text: 'Book existing clients or walk-ins, record advances and track every booking from Tentative to Completed.',
      },
      {
        label: 'Invoices & payments',
        title: 'Get paid, in full',
        text: 'GST-ready invoices, partial payments, outstanding balances and full payment history. Overpayments are blocked automatically.',
      },
      {
        label: 'Staff & expenses',
        title: 'Know your real profit',
        text: 'Keep staff records and log expenses by category and payment method, with monthly and category summaries to see what you really earn.',
      },
    ],

    steps: [
      { title: 'Enquiry', text: 'Captured from any channel.' },
      { title: 'Client', text: 'Converted in one click, or added directly.' },
      { title: 'Quotation', text: 'Branded, with GST, and issued.' },
      { title: 'Event', text: 'Sessions appear on your calendar.' },
      { title: 'Booking', text: 'Date and advance confirmed.' },
      { title: 'Invoice', text: 'GST calculated for you.' },
      { title: 'Payment', text: 'Partial or full, tracked.' },
      { title: 'Insights', text: 'Revenue against expenses.' },
    ],

    industries: {
      live: ['Photography & videography', 'Event management', 'Wedding planners', 'Decorators & rentals'],
      soon: ['Creative & marketing agencies', 'Design studios', 'Catering', 'Makeup, printing & invitations'],
    },

    customization: {
      heading: 'Make it yours',
      text: 'Add your logo and colours, choose light or dark mode and pick your sidebar style. Preview it live for free; your design carries over when you sign up.',
      points: ['Your logo and colours', 'Light & dark mode', 'Choice of sidebar style', 'Free live preview'],
    },

    plans: [
      {
        name: 'Admin',
        text: 'Run your whole business from one admin panel.',
        includes: ['Enquiries, clients and quotations', 'Events, bookings and calendar', 'Invoices, payments and expenses'],
      },
      {
        name: 'Admin + Portfolio',
        badge: 'Most complete',
        text: 'Everything in Admin, plus a website for your work.',
        includes: [
          'A portfolio website in your branding',
          'Galleries to show your work',
          'Website enquiries arrive in your panel',
          'Setup help from the Techon team',
        ],
      },
    ],

    getStarted: [
      { title: 'Sign up', text: 'Register with your email and a 6-digit code.' },
      { title: 'Add your studio', text: 'Enter your business details and set up your branding.' },
      { title: 'Pay by UPI or bank transfer', text: 'Enter the payment reference inside your account.' },
      { title: 'We confirm', text: 'Techon confirms your payment, usually within one working day.' },
    ],

    faqs: [
      { q: 'Can I try it before paying?', a: 'Yes. You can design and preview your panel for free in the customizer before you pay.' },
      { q: 'Is my data safe when a plan ends?', a: 'Yes. Your data stays safe, and renewing reopens your panel.' },
      { q: 'Can my staff log in?', a: 'One account manages the studio. Staff are kept as records rather than separate logins.' },
      { q: 'Can I switch plans?', a: 'Yes, when your current plan ends.' },
    ],
  },
];

export const featuredProduct = products[0];
