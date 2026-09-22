import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(siteConfig.faqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Everything you need to know about working with us, website maintenance, pricing, and social media content.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-700"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-800 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
