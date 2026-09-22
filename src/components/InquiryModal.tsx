import React, { useState } from 'react';
import { CheckCircle, X, Mail, Copy, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { InquiryFormData } from '../types';

interface InquiryModalProps {
  data: InquiryFormData;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);

  const formattedSummary = `
Inquiry Details:
Name: ${data.name}
Business Name: ${data.businessName}
Business Type: ${data.businessType}
Services Needed: ${data.servicesNeeded.join(', ') || 'General Digital Presence'}
Has Website: ${data.hasWebsite}
Has Social Media: ${data.hasSocialMedia}
Preferred Contact: ${data.preferredContact}
Phone/WhatsApp: ${data.phoneWhatsapp || 'Not provided'}
Email: ${data.email}
Project Scale: ${data.projectScale}
Details: ${data.businessDetails || 'No additional details'}
  `.trim();

  const handleCopySummary = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mailtoLink = `mailto:${siteConfig.founders[0].email},${siteConfig.founders[1].email}?subject=${encodeURIComponent(`Inquiry from ${data.businessName}`)}&body=${encodeURIComponent(formattedSummary)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-2">
          Inquiry Received!
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          "Thanks! Your inquiry has been received. We'll get back to you using the contact details you provided."
        </p>

        {/* Form Summary Details Preview */}
        <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2 mb-6">
          <div className="flex justify-between border-b border-slate-800/80 pb-2">
            <span className="font-bold text-slate-400">Business:</span>
            <span className="text-white font-semibold">{data.businessName} ({data.businessType})</span>
          </div>
          <div className="flex justify-between border-b border-slate-800/80 pb-2">
            <span className="font-bold text-slate-400">Contact:</span>
            <span className="text-emerald-400 font-mono">{data.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-slate-400">Requested Services:</span>
            <span className="text-cyan-400">{data.servicesNeeded.join(', ') || 'Digital Presence'}</span>
          </div>
        </div>

        {/* Direct Email Fallback */}
        <div className="space-y-3">
          <a
            href={mailtoLink}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Open Default Email App to Send</span>
          </a>

          <button
            onClick={handleCopySummary}
            className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary Text'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
