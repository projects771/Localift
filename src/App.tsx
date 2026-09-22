import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickOverviewBar } from './components/QuickOverviewBar';
import { Services } from './components/Services';
import { JourneySection } from './components/JourneySection';
import { WebsiteDemoShowcase } from './components/WebsiteDemoShowcase';
import { ReelsShowcase } from './components/ReelsShowcase';
import { ManagementComparison } from './components/ManagementComparison';
import { Portfolio } from './components/Portfolio';
import { ServiceRecommendationWizard } from './components/ServiceRecommendationWizard';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FoundersSection } from './components/FoundersSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import type { InquiryFormData } from './types';

export function App() {
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [submittedInquiry, setSubmittedInquiry] = useState<InquiryFormData | null>(null);

  const handleOpenContact = (defaultService?: string) => {
    if (defaultService) {
      setPrefilledService(defaultService);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Hero Section */}
      <Hero onOpenContact={() => handleOpenContact()} />

      {/* 10-Second Quick Overview Bar */}
      <QuickOverviewBar onOpenContact={() => handleOpenContact()} />

      {/* Services Section */}
      <Services onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)} />

      {/* "From Local to Digital" Concept Journey */}
      <JourneySection />

      {/* Interactive Website Store Prototypes Showcase */}
      <WebsiteDemoShowcase onOpenContact={(service) => handleOpenContact(service)} />

      {/* Instagram Reels & Video Showcase */}
      <ReelsShowcase onOpenContact={(service) => handleOpenContact(service)} />

      {/* Website Management Choice ("You Manage" vs "We Manage") */}
      <ManagementComparison onOpenContact={(service) => handleOpenContact(service)} />

      {/* Portfolio Showcase */}
      <Portfolio onOpenContact={(service) => handleOpenContact(service)} />

      {/* Interactive Service Selector Wizard */}
      <ServiceRecommendationWizard onSelectRecommendation={(recText) => handleOpenContact(recText)} />

      {/* 5-Step Process Timeline */}
      <ProcessTimeline />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* About Founders */}
      <FoundersSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact Section & Inquiry Form */}
      <ContactSection
        prefilledService={prefilledService}
        onFormSubmitted={(data) => setSubmittedInquiry(data)}
      />

      {/* Footer & Pre-Footer CTA */}
      <Footer onOpenContact={(service) => handleOpenContact(service)} />

      {/* Floating WhatsApp Action Button & Mobile Toolbar */}
      <WhatsAppWidget onOpenContact={() => handleOpenContact()} />

      {/* Submission Success Modal */}
      {submittedInquiry && (
        <InquiryModal
          data={submittedInquiry}
          onClose={() => setSubmittedInquiry(null)}
        />
      )}

    </div>
  );
}

export default App;
