/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TabType, ProjectClassificationType } from './types';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ServicesPricingView from './components/ServicesPricingView';
import ContactView from './components/ContactView';
import PortfolioView from './components/PortfolioView';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [classification, setClassification] = useState<ProjectClassificationType>('web_app');

  // Multi-tier purchase selection helper
  const handleSelectPricingTier = (selectedClass: ProjectClassificationType) => {
    setClassification(selectedClass);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start a project custom button action routing
  const handleStartProjectFlow = () => {
    setClassification('web_app');
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'services':
        return <ServicesPricingView onSelectTier={handleSelectPricingTier} />;
      case 'pricing':
        // Reuse same view scroll anchor or pass pricing focus to services pricing
        return <ServicesPricingView onSelectTier={handleSelectPricingTier} />;
      case 'portfolio':
        return <PortfolioView />;
      case 'contact':
        return (
          <ContactView 
            selectedClassification={classification} 
            setSelectedClassification={setClassification} 
          />
        );
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="bg-void-gradient bg-background text-on-background antialiased min-h-screen flex flex-col relative overflow-x-hidden font-sans">
      
      {/* 1. LAYERED AMBIENT LIGHTING BACKGROUND OUTLINES */}
      <div className="fixed inset-0 z-[-1] pointer-events-none select-none">
        {/* Soft violet plasma bloom top left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary-container/10 blur-[130px] animate-pulse-slow" />
        {/* Navy depth gradient top right */}
        <div className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-[#8A2BE2]/5 blur-[150px]" />
        {/* Soft violet plasma bloom bottom left */}
        <div className="absolute bottom-[-15%] left-[-5%] w-[55vw] h-[55vw] rounded-full bg-secondary-container/15 blur-[160px]" />
        {/* Cosmic accent blue blob bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container/10 blur-[140px]" />
      </div>

      {/* 2. TOP NAV COLLAPSIBLE CONTAINER */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onStartProject={handleStartProjectFlow} 
      />

      {/* 3. MAIN CONTROLLER CANVAS */}
      <main className="flex-grow pt-[115px] pb-10 relative z-10 w-full transition-all duration-500">
        <div className="w-full">
          {renderActiveView()}
        </div>
      </main>

      {/* 4. BRIGHT CORPORATE FOOTER */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
