import React from 'react';
import { UserCheck, Headphones, Check, ArrowRight } from 'lucide-react';

interface ManagementComparisonProps {
  onOpenContact: (defaultService?: string) => void;
}

export const ManagementComparison: React.FC<ManagementComparisonProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            100% Control & Flexibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "You Decide <span className="text-gradient-emerald">Who Manages It."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We never lock you into a rigid model. Choose whether you want complete hands-on access or full hands-free peace of mind.
          </p>
        </div>

        {/* Two Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: You Manage */}
          <div className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                <UserCheck className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                Option A: Self-Service
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-3 mb-4">
                You Manage
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                You receive full owner access and simple guidelines to update your product prices, photos, store hours, and text whenever you wish.
              </p>

              <div className="space-y-3 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full ownership & access credentials</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Simple instructions for basic text & photo edits</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Zero monthly recurring management fees</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Ideal for tech-comfortable owners</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Website - You Manage')}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>Choose Self-Management</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: We Manage */}
          <div className="glass-panel rounded-3xl p-8 border border-emerald-500/40 bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/30 transition-all flex flex-col justify-between group shadow-xl shadow-emerald-500/10">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                <Headphones className="w-7 h-7" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  Option B: Recommended
                </span>
                <span className="text-[10px] font-bold text-white bg-emerald-500 px-2.5 py-0.5 rounded-full">
                  Popular Choice
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mt-3 mb-4">
                We Manage
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Busy running your shop? We handle all price list updates, menu changes, security monitoring, domain renewal alerts, and requested edits.
              </p>

              <div className="space-y-3 bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/20 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-100">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Send us edits via WhatsApp or Email & we update it</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-100">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Regular maintenance & security backups</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-100">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fast turn-around for holiday & price changes</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-100">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero technical stress for you</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Website - We Manage')}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Choose Managed Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
