import { TabType } from '../types';
import { Share2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest w-full py-16 px-6 md:px-12 border-t border-secondary-container/20 mt-auto relative z-10 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-sm">
          <div 
            onClick={() => handleNavClick('home')} 
            className="font-display text-2xl font-bold text-on-surface flex items-center gap-2 cursor-pointer group select-none hover:opacity-90"
          >
            <div className="p-1.5 rounded-lg bg-secondary-container/20 border border-secondary/30 text-tertiary flex items-center justify-center">
              <Share2 className="w-5 h-5 text-tertiary" />
            </div>
            <span className="tracking-tight text-white">
              NexGen <span className="text-tertiary">WebWorks</span>
            </span>
          </div>
          <p className="font-sans text-body-md text-on-surface-variant font-light leading-relaxed">
            Engineering digital supremacy through precision code, premium layouts, and visionary design.
          </p>
          <div className="font-sans text-xs text-on-surface-variant mt-2 select-none">
            &copy; 2024 NexGen WebWorks. All rights reserved.
          </div>
        </div>

        {/* Links Navigation grids */}
        <div className="flex flex-row gap-16 md:gap-24 text-left font-sans">
          
          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-label-sm text-on-surface tracking-wider uppercase mb-1 text-white font-semibold">
              Navigation
            </h4>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-body-md text-on-surface-variant hover:text-tertiary text-left bg-transparent border-none p-0 transition-colors duration-200 cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className="text-body-md text-on-surface-variant hover:text-tertiary text-left bg-transparent border-none p-0 transition-colors duration-200 cursor-pointer"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-body-md text-on-surface-variant hover:text-tertiary text-left bg-transparent border-none p-0 transition-colors duration-200 cursor-pointer"
            >
              Pricing
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-sans text-label-sm text-on-surface tracking-wider uppercase mb-1 text-white font-semibold">
              Legal &amp; Support
            </h4>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-body-md text-on-surface-variant hover:text-tertiary text-left bg-transparent border-none p-0 transition-colors duration-200 cursor-pointer font-medium text-white"
            >
              Contact
            </button>
            <button 
              onClick={() => alert('NexGen WebWorks adheres to standard enterprise privacy shields. Your transmitted project blueprints and system specifications are kept secure in accordance with GDPR and ISO certifications.')}
              className="text-body-md text-on-surface-variant hover:text-tertiary text-left bg-transparent border-none p-0 transition-colors duration-200 cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
