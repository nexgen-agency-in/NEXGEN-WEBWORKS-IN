import { TabType } from '../types';
import { STRATEGIST_FOUNDERS } from '../data';
import { ArrowRight, Code, Brush, Headphones, Mail, Hexagon, Sparkles, Cpu, CpuIcon } from 'lucide-react';
import { motion } from 'motion/react';
import TestimonialsView from './TestimonialsView';

interface HomeViewProps {
  setActiveTab: (tab: TabType) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  // Map icon name string to Lucide component
  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Brush':
        return <Brush className="w-5 h-5" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section 
        className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full relative mb-16 md:mb-24 pt-10"
        id="hero-section"
      >
        <div className="flex flex-col items-center relative z-10 w-full max-w-5xl mx-auto">
          {/* Top Area: Web Engineering Premium Product Showcase (Professional Website Hero Image) */}
          <div className="relative select-none w-full max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6 mb-20 md:mb-24" id="hero-responsive-mockup-wrapper">
            
            {/* Back glowing ambient orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0" />
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-60 sm:h-60 bg-tertiary/15 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0" />
            
            <div className="relative z-10 w-full flex flex-col justify-center items-center">
              
              {/* DESKTOP BROWSER FRAME MOCKUP */}
              <motion.div 
                className="w-full aspect-[16/10] bg-surface-container-high/65 backdrop-blur-md rounded-2xl border border-outline-variant/40 shadow-2xl overflow-hidden relative group"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Simulated Web Browser Tab Bar */}
                <div className="h-7 bg-surface-container-high z-20 flex items-center justify-between px-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 bg-background/50 rounded-md text-[9px] text-on-surface-variant font-mono w-44 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                    <span>nexgen-webworks.in</span>
                  </div>
                  <div className="w-2 h-2" />
                </div>

                {/* Professional Website Showcase Image */}
                <div className="relative w-full h-[calc(100%-28px)] bg-[#0c0c10] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    alt="NexGen modern corporate web layout interactive screen"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-[1.03] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* OVERLAPPING MOBILE INTERACTIVE SCREEN */}
              <motion.div 
                className="absolute -bottom-8 -left-2 sm:-left-6 w-[120px] sm:w-[150px] aspect-[9/19] bg-surface-container-high rounded-2xl border border-outline-variant/60 shadow-2xl p-1 sm:p-1.5 overflow-hidden group/mobile"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Physical Notch/Speaker Frame detail */}
                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2.5 sm:h-3 bg-black rounded-full z-20 flex justify-center items-center">
                  <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-zinc-800" />
                </div>

                <div className="w-full h-full rounded-[8px] sm:rounded-[10px] overflow-hidden relative bg-[#060608] pt-3 sm:pt-4">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80"
                    alt="Responsive visual platform on adaptive smartphone screen screenshot preview"
                    className="w-full h-full object-cover opacity-90 group-hover/mobile:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* OVERLAPPING QUALITY SEAL CHIP AND METRICS */}
              <motion.div 
                className="absolute -right-2 sm:-right-6 bottom-4 bg-[#0a0a0c]/90 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-tertiary/30 shadow-lg flex flex-col gap-1 sm:gap-1.5 z-20 max-w-[120px] sm:max-w-[160px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500" />
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider font-mono text-white font-semibold">
                    System Clean
                  </span>
                </div>
                <hr className="border-outline-variant/30" />
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] text-on-surface-variant font-sans font-light">Performance Score</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">100/100</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom Area: Hero Context Text */}
          <div className="flex flex-col items-center text-center max-w-4xl px-4 sm:px-6 w-full">
            
            {/* Pulsing tagline chip */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-[#8A2BE2]/30 shadow-[0_0_15px_rgba(138,43,226,0.15)] select-none hover:border-[#8A2BE2]/60 transition-all duration-300"
              id="hero-tagline-chip"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A2BE2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8A2BE2]"></span>
              </span>
              <span className="font-sans text-label-sm text-tertiary tracking-wider uppercase font-semibold">
                Engineering the Future
              </span>
            </div>

            {/* Giant Title */}
            <h1 
              className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white text-center"
              id="hero-title"
            >
              Next Generation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] via-[#a352f2] to-[#bfc2ff] text-glow">
                Digital Solutions.
              </span>
            </h1>

            {/* Subtitle with premium feel */}
            <p 
              className="font-sans text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light text-center"
              id="hero-description"
            >
              Premier Web Development, Graphic Design, and Social Media Marketing Agency. We forge high-performance digital experiences for enterprises demanding precision and scale.
            </p>

            {/* CTA Option Block */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center" id="hero-cta-box">
              <button 
                onClick={() => {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-sans text-body-md font-semibold bg-[#8A2BE2] text-white px-8 py-4 rounded-lg border border-[#a352f2] hover:glow-active hover:scale-[0.98] active:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => {
                  setActiveTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="font-sans text-body-md font-semibold glass-panel text-on-surface px-8 py-4 rounded-lg hover:bg-white/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP SECTION */}
      <section 
        className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-24 md:mb-32"
        id="leadership-section"
      >
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-tertiary uppercase text-xs tracking-widest font-semibold font-sans">The Architects</span>
            <div className="w-12 h-[1px] bg-secondary-container/50"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-bold text-white mb-4 leading-tight">
            Architects of Innovation
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl">
            The leadership driving technical excellence and creative mastery at NexGen WebWorks.
          </p>
        </div>

        {/* Founders bento-styled container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {STRATEGIST_FOUNDERS.map((founder, idx) => {
            // Apply layout staggered heights on md screens to simulate visual flow
            const alignmentClass = idx === 0 
              ? 'translate-y-0' 
              : idx === 1 
                ? 'translate-y-0 md:translate-y-8' 
                : 'translate-y-0 md:translate-y-16';

            return (
              <div 
                key={founder.name}
                id={`founder-card-${idx}`}
                className={`glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-[#8A2BE2]/50 transition-all duration-500 ${alignmentClass} shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]`}
              >
                {/* Purple back glow block */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#8A2BE2]/10 rounded-full blur-[50px] group-hover:bg-[#8A2BE2]/20 transition-all duration-500 pointer-events-none" />

                {/* Black-and-white visual filtering headshot */}
                <div className="w-24 h-24 rounded-full glass-panel mb-6 overflow-hidden border border-white/10 p-1 group-hover:border-tertiary/40 transition-colors duration-500">
                  <img 
                    className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={founder.image} 
                    alt={founder.alt}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Name & Role details */}
                <h3 className="font-display text-2xl font-bold mb-1 text-white group-hover:text-tertiary transition-colors duration-300">
                  {founder.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-on-surface font-sans text-[11px] font-semibold tracking-wide border border-secondary-container/40">
                    {founder.role}
                  </span>
                </div>

                <p className="font-sans text-body-md text-on-surface-variant mb-6 font-light leading-relaxed">
                  {founder.description}
                </p>

                {/* Reactive Actions footer */}
                <div className="flex gap-3 mt-auto relative z-10" id={`founder-links-${idx}`}>
                  <button 
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-[#8A2BE2]/30 hover:border-[#8A2BE2]/50 transition-all duration-300 cursor-pointer"
                    aria-label="Skill Details"
                  >
                    {getIcon(founder.primaryIcon)}
                  </button>
                  <a 
                    href={`mailto:nexgen.webworks@gmail.com?subject=Inquiry to ${founder.name}`}
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-[#8A2BE2]/30 hover:border-[#8A2BE2]/50 transition-all duration-300 cursor-pointer"
                    aria-label="Direct Mail"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. TESTIMONIALS & AGENCY QUESTION CHECKLIST */}
      <TestimonialsView />

      {/* Decorative vertical spacing gap for aesthetic pairing */}
      <div className="h-16 md:h-28 pointer-events-none" />
    </div>
  );
}
