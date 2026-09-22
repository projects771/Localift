import React from 'react';
import { Store, Smartphone, HeartHandshake, Layers, Video, MessageCircle, DollarSign } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    { title: "Built Specifically For Local Shops", desc: "Designed around store locations, WhatsApp orders, click-to-call buttons, and product showcases.", icon: Store },
    { title: "Mobile-First Design", desc: "Over 85% of local shoppers browse on smartphones. Our websites load fast and look stunning on mobile.", icon: Smartphone },
    { title: "Personal Founder Support", desc: "You work directly with founders Nawal & Gokul—no dealing with automated bots or indifferent call centers.", icon: HeartHandshake },
    { title: "Flexible Management Options", desc: "Manage the site yourself or let us update price lists, photos, and maintenance for total peace of mind.", icon: Layers },
    { title: "Social Media & Video Support", desc: "We don't just build websites; we create Instagram Reels and store tour videos to bring your shop to life.", icon: Video },
    { title: "Simple Jargon-Free Talk", desc: "No complex tech language. We explain everything in plain English so you always feel confident.", icon: MessageCircle },
    { title: "Affordable & Scalable", desc: "Pricing structured for small budgets. Start with a clean shop portal and expand features as you grow.", icon: DollarSign },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Why Local Business Owners Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            A Agency Built <span className="text-gradient-cyan">Around Your Needs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We understand the challenges of running a local business. Here is why working with us is practical, direct, and hassle-free.
          </p>
        </div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
