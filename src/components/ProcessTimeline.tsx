import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Simple 5-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            How We Work <span className="text-gradient-emerald">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            From our initial chat to ongoing support, our workflow is simple, transparent, and built around your business timeline.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {siteConfig.processSteps.map((proc, idx) => (
            <div
              key={proc.step}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 font-extrabold text-lg mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
                  {proc.step}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Phase {idx + 1}</span>
                <span className="text-emerald-400 font-bold">Step {proc.step}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
