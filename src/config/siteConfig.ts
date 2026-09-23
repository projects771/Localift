import type { Founder, ServiceItem, BusinessDemo, PortfolioProject, ReelItem, FAQItem } from '../types';

export const siteConfig = {
  agencyName: "Localift",
  agencyTagline: "Good Businesses Deserve to Be Seen.",
  agencySecondaryMessage: "You build the business. We build its digital presence.",
  heroSubtitle: "We help local businesses build their digital presence through modern websites, social media content and creative digital campaigns.",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_LOCALIFT/viewform", // Configurable Google Form URL
  
  contact: {
    whatsappNumber: "+919876543210", // Configurable placeholder
    whatsappMessage: "Hello Localift! I am interested in building a digital presence for my business.",
    agencyLocation: "India",
    workingHours: "Mon - Sat: 9:00 AM - 8:00 PM IST",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_LOCALIFT/viewform" // Configurable Google Form URL
  },

  founders: [
    {
      id: "nawal",
      name: "Nawal Kishore S. Pai",
      role: "Co-Founder",
      title: "Developer / Digital Solutions",
      bio: "Passionate developer focused on crafting performant, visually stunning web experiences that help local entrepreneurs and small businesses get noticed online.",
      email: "Navel Kishore Satishbhai@gmail.com",
      phonePlaceholder: "+91 98765 43210",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      githubUrl: "https://github.com/",
      linkedinUrl: "https://linkedin.com/",
      instagramUrl: "https://instagram.com/"
    },
    {
      id: "gokul",
      name: "Gokul B",
      role: "Co-Founder",
      title: "Developer / Digital Solutions",
      bio: "Tech enthusiast and digital strategist driven by building seamless web applications, interactive media campaigns, and tailored digital identity tools.",
      email: "gokulb776@gmail.com",
      phonePlaceholder: "+91 98765 43211",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      githubUrl: "https://github.com/",
      linkedinUrl: "https://linkedin.com/",
      instagramUrl: "https://instagram.com/"
    }
  ] as Founder[],

  services: [
    {
      id: "web-dev",
      title: "Website Development",
      shortDesc: "Modern, responsive websites designed specifically around your business needs.",
      fullDesc: "We craft fast, beautiful, mobile-friendly websites that showcase your products, services, store location, and business story so local customers can easily discover you.",
      iconName: "Layout",
      features: [
        "Mobile-first responsive design",
        "Fast loading speeds & performance",
        "Google Maps & Store Directions integration",
        "Click-to-call & Direct WhatsApp buttons",
        "Product catalogs & menu showcases"
      ],
      recommendedFor: ["Grocery Stores", "Cafes", "Retail Stores", "Salons", "Local Services"]
    },
    {
      id: "web-mgmt",
      title: "Website Management",
      shortDesc: "We can manage updates, content, price lists, and maintenance after launch.",
      fullDesc: "No time to maintain your website? We handle all technical updates, menu changes, holiday hours updates, security checks, and regular backups.",
      iconName: "ShieldCheck",
      features: [
        "Regular content updates & price list changes",
        "Security & domain SSL monitoring",
        "Fast response time for edits",
        "Monthly performance checkups",
        "Hands-free peace of mind"
      ],
      recommendedFor: ["Busy Store Owners", "Restaurants", "Salons", "Retailers"]
    },
    {
      id: "social-media",
      title: "Social Media Content",
      shortDesc: "Eye-catching promotional posts, Instagram Reels, and short-form video content.",
      fullDesc: "Give your shop a voice online with high-quality visual content, store walkthrough videos, product showcase reels, and seasonal promotional banners.",
      iconName: "Video",
      features: [
        "Instagram Reels & TikTok short clips",
        "Product feature highlights & store tours",
        "Promotional offer graphics & banners",
        "Brand aesthetic consistency",
        "Ready-to-post video packages"
      ],
      recommendedFor: ["Fashion Boutiques", "Cafes & Bakeries", "Jewelry Shops", "Side Hustles"]
    },
    {
      id: "digital-promo",
      title: "Digital Promotion",
      shortDesc: "Help businesses increase online visibility through local digital campaigns.",
      fullDesc: "Put your business on the digital map! We assist with Google Business Profile setup, local SEO positioning, social campaign strategy, and PR-style announcements.",
      iconName: "TrendingUp",
      features: [
        "Google Business Profile optimization",
        "Local Search & Map visibility setup",
        "PR-style opening & offer campaigns",
        "Shareable digital business cards",
        "Social media announcement packages"
      ],
      recommendedFor: ["New Business Openings", "Local Restaurants", "Service Providers"]
    },
    {
      id: "branding",
      title: "Branding & Identity",
      shortDesc: "Create a consistent, modern, and professional digital identity for your shop.",
      fullDesc: "Transform your local brand with modern logos, matching social media headers, color schemes, typography, and memorable brand messaging.",
      iconName: "Palette",
      features: [
        "Modern logo design & variations",
        "Cohesive color palette & fonts",
        "Social media profile assets",
        "Digital menu & flyer design templates",
        "Brand identity style guide"
      ],
      recommendedFor: ["Startups", "Rebranding Shops", "Cafes", "Retail Brands"]
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      shortDesc: "Tailored web tools, online booking widgets, and custom digital setups.",
      fullDesc: "Need a custom appointment booker for your salon, an interactive product catalog, or a specialized digital tool? We build customized web features for unique business workflows.",
      iconName: "Code",
      features: [
        "Appointment & table reservation widgets",
        "Interactive product catalog filter",
        "Custom price calculators",
        "Multi-language shop portals",
        "Tailored web application features"
      ],
      recommendedFor: ["Salons & Clinics", "Specialty Retailers", "Services"]
    }
  ] as ServiceItem[],

  journeySteps: [
    {
      step: "01",
      title: "Your Business",
      subtitle: "Great local products & dedicated service",
      desc: "You operate a quality shop, store, or service, but lack digital reach."
    },
    {
      step: "02",
      title: "Professional Website",
      subtitle: "Mobile-friendly 24/7 digital storefront",
      desc: "We build your online home showcasing products, contact info, and store hours."
    },
    {
      step: "03",
      title: "Social Media Content",
      subtitle: "Engaging Reels & store tours",
      desc: "Showcase your real shop experience and product highlights on screen."
    },
    {
      step: "04",
      title: "Digital Promotion",
      subtitle: "Google Maps & Local Search Setup",
      desc: "Make it effortless for nearby customers to find your exact location and phone number."
    },
    {
      step: "05",
      title: "More Online Visibility",
      subtitle: "Easier discovery & broader reach",
      desc: "Potential customers discover you on their phones and contact you directly."
    }
  ],

  demos: [
    {
      id: "grocery-demo",
      category: "Grocery Store",
      storeName: "FreshMart Organic & Daily Groceries",
      tagline: "Farm fresh vegetables, daily essentials & door delivery",
      previewUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      themeColor: "emerald",
      sampleFeatures: ["Daily Price Board", "WhatsApp Order Button", "Home Delivery Zones", "Offer of the Day"],
      mockNavItems: ["Home", "Fresh Produce", "Daily Essentials", "Offers", "Location"],
      heroHeadline: "Fresh Groceries Delivered to Your Doorstep in 30 Mins"
    },
    {
      id: "cafe-demo",
      category: "Café & Bakery",
      storeName: "Artisan Brews & Pastry Lab",
      tagline: "Handcrafted coffee, fresh croissants & cozy vibes",
      previewUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      themeColor: "amber",
      sampleFeatures: ["Interactive Digital Menu", "Table Reservation", "Instagram Feed", "Specialty Roasts"],
      mockNavItems: ["Home", "Menu", "Specialties", "Our Story", "Contact"],
      heroHeadline: "Experience the Finest Artisan Coffee in Town"
    },
    {
      id: "clothing-demo",
      category: "Clothing & Boutique",
      storeName: "VogueThreads Urban Apparel",
      tagline: "Modern fashion, traditional wear & seasonal trends",
      previewUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      themeColor: "indigo",
      sampleFeatures: ["New Arrivals Carousel", "Size Guide", "Store Location Map", "WhatsApp Catalog Inquiry"],
      mockNavItems: ["Home", "New Arrivals", "Collections", "Store Tour", "Visit Us"],
      heroHeadline: "Elevate Your Style with Curated Local Fashion"
    },
    {
      id: "salon-demo",
      category: "Salon & Spa",
      storeName: "Glow & Style Unisex Lounge",
      tagline: "Premium hair styling, skincare & bridal grooming",
      previewUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      themeColor: "rose",
      sampleFeatures: ["Service Price Card", "Appointment Request Form", "Stylist Showcase", "Customer Gallery"],
      mockNavItems: ["Home", "Services & Rates", "Stylists", "Book Slot", "Contact"],
      heroHeadline: "Look & Feel Your Best Every Single Day"
    },
    {
      id: "electronics-demo",
      category: "Electronics Store",
      storeName: "TechHub Digital & Mobiles",
      tagline: "Latest smartphones, gadgets, accessories & repairs",
      previewUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
      themeColor: "cyan",
      sampleFeatures: ["Festival Deal Highlights", "Repair Request Quote", "Brand Comparisons", "Store Warranty Info"],
      mockNavItems: ["Home", "Smartphones", "Gadgets", "Repairs", "Deals"],
      heroHeadline: "Your Trusted Local Destination for Tech & Accessories"
    },
    {
      id: "restaurant-demo",
      category: "Restaurant",
      storeName: "SpiceRoute Fine Dining",
      tagline: "Authentic local flavors, family dining & party catering",
      previewUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      themeColor: "orange",
      sampleFeatures: ["Visual Menu with Photos", "Party Hall Booking", "Chef Specials", "Direct Call to Order"],
      mockNavItems: ["Home", "Menu", "Buffet Deals", "Catering", "Reserve"],
      heroHeadline: "A Celebration of Authentic Flavors & Hospitality"
    }
  ] as BusinessDemo[],

  portfolio: [
    {
      id: "p1",
      title: "FreshBasket Supermarket Concept",
      category: "Grocery",
      shortDesc: "Clean digital storefront concept showcasing daily stock, deals, and quick WhatsApp ordering.",
      fullCaseStudy: "Designed as a modern concept demonstration for neighborhood grocery stores wanting a fast mobile website with direct WhatsApp basket inquiries and daily price displays.",
      servicesProvided: ["Website Development", "WhatsApp Integration", "Google Maps Setup"],
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#grocery-demo"
    },
    {
      id: "p2",
      title: "Urban Roast Café & Bakery Concept",
      category: "Food",
      shortDesc: "Aesthetic café website template with interactive digital menu and coffee reel previews.",
      fullCaseStudy: "A sleek demo website designed for local coffee shops and bakeries. Features mobile-optimized food menus, store ambiance video clips, and quick table inquiries.",
      servicesProvided: ["Website Development", "Social Media Reels Package", "Digital Menu"],
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#cafe-demo"
    },
    {
      id: "p3",
      title: "ThreadCraft Apparel Store Concept",
      category: "Retail",
      shortDesc: "Vibrant local boutique web showcase featuring seasonal collection galleries and store location map.",
      fullCaseStudy: "Demonstrates how a retail clothing store can exhibit new arrivals online without complex e-commerce maintenance, allowing customers to reserve items via chat.",
      servicesProvided: ["Website Development", "Branding Assets", "Product Photography Layouts"],
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#clothing-demo"
    },
    {
      id: "p4",
      title: "Aura Unisex Grooming Lounge",
      category: "Lifestyle",
      shortDesc: "Minimalist salon and beauty lounge web page showcasing pricing cards and instant appointment booking.",
      fullCaseStudy: "Built to illustrate how beauty parlors and salons can streamline appointment requests and highlight ongoing bridal and festive styling packages.",
      servicesProvided: ["Website Development", "Service Rate Cards", "Digital Promotion"],
      imageUrl: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#salon-demo"
    },
    {
      id: "p5",
      title: "VoltTech Mobile & Electronics",
      category: "Services",
      shortDesc: "High-energy gadget store and smartphone repair portal with instant quote request system.",
      fullCaseStudy: "A specialized concept layout for local electronics shops offering device sales, exchange quotes, and screen replacement inquiries.",
      servicesProvided: ["Website Development", "Repair Quote Widget", "Google Local SEO Setup"],
      imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#electronics-demo"
    },
    {
      id: "p6",
      title: "Verde Kitchen Local Restaurant",
      category: "Startup",
      shortDesc: "Rich dining experience website featuring digital food photography, event bookings, and party hall tours.",
      fullCaseStudy: "Designed for family restaurants and cloud kitchens to establish an independent online ordering showcase that saves third-party commission fees.",
      servicesProvided: ["Website Development", "Digital Marketing Setup", "Reels Creation"],
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      isDemoConcept: true,
      demoUrl: "#restaurant-demo"
    }
  ] as PortfolioProject[],

  reels: [
    {
      id: "reel-1",
      title: "Store Walkthrough & Atmosphere",
      category: "Store Tour",
      type: "Reels / Shorts",
      duration: "0:30",
      thumbnailUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=400&q=80",
      description: "Give customers a 30-second virtual tour of your shop layout, interior ambiance, and welcoming staff.",
      viewsPlaceholder: "Ideal for Instagram Reels & WhatsApp Stories"
    },
    {
      id: "reel-2",
      title: "New Arrival Product Spotlight",
      category: "Product Feature",
      type: "Reels / Shorts",
      duration: "0:25",
      thumbnailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      description: "High-contrast close-ups of new stock, fresh arrivals, or special ingredients with trending audio.",
      viewsPlaceholder: "Drives direct inquiries & visits"
    },
    {
      id: "reel-3",
      title: "Behind-the-Scenes & Craftsmanship",
      category: "Authenticity",
      type: "Reels / Shorts",
      duration: "0:45",
      thumbnailUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
      description: "Show the care, baking process, tailoring precision, or preparation behind your products.",
      viewsPlaceholder: "Builds deep trust with local patrons"
    },
    {
      id: "reel-4",
      title: "Festive Discounts & Offers Promo",
      category: "Promotional",
      type: "Reels / Shorts",
      duration: "0:20",
      thumbnailUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=400&q=80",
      description: "Punchy, colorful short clip announcing festival sales, seasonal discounts, or combo deals.",
      viewsPlaceholder: "High shareability among friends"
    }
  ] as ReelItem[],

  faqs: [
    {
      id: "faq-1",
      question: "Do I need technical knowledge to manage my website?",
      answer: "Not at all! We build websites to be simple and straightforward. You can either manage basic text and price updates yourself using an easy dashboard, or choose our 'We Manage' plan where we take care of all updates for you.",
      category: "General"
    },
    {
      id: "faq-2",
      question: "Can you maintain the website after launching it?",
      answer: "Yes! We offer flexible Website Management plans. Whether you need monthly price list updates, new photo additions, holiday hours updates, or domain renewals, we handle it so you can focus on your business.",
      category: "Services"
    },
    {
      id: "faq-3",
      question: "Can you create Instagram Reels and videos for my shop?",
      answer: "Yes, short-form video content is one of our key services! We can script, structure, and create engaging Instagram Reels, product showcase videos, store tours, and promotional clips tailored for your social media.",
      category: "Social Media"
    },
    {
      id: "faq-4",
      question: "Can you build a website for a small local shop or side hustle?",
      answer: "Absolutely. We specialize in local businesses! Whether you run a small neighborhood grocery store, a salon, a cloud kitchen, a boutique, or a home-based side hustle, we create a digital presence scaled perfectly to your budget.",
      category: "General"
    },
    {
      id: "faq-5",
      question: "Can you redesign or upgrade my existing website?",
      answer: "Yes. If your current website looks outdated, runs slowly on mobile phones, or isn't getting any engagement, we can redesign it into a fast, modern digital storefront that reflects your current business.",
      category: "Services"
    },
    {
      id: "faq-6",
      question: "Do you guarantee more customers, sales, or followers?",
      answer: "No. We believe in 100% honesty. No agency can ethically guarantee exact follower counts or sales figures. Our goal is to build you a top-tier professional digital presence, improve local online discoverability, and give you high-quality promotional tools that make it easy for potential customers to find and trust you.",
      category: "Policy & Honesty"
    },
    {
      id: "faq-7",
      question: "How much does a website cost and how long does it take?",
      answer: "Pricing depends on your specific requirements (e.g., single-page shop portal vs multi-page showcase with video content). Because we focus on local businesses, our rates are realistic and flexible. Most basic local shop websites are completed within 5 to 10 days.",
      category: "Pricing"
    }
  ] as FAQItem[],

  processSteps: [
    {
      step: "01",
      title: "Tell Us About Your Business",
      desc: "We discuss your shop, your products, target local area, and what you want to achieve online."
    },
    {
      step: "02",
      title: "Plan & Structure",
      desc: "We decide the right digital setup—website features, social media content plan, and branding style."
    },
    {
      step: "03",
      title: "Build & Design",
      desc: "We craft your mobile-friendly website, write clear messaging, and prepare promotional assets."
    },
    {
      step: "04",
      title: "Launch & Go Live",
      desc: "Your website goes live on your domain, Google Search & Maps are connected, and promotional content is ready."
    },
    {
      step: "05",
      title: "Ongoing Support",
      desc: "We stay by your side for ongoing updates, maintenance, and future promotion whenever you need us."
    }
  ]
};
