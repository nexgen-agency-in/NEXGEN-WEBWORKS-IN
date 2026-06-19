import { CapabilityItem, LeaderShipMember, PricingTier, PortfolioProject, Testimonial, FAQItem } from './types';

export const DIRECT_LINES = ['+91 7003091321', '+91 8100297169'];
export const CONTACT_EMAIL = 'nexgen.webworks@gmail.com';

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'web_dev',
    title: 'Website Development',
    description: 'High-performance, scalable web architectures built with modern frameworks. We engineer solutions that are as robust as they are visually striking.',
    isCore: true,
    tags: ['React', 'Next.js', 'Node'],
    iconName: 'Code',
  },
  {
    id: 'graphics_design',
    title: 'Graphics Designing',
    description: 'Premium visual assets that communicate technical authority and brand identity.',
    iconName: 'Brush',
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Data-driven campaigns to target high-value enterprise clients.',
    iconName: 'TrendingUp',
  },
  {
    id: 'sm_presence',
    title: 'Social Media Presence Enhancement',
    description: 'Strategic brand positioning across platforms to establish thought leadership and engage your core demographic.',
    iconName: 'Share2',
  },
];

export const PR_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹9999',
    priceINR: '9,999',
    description: 'Essential digital footprint.',
    ctaText: 'Select Basic',
    features: [
      { text: '2-3 Pages', icon: 'CheckCircle' },
      { text: 'Mobile Responsive', icon: 'CheckCircle', separator: true },
      { text: 'Basic SEO', icon: 'CheckCircle', separator: true },
      { text: 'Contact Form', icon: 'CheckCircle', separator: true },
      { text: '7-Day Delivery', icon: 'Clock', separator: true, metric: true },
      { text: '1 Revision', icon: 'RefreshCw', metric: true },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹14999',
    priceINR: '14,999',
    description: 'Optimized for scale and conversion.',
    ctaText: 'Select Professional',
    popular: true,
    features: [
      { text: 'Up to 5 Pages', icon: 'CheckCircle', highlight: true },
      { text: 'Premium UI/UX', icon: 'CheckCircle', highlight: true, separator: true },
      { text: 'Advanced SEO + Analytics', icon: 'CheckCircle', highlight: true, separator: true },
      { text: 'WhatsApp & CRM Integration', icon: 'CheckCircle', highlight: true, separator: true },
      { text: 'Speed Optimized', icon: 'Bolt', separator: true },
      { text: '2-3 Days Delivery', icon: 'Clock', separator: true, metric: true },
      { text: '3 Revisions', icon: 'RefreshCw', metric: true },
      { text: '1 Month Support', icon: 'Headphones', metric: true },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    price: '₹19999',
    priceINR: '19,999',
    description: 'Full-scale digital storefront.',
    ctaText: 'Select E-Commerce',
    features: [
      { text: 'Up to 7-8 Pages', icon: 'CheckCircle' },
      { text: '50 Products', icon: 'ShoppingCart', separator: true },
      { text: 'Custom Animations', icon: 'Layers', separator: true },
      { text: 'E-commerce/Booking', icon: 'Store', separator: true },
      { text: 'AI Chatbot', icon: 'Bot', separator: true },
      { text: 'Full SEO Strategy', icon: 'TrendingUp', separator: true },
      { text: 'Conversion Optimization', icon: 'BarChart4', separator: true },
      { text: 'Unlimited Revisions', icon: 'Sparkles', separator: true, metric: true },
      { text: '3 Months Support', icon: 'Headphones', metric: true },
    ],
  },
];

export const STRATEGIST_FOUNDERS: LeaderShipMember[] = [
  {
    name: 'Ayushman Dutta',
    role: 'Founder & Head Developer',
    description: 'Spearheading system architecture and executing flawless, high-performance web applications.',
    image: 'https://i.postimg.cc/j2ZmG38n/image-(83).jpg',
    alt: 'Ayushman Dutta Founder & Head Developer Portrait',
    primaryIcon: 'Code',
    secondaryIcon: 'Mail',
    email: 'ayushman.dutta@nexgen.com',
  },
  {
    name: 'Ayush Shaw',
    role: 'Co-Founder & Designer',
    description: 'Crafting intuitive, premium UI/UX experiences that seamlessly merge form and function.',
    image: 'https://i.postimg.cc/GpGNcm7Y/9defb95b-1a9a-45b0-bb94-c33ef5897bb2.png',
    alt: 'Ayush Shaw Co-Founder & Designer Portrait',
    primaryIcon: 'Brush',
    secondaryIcon: 'Mail',
    email: 'ayush.shaw@nexgen.com',
  },
  {
    name: 'Siddharth Singh',
    role: 'Co-Founder & Client Support / Designer',
    description: 'Ensuring uncompromised client satisfaction while delivering compelling visual identities.',
    image: 'https://i.postimg.cc/sfwLf8cQ/image-(81).jpg',
    alt: 'Siddharth Singh Co-Founder & client support Designer portrait',
    primaryIcon: 'Headphones',
    secondaryIcon: 'Mail',
    email: 'siddharth.singh@nexgen.com',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'lux-perfume',
    title: 'Aura Perfumery Platform',
    category: 'E-commerce Architecture',
    description: 'A luxurious digital sensory experience and high-speed checkout system for standard and customized luxury fragrances.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    techStack: ['Next.js', 'Tailwind v4', 'Framer Motion', 'Stripe'],
    performanceScore: '99',
    launchYear: '2025',
  },
  {
    id: 'cyber-vault',
    title: 'Krypton Secure Wallet',
    category: 'Web Application',
    description: 'Decentralized cryptocurrency wallet with advanced biometric locks, real-time gas tracking dashboards, and visual charts.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'TypeScript', 'D3.js', 'Web3Auth'],
    performanceScore: '97',
    launchYear: '2025',
  },
  {
    id: 'apex-capital',
    title: 'Apex Financial Platform',
    category: 'Corporate Platform',
    description: 'Institutional asset management visual engine providing complex data modeling, portfolio analytics, and automated generation reports.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Recharts', 'Tailwind', 'Express'],
    performanceScore: '98',
    launchYear: '2024',
  },
  {
    id: 'hyper-saas',
    title: 'ScaleFlow AI CRM',
    category: 'Web Application',
    description: 'Enterprise pipeline optimization console processing millions of events daily and using smart workspace integrations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'Gemini SDK'],
    performanceScore: '100',
    launchYear: '2025',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Devendra Sharma',
    role: 'Chief Technology Officer',
    company: 'Fintech Nexus Solutions',
    text: 'Aura Perfumery Platform delivered in record time. NexGen WebWorks has established a standard of design and technical excellence that is difficult to find. Our load times dropped by 64%, and conversion increased instantly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't2',
    name: 'Mirabelle Dupont',
    role: 'VP of Product',
    company: 'Aura Premium Fragrances',
    text: 'Working with Ayush and Ayushman was a masterclass in collaboration. They took our complex custom ecommerce requirements and designed a state-of-the-art interactive store. The attention to typography and performance is unparalleled.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't3',
    name: 'Sanjeev Goenka',
    role: 'Managing Director',
    company: 'Apex Wealth Partners',
    text: 'We needed a highly secure data-rich dashboard. NexGen built Krypton with absolute cryptographic integrity and stunning Recharts visualizations. Siddharth managed our timeline expectations with professional ease.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't4',
    name: 'Elana Rostova',
    role: 'Marketing Director',
    company: 'ScaleFlow AI Systems',
    text: 'Our social presence went from chaotic to targeted and authoritative. The combined graphics assets and continuous SMM campaigns have brought us several high-ticket enterprise contracts. They are the supreme architects.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't5',
    name: 'Rohan Mehra',
    role: 'Founder & CEO',
    company: 'Hyper-SaaS Growth Studio',
    text: 'Their technical execution was pristine. They set up server-side proxy routes for our API security, optimized our Vite bundle sizes, and delivered a 100/100 Lighthouse performance score. Truly the top agency.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
  }
];

export const AGENCY_FAQS: FAQItem[] = [
  {
    id: 'q1',
    category: 'Agency Basics & Planning',
    question: 'How does your design and development process work?',
    answer: 'We operate on a transparent, 4-phase delivery system: Discovery (aligning targets & architectures), Visual Prototyping (producing custom Figma designs), Agile Implementation (building with React, TypeScript, and Tailwind with clean server routes), and Speed Optimization & Launch (testing to ensure sub-second speeds and SEO perfection).',
  },
  {
    id: 'q2',
    category: 'Ownership & Intellectual Property',
    question: 'Do we own the website and source code once completed?',
    answer: 'Absolutely. Upon project completion and final payment, ownership of the intellectual property, design assets, database schemas, and codebase is fully transferred to your company. We deliver clean, modular workspaces and guide your team on direct environment hosting.',
  },
  {
    id: 'q3',
    category: 'Security & Quality Control',
    question: 'What security protocols do you implement for web apps?',
    answer: 'Security is backed directly into our technical strategy. We default to full-stack architectures keeping API keys hidden via secure server-side Express proxies, implement CORS headers, sanitize user inputs to prevent XSS, and use strictly validated components.',
  },
  {
    id: 'q4',
    category: 'Performance & Search Optimization',
    question: 'How do you guarantee sub-second load times and high SEO?',
    answer: 'We utilize Vite-powered asset bundlers, enable lazy-loading for heavy assets, use modern Next/React techniques, compress all photographic outputs, and configure semantic HTML headers. Every design is built with strict mobile-first fluid rules, giving Google index algorithms the cleanest semantic structure to crawl.',
  },
  {
    id: 'q5',
    category: 'Post-Launch Care & Maintenance',
    question: 'Do you offer hosting, maintenance, and support services?',
    answer: 'Yes. Our Professional and E-Commerce tiers come pre-loaded with free high-priority support. Beyond standard delivery, we provide tailored monthly maintenance models covering cloud hosting monitoring, database backups, security patches, content updates, and continuous analytics monitoring.',
  },
  {
    id: 'q6',
    category: 'Tech Stack & Long-Term Scalability',
    question: 'What technologies do you use, and can we scale them?',
    answer: 'We specialize in React, TypeScript, Tailwind CSS, Node.js/Express, and Firestore/Firebase, and relational Cloud SQL. We avoid bloated drag-and-drop template builders (like traditional WordPress) because they heavily penalize speed and scalability. Our modular custom code enables painless scaling to millions of hits.'
  }
];

