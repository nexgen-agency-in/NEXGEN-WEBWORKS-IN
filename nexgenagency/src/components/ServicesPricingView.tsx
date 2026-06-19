import { CAPABILITIES, PR_TIERS } from '../data';
import { TabType, ProjectClassificationType } from '../types';
import { Code, Brush, TrendingUp, Share2, CheckCircle, Clock, RefreshCw, Bolt, Headphones, ShoppingCart, Layers, Store, Bot, BarChart4, Sparkles, Award } from 'lucide-react';

interface ServicesPricingViewProps {
  onSelectTier: (classification: ProjectClassificationType) => void;
}

export default function ServicesPricingView({ onSelectTier }: ServicesPricingViewProps) {
  
  // Custom lookup for capability icons
  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-tertiary" />;
      case 'Brush':
        return <Brush className="w-6 h-6 text-tertiary" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-tertiary" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-tertiary" />;
      default:
        return <Code className="w-6 h-6 text-tertiary" />;
    }
  };

  // Custom lookup for feature metrics icons
  const getFeatureIcon = (iconName: string, highlight?: boolean) => {
    const colorClass = highlight ? 'text-[#8A2BE2]' : 'text-tertiary';
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className={`w-5 h-5 ${colorClass}`} />;
      case 'Clock':
        return <Clock className={`w-5 h-5 ${colorClass}`} />;
      case 'RefreshCw':
        return <RefreshCw className={`w-5 h-5 ${colorClass}`} />;
      case 'Bolt':
        return <Bolt className={`w-5 h-5 ${colorClass}`} />;
      case 'Headphones':
        return <Headphones className={`w-5 h-5 ${colorClass}`} />;
      case 'ShoppingCart':
        return <ShoppingCart className={`w-5 h-5 ${colorClass}`} />;
      case 'Layers':
        return <Layers className={`w-5 h-5 ${colorClass}`} />;
      case 'Store':
        return <Store className={`w-5 h-5 ${colorClass}`} />;
      case 'Bot':
        return <Bot className={`w-5 h-5 ${colorClass}`} />;
      case 'BarChart4':
        return <BarChart4 className={`w-5 h-5 ${colorClass}`} />;
      case 'Sparkles':
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <CheckCircle className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  // Convert package Tier IDs to Contact project classification parameters
  const mapTierToClassification = (tierId: string): ProjectClassificationType => {
    switch (tierId) {
      case 'basic':
        return 'web_app';
      case 'professional':
        return 'corporate_site';
      case 'ecommerce':
        return 'ecommerce';
      default:
        return 'other_protocol';
    }
  };

  return (
    <div className="flex flex-col w-full px-6 md:px-12 max-w-7xl mx-auto py-10">
      
      {/* PAGE HEADER */}
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
          Our Services &amp; Pricing
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed font-light">
          Elevate your digital presence with our cutting-edge web solutions. We combine technical authority with premium design to deliver exceptional results.
        </p>
      </div>

      {/* SECTION 1: CAPABILITIES */}
      <section className="mb-28" id="capabilities-section">
        {/* Section Divider Line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] bg-secondary-container/30 flex-grow" />
          <h2 className="font-display text-3xl font-bold px-6 text-glow text-white">
            Capabilities
          </h2>
          <div className="h-[1px] bg-secondary-container/30 flex-grow" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {CAPABILITIES.map((cap) => {
            const isWide = cap.isCore || cap.id === 'sm_presence';
            const colClass = isWide ? 'md:col-span-2 bg-gradient-to-br from-transparent to-[#000080]/10' : '';

            return (
              <div
                key={cap.id}
                className={`glass-panel rounded-2xl p-8 flex flex-col justify-between group hover:border-white/30 transition-all duration-300 relative overflow-hidden ${colClass}`}
              >
                {/* Visual back icon overlay */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none select-none">
                  {getCapabilityIcon(cap.iconName)}
                </div>

                <div className="flex flex-col items-start text-left">
                  {/* Tag if core */}
                  {cap.isCore && (
                    <span className="inline-block bg-[#000080] text-white font-sans text-label-sm px-3.5 py-1 rounded-full mb-4 font-semibold shadow-inner">
                      Core Competency
                    </span>
                  )}

                  {!cap.isCore && (
                    <div className="p-2.5 rounded-lg bg-white/5 mb-4 group-hover:bg-[#8A2BE2]/20 border border-white/5 transition-colors duration-300">
                      {getCapabilityIcon(cap.iconName)}
                    </div>
                  )}

                  <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant max-w-xl font-light">
                    {cap.description}
                  </p>
                </div>

                {/* Tags if any */}
                {cap.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-label-sm text-on-surface-variant border border-outline-variant/30 px-3 py-1 rounded bg-[#131313]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: INVESTMENT PRICING */}
      <section className="mb-16" id="investment-section">
        {/* Section Divider Line */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] bg-secondary-container/30 flex-grow" />
          <h2 className="font-display text-3xl font-bold px-6 text-glow text-white">
            Investment
          </h2>
          <div className="h-[1px] bg-secondary-container/30 flex-grow" />
        </div>

        {/* Verified domain badge */}
        <div className="text-center mb-16">
          <div className="font-sans text-label-sm text-tertiary bg-tertiary/10 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-tertiary/20 shadow-inner max-w-full text-left sm:text-center">
            <Award className="w-5 h-5 text-tertiary flex-shrink-0 animate-scale-pulse" />
            <span className="font-medium">
              Domain registration and payment gateway integration included in <strong className="text-white">EVERY</strong> plan.
            </span>
          </div>
        </div>

        {/* Pricing Cards columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {PR_TIERS.map((tier) => {
            const isPopular = tier.popular;
            
            // Layout conditions based on popularity state
            const borderClass = isPopular 
              ? 'border-[#8A2BE2] bg-[#0c0c0d]/95 shadow-[0_15px_40px_-5px_rgba(138,43,226,0.15)] md:scale-[1.03] glow-active z-10' 
              : 'border-white/5 hover:border-white/10 hover:shadow-xl';

            const buttonClass = isPopular
              ? 'bg-[#8A2BE2] text-white border border-[#a25cf6] hover:bg-[#9d3df5] hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]'
              : 'bg-white/5 text-on-surface border border-white/10 hover:bg-white/10';

            return (
              <div
                key={tier.id}
                id={`pricing-card-${tier.id}`}
                className={`glass-panel rounded-2xl p-8 flex flex-col relative transition-all duration-300 relative ${borderClass}`}
              >
                {/* Popular banner top element */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8A2BE2] text-white font-sans text-label-sm font-semibold px-5 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_15px_rgba(138,43,226,0.6)] tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                {/* Card Title Details */}
                <div className="mb-8 text-left">
                  <h3 className={`font-display text-2xl font-bold text-white mb-2 ${isPopular ? 'text-glow' : ''}`}>
                    {tier.name}
                  </h3>
                  <div className="font-display text-4xl font-extrabold text-white mb-2">
                    {tier.price}
                  </div>
                  <p className="font-sans text-body-md text-on-surface-variant">
                    {tier.description}
                  </p>
                </div>

                {/* Pricing Features Lists */}
                <ul className="flex flex-col gap-4 mb-8 text-left flex-grow">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx}>
                      {/* Sub Divider line */}
                      {feat.separator && (
                        <li className="h-[1px] bg-[#000080]/20 w-full my-2.5" />
                      )}
                      
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {getFeatureIcon(feat.icon || 'CheckCircle', feat.highlight)}
                        </div>
                        <span className={`font-sans text-body-md ${
                          feat.highlight 
                            ? 'text-white font-semibold' 
                            : feat.metric 
                              ? 'text-on-surface-variant font-light' 
                              : 'text-on-surface'
                        }`}>
                          {feat.text}
                        </span>
                      </li>
                    </div>
                  ))}
                </ul>

                {/* Select button CTA */}
                <button
                  onClick={() => onSelectTier(mapTierToClassification(tier.id))}
                  className={`w-full py-3.5 rounded-lg font-sans text-label-sm font-semibold tracking-wider transition-all duration-300 active:scale-[0.98] ${buttonClass}`}
                  id={`cta-btn-${tier.id}`}
                >
                  {tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra Visual Padding */}
      <div className="h-12 pointer-events-none" />
    </div>
  );
}
