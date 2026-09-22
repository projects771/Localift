import React from 'react';
import { UserCheck, Wrench, Store, Video, Settings, PhoneCall } from 'lucide-react';

interface QuickOverviewBarProps {
  onOpenContact: () => void;
}

export const QuickOverviewBar: React.FC<QuickOverviewBarProps> = ({ onOpenContact }) => {
  const coreAnswers = [
    {
      q: "1. Who are we?",
      a: "Nawal & Gokul — A dedicated local digital startup team.",
      icon: UserCheck,
      color: "text-emerald-400"
    },
    {
      q: "2. What do we do?",
      a: "Build websites, create Reels & manage digital presence.",
      icon: Wrench,
      color: "text-cyan-400"
    },
    {
      q: "3. Can we build your shop website?",
      a: "Yes! For grocery, cafes, clothing, salons, services & startups.",
      icon: Store,
      color: "text-amber-400"
    },
    {
      q: "4. Social media & promotion?",
      a: "Yes! Instagram Reels, store tours & local Google visibility.",
      icon: Video,
      color: "text-purple-400"
    },
    {
      q: "5. Can we manage it for you?",
      a: "Yes! Choose self-management or let us update everything.",
      icon: Settings,
      color: "text-rose-400"
    },
    {
      q: "6. How to contact us?",
      a: "Direct Email, Call or Instant WhatsApp chat.",
      icon: PhoneCall,
      color: "text-emerald-400"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20">
              10-Second Quick Summary
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">
              Everything You Need to Know at a Glance
            </h3>
          </div>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-md shadow-emerald-500/20 shrink-0"
          >
            Ask Us Anything
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreAnswers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 hover:border-slate-700 transition-all flex items-start gap-3"
              >
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${item.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    {item.q}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
