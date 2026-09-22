import React, { useState } from 'react';
import { Play, Film, Volume2, ArrowRight, ShieldAlert, Camera } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ReelsShowcaseProps {
  onOpenContact: (defaultService?: string) => void;
}

export const ReelsShowcase: React.FC<ReelsShowcaseProps> = ({ onOpenContact }) => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const activeReel = siteConfig.reels[activeReelIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800/80">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-950/60 px-4 py-1.5 rounded-full border border-rose-500/20 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" /> Social Media & Video Packages
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "Your Business Has a Story. <br />
            <span className="text-gradient-cyan">Let's Put It on Screen."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Customers love seeing real products and real shops on their smartphones. We create short-form promotional videos and Instagram Reels for your local business.
          </p>
        </div>

        {/* Smartphone Instagram Reels Mockup + Content Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Reels Preview Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] bg-black rounded-[40px] p-3 border-4 border-slate-800 shadow-2xl shadow-purple-950/30 overflow-hidden group">
              
              {/* Phone Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              </div>

              {/* Reel Card Image Viewport */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-900">
                <img
                  src={activeReel.thumbnailUrl}
                  alt={activeReel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-5">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pt-6">
                    <span className="text-[10px] font-bold text-white bg-rose-600/90 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Camera className="w-3 h-3" /> {activeReel.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-300 bg-black/50 px-2 py-0.5 rounded-full">
                      {activeReel.duration}
                    </span>
                  </div>

                  {/* Play Pulse Overlay */}
                  <div className="self-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>

                  {/* Bottom Captions */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-rose-300 font-semibold">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>Original Audio • Local Shop Spotlight</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {activeReel.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      {activeReel.description}
                    </p>
                    <div className="text-[10px] text-emerald-400 font-mono pt-1">
                      ⚡ {activeReel.viewsPlaceholder}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Video Services List & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              What Video Content We Create For You:
            </h3>

            {/* Reel Options Buttons */}
            <div className="space-y-3">
              {siteConfig.reels.map((reel, idx) => (
                <div
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    idx === activeReelIndex
                      ? 'bg-slate-900 border-rose-500/50 shadow-lg shadow-rose-950/20'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      idx === activeReelIndex ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{reel.title}</h4>
                      <p className="text-xs text-slate-400">{reel.category} • {reel.type}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-rose-400">{reel.duration}</span>
                </div>
              ))}
            </div>

            {/* Honest Disclaimer */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                We focus on authentic, high-quality video production representing your store accurately. We do not promise artificial viral numbers or fake follower spikes.
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenContact('Social Media & Reels')}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-xl shadow-xl shadow-rose-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Promote My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
