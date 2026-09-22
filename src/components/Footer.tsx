import React from 'react';
import { Sparkles, ArrowRight, Mail, MessageSquare, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenContact: (defaultService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <footer className="bg-slate-950 pt-20 pb-28 sm:pb-12 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Final Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-emerald-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-500/30 inline-block mb-4">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Put Your <br className="hidden sm:inline" />
              <span className="text-gradient-emerald">Business Online?</span>
            </h2>
            <p className="text-base text-slate-300 mt-4 leading-relaxed">
              Whether you're running a local shop, starting a side hustle, or building something new, let's create a digital presence around it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenContact()}
              className="px-6 py-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${siteConfig.founders[0].email}`}
              className="px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email Us</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-sm font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 rounded-xl transition-all border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white">
                GrowthCraft<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Helping local businesses, shops, grocery stores, cafes, salons, and side hustles build their digital presence.
            </p>
            <p className="text-xs text-emerald-400 font-semibold italic">
              "Good businesses deserve to be seen."
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Our Work</a></li>
              <li><a href="#demos" className="hover:text-emerald-400 transition-colors">Store Prototypes</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Founders</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Founder Contacts */}
          <div className="space-y-3 md:col-span-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Founders & Direct Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">Nawal Kishore S. Pai</span>
                <span className="text-[11px] text-slate-400 block mb-1">Co-Founder & Developer</span>
                <a href={`mailto:${siteConfig.founders[0].email}`} className="text-emerald-400 hover:underline font-mono truncate block">
                  {siteConfig.founders[0].email}
                </a>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                <span className="font-bold text-white block">Gokul B</span>
                <span className="text-[11px] text-slate-400 block mb-1">Co-Founder & Developer</span>
                <a href={`mailto:${siteConfig.founders[1].email}`} className="text-cyan-400 hover:underline font-mono truncate block">
                  {siteConfig.founders[1].email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 GrowthCraft Agency. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made for local entrepreneurs with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
