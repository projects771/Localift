import React from 'react';
import { Store, Globe, Smartphone, Megaphone, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const JourneySection: React.FC = () => {
  const icons = [Store, Globe, Smartphone, Megaphone, Eye];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-500/20">
            The Digital Bridge Concept
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "From Your Local Store to <br />
            <span className="text-gradient-cyan">Your Customers' Screens."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Many quality local shops miss out simply because nearby customers can't find them online. Here is how we bridge that gap.
          </p>
        </div>

        {/* Interactive Steps Journey */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {siteConfig.journeySteps.map((stepItem, idx) => {
            const IconComp = icons[idx];
            return (
              <div
                key={stepItem.step}
                className="group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {stepItem.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-emerald-400 block mb-3">
                    {stepItem.subtitle}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Honest Guarantee Statement Box */}
        <div className="mt-12 max-w-4xl mx-auto glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Our Transparent Philosophy</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We do <strong className="text-white">not</strong> make exaggerated claims or guarantee fake follower counts or revenue numbers. Instead, we guarantee a professional, mobile-friendly digital identity that makes your local business easy for customers to discover and trust.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
