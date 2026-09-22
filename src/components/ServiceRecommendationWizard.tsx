import React, { useState } from 'react';
import { HelpCircle, Sparkles, RotateCcw, ArrowRight } from 'lucide-react';

interface WizardProps {
  onSelectRecommendation: (recText: string) => void;
}

export const ServiceRecommendationWizard: React.FC<WizardProps> = ({ onSelectRecommendation }) => {
  const [answers, setAnswers] = useState({
    hasWebsite: '',
    onlineDiscovery: '',
    wantsReels: '',
    wantsManagement: ''
  });

  const [step, setStep] = useState(1);

  const handleSelectOption = (key: keyof typeof answers, val: string) => {
    setAnswers(prev => ({ ...prev, [key]: val }));
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(5); // Show recommendation result
    }
  };

  const resetWizard = () => {
    setAnswers({
      hasWebsite: '',
      onlineDiscovery: '',
      wantsReels: '',
      wantsManagement: ''
    });
    setStep(1);
  };

  const getRecommendation = () => {
    if (answers.hasWebsite === 'No' && answers.wantsReels === 'Yes' && answers.wantsManagement === 'Yes') {
      return "Complete Digital Presence Package (Website Development + Managed Service + Instagram Reels Package)";
    }
    if (answers.hasWebsite === 'No' && answers.wantsManagement === 'Yes') {
      return "Managed Website Development (Custom Mobile Website + We Manage Maintenance)";
    }
    if (answers.hasWebsite === 'No') {
      return "Website Development Service (Custom Mobile-First Website for your shop)";
    }
    if (answers.wantsReels === 'Yes') {
      return "Social Media & Instagram Reels Growth Package";
    }
    return "Website Management & Digital Promotion Setup";
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Interactive Helper</span>
                <h3 className="text-xl font-bold text-white">Not Sure What You Need?</h3>
              </div>
            </div>

            {step <= 4 && (
              <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                Step {step} of 4
              </span>
            )}
          </div>

          {/* Question 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-extrabold text-white">
                1. Do you already have a website for your business?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['No, I need one built', 'Yes, but it needs a makeover', 'Not sure / Need advice'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption('hasWebsite', opt.includes('No') ? 'No' : 'Yes')}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-sm font-semibold text-slate-200 hover:text-white transition-all text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-extrabold text-white">
                2. Can customers easily discover your store on Google Maps & Search?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['No, customers struggle to find us', 'Yes, we have Google Maps set up', 'Not sure yet'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption('onlineDiscovery', opt)}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-sm font-semibold text-slate-200 hover:text-white transition-all text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-extrabold text-white">
                3. Do you want to showcase your store & products through Instagram Reels & videos?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Yes, video reels sound great', 'No, just website for now', 'Maybe in the future'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption('wantsReels', opt.includes('Yes') ? 'Yes' : 'No')}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-sm font-semibold text-slate-200 hover:text-white transition-all text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h4 className="text-lg font-extrabold text-white">
                4. Would you like us to handle website updates & maintenance for you after launch?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Yes! I want hands-free maintenance', 'No, I prefer managing it myself', 'I would like to decide later'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectOption('wantsManagement', opt.includes('Yes') ? 'Yes' : 'No')}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 text-sm font-semibold text-slate-200 hover:text-white transition-all text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Result Recommendation */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" /> Recommended Package For Your Business
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-3">
                  "{getRecommendation()}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Based on your choices, this plan gives your business the exact online presence and support needed without unnecessary extras.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectRecommendation(getRecommendation())}
                  className="w-full sm:flex-1 py-4 text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <span>Talk to Us About It</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={resetWizard}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-semibold text-slate-400 bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
