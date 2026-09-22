import React, { useState } from 'react';
import { Layout, ShieldCheck, Video, TrendingUp, Palette, Code, CheckCircle, ArrowRight, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'ShieldCheck': return ShieldCheck;
      case 'Video': return Video;
      case 'TrendingUp': return TrendingUp;
      case 'Palette': return Palette;
      case 'Code': return Code;
      default: return Layout;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Tailored For Local Shops & Startups
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            What We Can Do <span className="text-gradient-emerald">For Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            From modern mobile websites to engaging Instagram Reels and local Google promotion—we give your business the tools to stand out online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-md shadow-emerald-500/10">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights Pill List */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/btn"
                  >
                    <span>Choose This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                {React.createElement(getIcon(selectedServiceModal.iconName), { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedServiceModal.title}</h3>
                <span className="text-xs text-emerald-400 font-medium">Service Overview</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedServiceModal.fullDesc}
            </p>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What's Included:</h4>
            <div className="space-y-2.5 mb-6 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              {selectedServiceModal.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recommended For:</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedServiceModal.recommendedFor.map((rec, idx) => (
                <span key={idx} className="text-[11px] px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {rec}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const serviceName = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onSelectService(serviceName);
                }}
                className="flex-1 py-3 text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <span>Request This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
