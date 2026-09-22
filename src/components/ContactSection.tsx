import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Building } from 'lucide-react';
import type { InquiryFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  onFormSubmitted: (data: InquiryFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService, onFormSubmitted }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessName: '',
    businessType: 'Grocery Store',
    servicesNeeded: [],
    hasWebsite: 'No',
    hasSocialMedia: 'None',
    preferredContact: 'WhatsApp',
    phoneWhatsapp: '',
    email: '',
    businessDetails: '',
    projectScale: 'Small project'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        servicesNeeded: prev.servicesNeeded.includes(prefilledService)
          ? prev.servicesNeeded
          : [...prev.servicesNeeded, prefilledService]
      }));
    }
  }, [prefilledService]);

  const businessTypes = [
    'Grocery Store', 'Retail Shop', 'Restaurant', 'Café', 'Clothing',
    'Salon', 'Electronics', 'Local Service', 'Startup', 'Side Hustle', 'Other'
  ];

  const serviceOptions = [
    'Website', 'Website Management', 'Social Media', 'Instagram Reels',
    'Digital Promotion', 'Branding', 'Custom Solution', 'Not Sure Yet'
  ];

  const toggleServicePill = (service: string) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter(s => s !== service)
          : [...prev.servicesNeeded, service]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessName || !formData.email) {
      alert("Please fill in your Name, Business Name, and Email.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmitted(formData);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Start Your Digital Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            "Let's Bring Your <span className="text-gradient-emerald">Business Online."</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Have a business idea, need a website, or want to improve your online presence? Tell us what you need and we'll get in touch promptly.
          </p>
        </div>

        {/* Founder Direct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Founder 1 */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-lg">
                  NP
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Nawal Kishore S. Pai</h3>
                  <p className="text-xs text-slate-400">Co-Founder & Developer</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4">
                Navel Kishore Satishbhai@gmail.com
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`mailto:Navel Kishore Satishbhai@gmail.com?subject=${encodeURIComponent("Inquiry for Nawal Kishore S. Pai")}`}
                className="py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Email Nawal
              </a>
              <a
                href="tel:+919876543210"
                className="py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> Call Nawal
              </a>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold text-lg">
                  GB
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Gokul B</h3>
                  <p className="text-xs text-slate-400">Co-Founder & Developer</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4">
                gokulb776@gmail.com
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`mailto:gokulb776@gmail.com?subject=${encodeURIComponent("Inquiry for Gokul B")}`}
                className="py-2.5 text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Email Gokul
              </a>
              <a
                href="tel:+919876543211"
                className="py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> Call Gokul
              </a>
            </div>
          </div>

        </div>

        {/* General Inquiry Form */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          
          <div className="border-b border-slate-800 pb-6 mb-8">
            <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Building className="w-6 h-6 text-emerald-400" />
              <span>Tell Us About Your Business</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Fill out this quick form and we'll prepare a tailored response for your store.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Business Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunrise Organic Groceries"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Business Type Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              >
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* What Are You Looking For Multi-Select */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                What Are You Looking For? (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((svc) => {
                  const isSelected = formData.servicesNeeded.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleServicePill(svc)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {svc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Existing Website & Social Media Radio/Selects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Do You Already Have a Website?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Yes', 'No', 'Not Sure'].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setFormData({ ...formData, hasWebsite: val })}
                      className={`py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                        formData.hasWebsite === val
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Existing Social Media?
                </label>
                <select
                  value={formData.hasSocialMedia}
                  onChange={(e) => setFormData({ ...formData, hasSocialMedia: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Both">Both Instagram & Facebook</option>
                  <option value="None">None</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Preferred Contact Method & Contact Input */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Preferred Contact
                </label>
                <select
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone Call</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  value={formData.phoneWhatsapp}
                  onChange={(e) => setFormData({ ...formData, phoneWhatsapp: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Business Details Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Tell Us About Your Business
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what your business does and what you'd like us to build or improve..."
                value={formData.businessDetails}
                onChange={(e) => setFormData({ ...formData, businessDetails: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Approximate Project Scale */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Approximate Project Scale
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {['Just exploring', 'Small project', 'Medium project', 'Larger/custom project', 'Not sure'].map((scale) => (
                  <button
                    type="button"
                    key={scale}
                    onClick={() => setFormData({ ...formData, projectScale: scale })}
                    className={`py-2.5 px-2 text-[11px] font-semibold rounded-xl border transition-all text-center ${
                      formData.projectScale === scale
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {scale}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
