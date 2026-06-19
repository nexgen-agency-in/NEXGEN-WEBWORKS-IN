import { useState } from 'react';
import { TabType } from '../types';
import { Menu, X, Share2, Sparkles, Wand2 } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onStartProject: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onStartProject }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', tab: 'services' as TabType },
    { label: 'Portfolio', tab: 'portfolio' as TabType },
    { label: 'Pricing', tab: 'pricing' as TabType },
    { label: 'Contact', tab: 'contact' as TabType },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/35 backdrop-blur-[20px] border-b border-white/10 px-6 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="font-display text-2xl font-extrabold text-on-surface flex items-center gap-2 cursor-pointer group select-none"
          id="brand-logo"
        >
          <div className="p-1.5 rounded-lg bg-secondary-container/20 border border-secondary/30 text-tertiary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <Share2 className="w-5 h-5" />
          </div>
          <span className="tracking-tight bg-gradient-to-r from-white via-on-surface to-on-surface bg-clip-text text-transparent">
            NexGen <span className="text-white">WebWorks</span>
          </span>
        </div>

        {/* Desktop Navigation Link Tabs */}
        <nav className="hidden md:flex gap-2 items-center font-sans">
          {navItems.map((item) => {
            const isSelected = activeTab === item.tab || 
              (item.tab === 'services' && activeTab === 'services') ||
              (item.tab === 'pricing' && activeTab === 'pricing');
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.tab)}
                id={`nav-link-${item.tab}`}
                className={`text-body-md relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  isSelected 
                    ? 'text-white font-semibold' 
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                }`}
              >
                {item.label}
                {isSelected && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Start a Project Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onStartProject}
            id="start-project-btn-desktop"
            className="inline-flex items-center justify-center gap-1.5 bg-[#8A2BE2] text-white px-5 py-2 rounded-lg font-sans text-label-sm font-semibold border border-tertiary-fixed-dim/30 hover:glow-active hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-on-surface p-2 hover:bg-white/5 rounded-lg transition-all"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Slide-out Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in-50 slide-in-from-top-5 duration-250">
          <div className="flex flex-col gap-2 font-sans">
            {navItems.map((item) => {
              const isSelected = activeTab === item.tab;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.tab)}
                  className={`text-left px-4 py-3 rounded-xl transition-all ${
                    isSelected 
                      ? 'bg-secondary-container/30 text-white font-bold border-l-2 border-[#8A2BE2]' 
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              onStartProject();
            }}
            className="w-full bg-[#8A2BE2] text-white py-3 px-4 rounded-xl text-center font-semibold text-body-md flex items-center justify-center gap-2 shadow-lg border border-tertiary-fixed-dim/30 hover:bg-[#9d3df5] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start a Project</span>
          </button>
        </div>
      )}
    </header>
  );
}
