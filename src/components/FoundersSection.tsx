import React from 'react';
import { Mail, Phone, Globe, Camera, Share2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FoundersSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Real People, Dedicated Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "Meet the People <span className="text-gradient-emerald">Behind the Startup."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            We are two passionate developers and digital solution creators dedicated to helping local business owners establish strong, modern online presences.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.founders.map((founder) => (
            <div
              key={founder.id}
              className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Founder Image & Title Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={founder.avatarUrl}
                    alt={founder.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/30 shadow-md"
                  />
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {founder.role}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400">
                      {founder.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Contact Badges */}
                <div className="space-y-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 mb-6">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 overflow-hidden">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate font-mono">{founder.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono">{founder.phonePlaceholder} (Configurable)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`mailto:${founder.email}?subject=${encodeURIComponent("Inquiry regarding Website & Digital Presence")}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email {founder.name.split(' ')[0]}</span>
                  </a>

                  <a
                    href={`tel:${founder.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Call {founder.name.split(' ')[0]}</span>
                  </a>
                </div>

                {/* Social Placeholders */}
                <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-xs">
                  {founder.githubUrl && (
                    <a href={founder.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  {founder.linkedinUrl && (
                    <a href={founder.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                      <Share2 className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  )}
                  {founder.instagramUrl && (
                    <a href={founder.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                      <Camera className="w-3.5 h-3.5" /> Instagram
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
