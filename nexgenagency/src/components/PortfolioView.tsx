import { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data';
import { ArrowUpRight, BarChart3, Award, ExternalLink, Calendar, Grid, Layers } from 'lucide-react';

export default function PortfolioView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Application', 'Corporate Platform', 'E-Commerce Architecture'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col w-full px-6 md:px-12 max-w-7xl mx-auto py-10" id="portfolio-canvas">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight animate-fade-in">
          Selected Works
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed font-light">
          A showcase of high-end enterprise architectures, premium visual assets, and high-performance applications built by our studio.
        </p>
      </div>

      {/* FILTER BUTTONS ROW */}
      <div className="flex flex-wrap gap-3 justify-center mb-14 font-sans" id="portfolio-categories-filters">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const style = isSelected
            ? 'bg-gradient-to-r from-[#8A2BE2] to-[#6700b5] border-tertiary text-white shadow-md shadow-[#8A2BE2]/25 font-bold'
            : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-white hover:bg-white/5';

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer text-xs font-semibold tracking-wide ${style}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PORTFOLIO GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-items-grid">
        {filteredProjects.map((proj, idx) => {
          return (
            <div
              key={proj.id}
              className="glass-panel rounded-2xl overflow-hidden group hover:border-[#8A2BE2]/40 transition-all duration-500 flex flex-col justify-between shadow-xl"
              id={`portfolio-item-${proj.id}`}
            >
              {/* Media Container block */}
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                {/* Floating tags */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <span className="bg-black/60 text-white font-sans text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-[#000080]/90 text-white font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[#8A2BE2]/40 backdrop-blur-md flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-tertiary animate-pulse" />
                    <span>PERF: {proj.performanceScore}%</span>
                  </span>
                </div>

                {/* Cover Photo */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  src={proj.image}
                  alt={`${proj.title} Platform Snapshot Screenshot`}
                  referrerPolicy="no-referrer"
                />

                {/* Glossy Overlay detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
              </div>

              {/* Textual detail */}
              <div className="p-8 text-left flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-tertiary transition-colors duration-300 tracking-tight">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A2BE2]" />
                    <span>LAUNCH: {proj.launchYear}</span>
                  </span>
                </div>

                <p className="font-sans text-body-md text-on-surface-variant mb-6 font-light leading-relaxed">
                  {proj.description}
                </p>

                {/* Coding tools specs */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-sans text-[11px] text-zinc-400 bg-[#131313] border border-outline-variant/20 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Submitting link triggering interactive alerts */}
                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center mt-auto">
                  <button
                    onClick={() => alert(`Launching live secure preview environment for "${proj.title}"... Please complete client onboarding session first.`)}
                    className="flex items-center gap-1.5 text-xs font-sans font-bold text-white group-hover:text-tertiary transition-colors cursor-pointer"
                  >
                    <span>Launch Prototype</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <span className="font-sans text-[10px] uppercase text-zinc-600 font-bold tracking-widest relative">
                    ONLINE DEPLOYED
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative empty spacing box */}
      <div className="h-16 pointer-events-none" />
    </div>
  );
}
