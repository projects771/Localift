export interface Founder {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  email: string;
  phonePlaceholder: string;
  avatarUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  recommendedFor: string[];
}

export interface BusinessDemo {
  id: string;
  category: string;
  storeName: string;
  tagline: string;
  previewUrl: string;
  themeColor: string;
  sampleFeatures: string[];
  mockNavItems: string[];
  heroHeadline: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Grocery' | 'Retail' | 'Food' | 'Lifestyle' | 'Services' | 'Startup';
  shortDesc: string;
  fullCaseStudy: string;
  servicesProvided: string[];
  imageUrl: string;
  isDemoConcept: boolean;
  demoUrl?: string;
}

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  type: string;
  duration: string;
  thumbnailUrl: string;
  description: string;
  viewsPlaceholder: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  businessType: string;
  servicesNeeded: string[];
  hasWebsite: string;
  hasSocialMedia: string;
  preferredContact: string;
  phoneWhatsapp?: string;
  email: string;
  businessDetails: string;
  projectScale: string;
}
