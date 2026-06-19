export type TabType = 'home' | 'services' | 'pricing' | 'contact' | 'portfolio';

export type ProjectClassificationType = 'web_app' | 'corporate_site' | 'ecommerce' | 'other_protocol';

export interface ContactFormInput {
  name: string;
  email: string;
  classification: ProjectClassificationType;
  message: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceINR: string;
  description: string;
  features: { text: string; highlight?: boolean; separator?: boolean; icon?: string; metric?: boolean }[];
  ctaText: string;
  popular?: boolean;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  isCore?: boolean;
  tags?: string[];
  iconName: string;
}

export interface LeaderShipMember {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  primaryIcon: string;
  secondaryIcon?: string;
  email: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  performanceScore: string;
  launchYear: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

