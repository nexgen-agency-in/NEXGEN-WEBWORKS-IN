import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  SlidersHorizontal, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Sparkles,
  Quote
} from 'lucide-react';
import { TESTIMONIALS, AGENCY_FAQS } from '../data';
import { Testimonial, FAQItem } from '../types';

export default function TestimonialsView() {
  const [activeTab, setActiveTab] = useState<'carousel' | 'grid'>('carousel');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<string | null>('q1');

  // Carousel handlers
  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Group FAQs by category for easier hierarchy
  const categories = Array.from(new Set(AGENCY_FAQS.map(faq => faq.category)));

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials-faqs-section">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/35 border border-tertiary/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-tertiary animate-pulse" />
            <span className="text-tertiary uppercase text-[10px] tracking-widest font-semibold font-sans">
              Validation &amp; Inquiries
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Client Success &amp; Agency Standards
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant font-light leading-relaxed">
            Discover real-world outcomes secured by our design team, and learn what parameters should matter most when hiring an expert developer.
          </p>
        </div>

        {/* --- TESTIMONIALS SECTION --- */}
        <div className="mb-28" id="testimonials-block">
          
          {/* Tabs for Carousel vs Grid */}
          <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4 mb-10">
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Quote className="w-5 h-5 text-tertiary" /> Partner Transcripts
            </h3>
            <div className="flex bg-surface-container-low p-1 rounded-lg border border-outline-variant/30">
              <button
                onClick={() => setActiveTab('carousel')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-sans transition-all cursor-pointer ${
                  activeTab === 'carousel'
                    ? 'bg-secondary-container text-white font-medium'
                    : 'text-on-surface-variant hover:text-white'
                }`}
                id="tab-carousel-toggle"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" /> Carousel View
              </button>
              <button
                onClick={() => setActiveTab('grid')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-sans transition-all cursor-pointer ${
                  activeTab === 'grid'
                    ? 'bg-secondary-container text-white font-medium'
                    : 'text-on-surface-variant hover:text-white'
                }`}
                id="tab-grid-toggle"
              >
                <Grid className="w-3.5 h-3.5" /> Grid View
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'carousel' ? (
              /* INTERACTIVE CAROUSEL VIEW */
              <motion.div
                key="carousel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl mx-auto"
                id="testimonials-carousel"
              >
                <div className="min-h-[320px] bg-surface-container-high/40 backdrop-blur-md rounded-2xl border border-outline-variant/30 p-8 sm:p-12 relative shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-tertiary/50 to-transparent" />
                  
                  {/* Decorative big quote icon */}
                  <span className="absolute right-8 top-6 text-outline-variant/10 font-sans font-extrabold text-[120px] leading-none select-none pointer-events-none">
                    ”
                  </span>

                  {/* Carousel Content */}
                  <div className="flex flex-col h-full justify-between relative z-10">
                    <div className="mb-6">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: TESTIMONIALS[carouselIndex].rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-tertiary text-tertiary" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="font-sans text-lg sm:text-xl text-on-surface leading-relaxed italic font-light">
                        "{TESTIMONIALS[carouselIndex].text}"
                      </blockquote>
                    </div>

                    {/* Autor details */}
                    <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6">
                      <img
                        src={TESTIMONIALS[carouselIndex].avatar}
                        alt={`${TESTIMONIALS[carouselIndex].name} - portrait headshot`}
                        className="w-14 h-14 rounded-full object-cover border-2 border-tertiary/30 shadow-md"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display text-white font-bold text-base">
                          {TESTIMONIALS[carouselIndex].name}
                        </h4>
                        <p className="font-sans text-xs text-on-surface-variant font-medium mt-0.5">
                          {TESTIMONIALS[carouselIndex].role} &middot; <span className="text-tertiary">{TESTIMONIALS[carouselIndex].company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left and Right Manual Controls */}
                <div className="flex justify-between items-center mt-6 px-2">
                  <div className="flex gap-1.5">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          carouselIndex === idx ? 'w-8 bg-tertiary' : 'w-2 bg-outline-variant hover:bg-white/30'
                        }`}
                        id={`carousel-dot-${idx}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handlePrev}
                      className="p-3 bg-surface-container rounded-full border border-outline-variant/40 hover:border-white/30 hover:bg-white/5 text-white cursor-pointer transition-all active:scale-95"
                      id="carousel-prev"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 bg-surface-container rounded-full border border-outline-variant/40 hover:border-white/30 hover:bg-white/5 text-white cursor-pointer transition-all active:scale-95"
                      id="carousel-next"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* PREMIUM STATIC GRID VIEW */
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                id="testimonials-grid"
              >
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex flex-col justify-between bg-surface-container-high/30 backdrop-blur-sm rounded-xl border border-outline-variant/20 p-6 shadow-lg hover:border-tertiary/40 hover:shadow-tertiary/5 transition-all duration-300 group"
                  >
                    <div>
                      {/* Rating + Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-tertiary text-tertiary" />
                        ))}
                      </div>

                      {/* Quote snippet */}
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6 font-light italic">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 border-t border-outline-variant/20 pt-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name} corporate headshot portrait`}
                        className="w-10 h-10 rounded-full object-cover border border-outline-variant"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-display text-white text-sm font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="font-sans text-[11px] text-on-surface-variant leading-none mt-0.5">
                          {testimonial.role} &middot; <span className="text-tertiary">{testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* --- CLIENT WEBSITES DELIVERED GALLERY --- */}
        <div id="delivered-websites-showcase" className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-outline-variant/30 pb-4">
            <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-tertiary" /> Delivered Solutions & Live Platforms
            </h3>
            <span className="font-sans text-xs text-on-surface-variant font-light">
              Interactive previews of testimonial customer websites verified on Google Lighthouse
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'ws1',
                client: 'Aura Premium Fragrances',
                category: 'E-Commerce Platform',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
                speedScore: '100',
                seoScore: '100',
                techStack: 'React / Vite / Tailwind',
                quoteHook: 'Our load times dropped by 64%, and conversion increased instantly.',
                badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
              },
              {
                id: 'ws2',
                client: 'Fintech Nexus Systems',
                category: 'Enterprise SaaS App',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
                speedScore: '99',
                seoScore: '100',
                techStack: 'TypeScript / Express Proxy',
                quoteHook: 'A standard of design and technical excellence that is difficult to find.',
                badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
              },
              {
                id: 'ws3',
                client: 'Krypton Secure Wallet',
                category: 'Web3 dApp Dashboard',
                image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
                speedScore: '100',
                seoScore: '100',
                techStack: 'React / Recharts / D3',
                quoteHook: 'Built Krypton with absolute cryptographic integrity and stunning visuals.',
                badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
              },
              {
                id: 'ws4',
                client: 'ScaleFlow AI CRM',
                category: 'Corporate Growth Portal',
                image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80',
                speedScore: '98',
                seoScore: '100',
                techStack: 'Vite / Tailwind / Motion',
                quoteHook: 'Continuous SMM campaigns and custom graphics assets brought enterprise contracts.',
                badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
              }
            ].map((site) => (
              <motion.div
                key={site.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-surface-container/40 rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col group h-full shadow-lg"
              >
                {/* Website Thumbnail Screenshot container */}
                <div className="relative aspect-[16/10] bg-surface-container-low overflow-hidden border-b border-outline-variant/20">
                  {/* Glass Header simulating standard Chrome browser frame bar */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-surface-container-high/90 z-20 flex items-center justify-between px-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[8px] text-on-surface-variant font-mono truncate max-w-[120px]">
                      {site.client.toLowerCase().replace(/\s+/g, '')}.com
                    </span>
                    <span className="w-1.5 h-1.5" />
                  </div>

                  {/* Client image screenshot mock */}
                  <img
                    src={site.image}
                    alt={`${site.client} finished live web app screenshot preview`}
                    className="w-full h-full object-cover pt-6 transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Lighthouse Badge absolute indicator */}
                  <div className="absolute bottom-2 right-2 flex gap-1 z-10 backdrop-blur-md bg-black/70 px-2 py-1 rounded-md border border-white/10">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[9px] font-mono font-semibold text-white">LCP: 0.5s</span>
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] text-tertiary font-semibold tracking-wider font-mono uppercase">
                        {site.category}
                      </span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${site.badgeColor}`}>
                        SEO: {site.seoScore} &middot; SPD: {site.speedScore}
                      </span>
                    </div>

                    <h4 className="font-display text-white font-bold text-base mb-2 group-hover:text-tertiary transition-colors">
                      {site.client}
                    </h4>

                    <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed font-light mb-4 italic">
                      "{site.quoteHook}"
                    </p>
                  </div>

                  <div className="border-t border-outline-variant/20 pt-3 mt-auto">
                    <div className="flex justify-between items-center text-[10px] text-on-surface-variant">
                      <span className="font-mono">{site.techStack}</span>
                      <span className="text-white hover:text-tertiary transition-colors flex items-center gap-1 cursor-pointer">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- AGENCY CRITICAL QA / FAQS --- */}
        <div id="agency-qa-block" className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 border-b border-outline-variant/20 pb-4 justify-center sm:justify-start">
            <MessageSquare className="w-5 h-5 text-tertiary" />
            <h3 className="font-display text-2xl font-bold text-white text-center sm:text-left">
              Key Questions for Website Developing Agencies
            </h3>
          </div>

          <p className="font-sans text-body-md text-on-surface-variant mb-10 text-center sm:text-left font-light leading-relaxed">
            Hiring the wrong engineering studio can be an expensive, high-friction mistake. Before committing, demand definitive answers on these critical security, IP rights, and loading speed milestones.
          </p>

          <div className="space-y-4">
            {AGENCY_FAQS.map((faq) => {
              const isExpanded = expandedFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'border-tertiary bg-surface-container-high/40' 
                      : 'border-outline-variant/30 bg-surface-container-high/10 hover:border-outline-variant hover:bg-surface-container-high/20'
                  }`}
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-6 text-left cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-mono text-tertiary bg-secondary-container/20 px-2.5 py-0.5 rounded-full mr-3">
                        {faq.category}
                      </span>
                      <h4 className="font-display text-base sm:text-lg font-bold text-white mt-2">
                        {faq.question}
                      </h4>
                    </div>
                    <div className="p-1.5 rounded-full bg-surface-container border border-outline-variant/50 ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-tertiary" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white hover:text-tertiary" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-on-surface-variant border-t border-outline-variant/20">
                          <div className="pt-4 flex gap-3 text-sm font-sans font-light leading-relaxed">
                            <span className="mt-0.5 text-tertiary flex-shrink-0">
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                            <div>
                              <strong className="text-white block font-medium mb-1">Our Standard Protocol:</strong>
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Expert CTA note under FAQs */}
          <div className="mt-12 bg-gradient-to-r from-secondary-container/10 via-[#0a0a0c] to-secondary-container/10 border border-outline-variant/40 p-6 rounded-xl text-center">
            <h4 className="font-display text-lg font-bold text-white mb-2">Have a Custom Technical Architecture Question?</h4>
            <p className="font-sans text-xs text-on-surface-variant mb-4 font-light">
              Speak directly with Ayushman and our team. No sales pitch, just pure structural strategy.
            </p>
            <div className="w-16 h-[1px] bg-tertiary/50 mx-auto" />
          </div>

        </div>

      </div>
    </section>
  );
}
