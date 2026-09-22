import React from 'react';
import { ArrowRight, Sparkles, Store, Globe, Smartphone, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Lighting Gradients */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Tagline Line */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            <span>Websites • Digital Presence • Social Media • Growth</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.15] mb-6">
            "Good Businesses <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">Deserve to Be Seen."</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mb-10">
            {siteConfig.heroSubtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#portfolio')}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 hover:text-white flex items-center justify-center gap-2"
            >
              <span>See Our Work</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Animated Growth Visual Pipeline */}
          <div className="w-full max-w-4xl glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center justify-between mb-6 border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">Digital Presence Pipeline</span>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20">
                Active Transformation
              </span>
            </div>

            {/* Pipeline Steps Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="group relative bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 group-hover:bg-emerald-950 transition-all">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">01. Start</span>
                <h4 className="text-sm font-bold text-white mb-1">LOCAL BUSINESS</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Shops, Cafes, Salons & Side Hustles</p>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 p-5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 group-hover:bg-cyan-950 transition-all">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">02. Platform</span>
                <h4 className="text-sm font-bold text-white mb-1">WEBSITE</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Mobile 24/7 Digital Storefront</p>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 p-5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 group-hover:bg-indigo-950 transition-all">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">03. Content</span>
                <h4 className="text-sm font-bold text-white mb-1">SOCIAL MEDIA</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Reels, Store Tours & Promos</p>
              </div>

              {/* Step 4 */}
              <div className="group relative bg-gradient-to-b from-slate-900 to-emerald-950/40 border border-emerald-500/30 p-5 rounded-2xl transition-all duration-300 flex flex-col items-center text-center shadow-lg shadow-emerald-500/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-3 group-hover:scale-110 transition-all">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">04. Goal</span>
                <h4 className="text-sm font-bold text-white mb-1">DIGITAL VISIBILITY</h4>
                <p className="text-[11px] text-emerald-200/80 leading-tight">Easier Online Discovery</p>
              </div>

            </div>

            {/* Bottom Proof Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mobile-Optimized
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast Load Times
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp & Maps Connected
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Self-Manage or We Manage
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
