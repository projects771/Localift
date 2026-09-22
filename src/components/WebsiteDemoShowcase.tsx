import React, { useState } from 'react';
import { ShoppingBag, Coffee, Shirt, Scissors, Smartphone, Utensils, Globe, Check, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface WebsiteDemoShowcaseProps {
  onOpenContact: (defaultService?: string) => void;
}

export const WebsiteDemoShowcase: React.FC<WebsiteDemoShowcaseProps> = ({ onOpenContact }) => {
  const [activeDemoId, setActiveDemoId] = useState<string>(siteConfig.demos[0].id);

  const activeDemo = siteConfig.demos.find(d => d.id === activeDemoId) || siteConfig.demos[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Grocery Store': return ShoppingBag;
      case 'Café & Bakery': return Coffee;
      case 'Clothing & Boutique': return Shirt;
      case 'Salon & Spa': return Scissors;
      case 'Electronics Store': return Smartphone;
      case 'Restaurant': return Utensils;
      default: return ShoppingBag;
    }
  };

  return (
    <section id="demos" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-4 py-1.5 rounded-full border border-amber-500/20">
            Interactive Store Prototypes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "Imagine Your Business <span className="text-gradient-emerald">Online."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Select your industry below to preview how your local shop, restaurant, salon, or retail business could look on your customers' smartphones and laptops.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {siteConfig.demos.map((demo) => {
            const Icon = getCategoryIcon(demo.category);
            const isActive = demo.id === activeDemoId;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveDemoId(demo.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-transparent shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{demo.category}</span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Preview Screen Frame */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Browser Window Header */}
          <div className="flex items-center justify-between bg-slate-950/90 rounded-2xl px-4 py-3 border border-slate-800/80 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>https://{activeDemo.storeName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
            </div>

            <div className="text-xs text-emerald-400 font-semibold px-3 py-1 bg-emerald-950/60 rounded-full border border-emerald-500/20">
              Live Mockup Preview
            </div>
          </div>

          {/* Interactive Mockup Body Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  {activeDemo.category} Template
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 leading-tight">
                  {activeDemo.storeName}
                </h3>
                <p className="text-sm text-slate-300 mt-2 italic">
                  "{activeDemo.tagline}"
                </p>
              </div>

              {/* Sample Features List */}
              <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Built-in Features:</h4>
                {activeDemo.sampleFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onOpenContact(`Website for ${activeDemo.category}`)}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <span>Build This For My Store</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Window */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Mock Store Header Nav */}
              <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="font-extrabold text-sm text-white tracking-tight">
                  {activeDemo.storeName.split(' ')[0]}<span className="text-emerald-400">.</span>
                </span>
                <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium text-slate-400">
                  {activeDemo.mockNavItems.map((item, i) => (
                    <span key={i} className="hover:text-white cursor-pointer">{item}</span>
                  ))}
                </div>
                <button className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold">
                  Order Now
                </button>
              </div>

              {/* Mock Store Hero Banner */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={activeDemo.previewUrl}
                  alt={activeDemo.storeName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full w-max border border-emerald-500/30 mb-2">
                    {activeDemo.category} Online Storefront
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white max-w-md">
                    {activeDemo.heroHeadline}
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Order</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Call Store</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
