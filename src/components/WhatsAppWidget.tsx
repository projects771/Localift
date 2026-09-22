import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface WhatsAppWidgetProps {
  onOpenContact: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onOpenContact }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 group">
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat With Us on WhatsApp
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 relative"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"></span>
          <MessageSquare className="w-7 h-7 relative z-10 fill-white" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0b0f19]/95 backdrop-blur-lg border-t border-slate-800/80 p-3 shadow-2xl flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        <button
          onClick={onOpenContact}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
        >
          <Mail className="w-4 h-4" />
          <span>Start Project</span>
        </button>
      </div>
    </>
  );
};
