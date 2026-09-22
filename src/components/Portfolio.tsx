import React, { useState } from 'react';
import { Eye, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { PortfolioProject } from '../types';

interface PortfolioProps {
  onOpenContact: (defaultService?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Grocery', 'Retail', 'Food', 'Lifestyle', 'Services', 'Startup'];

  const filteredProjects = activeCategory === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Portfolio & Prototypes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Explore <span className="text-gradient-emerald">Our Work</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
            Here are concept designs and showcase prototypes built for local shops, grocery stores, cafes, salons, and digital startups.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                      {project.category}
                    </span>
                    {project.isDemoConcept && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700">
                        Concept Showcase
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Services Provided Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.servicesProvided.map((svc, i) => (
                      <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                <button
                  onClick={() => setSelectedProjectModal(project)}
                  className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span>View Case Study</span>
                </button>
                <button
                  onClick={() => onOpenContact(`Inquiry based on ${project.title}`)}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Build Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden h-48 mb-6">
              <img
                src={selectedProjectModal.imageUrl}
                alt={selectedProjectModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20">
                {selectedProjectModal.category}
              </span>
              <span className="text-xs text-slate-400">Concept Demo Showcase</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedProjectModal.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProjectModal.fullCaseStudy}
            </p>

            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services Demonstrated:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProjectModal.servicesProvided.map((s, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-slate-950 text-emerald-300 border border-emerald-500/20">
                  {s}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400 mb-6">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                All portfolio entries reflect our design and development standards. As our agency expands, real client case studies will replace demo placeholders.
              </span>
            </div>

            <button
              onClick={() => {
                const title = selectedProjectModal.title;
                setSelectedProjectModal(null);
                onOpenContact(`Project inquiry similar to: ${title}`);
              }}
              className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              <span>Build Something Similar For My Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
