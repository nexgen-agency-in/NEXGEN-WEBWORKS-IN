import React, { useState, useEffect } from 'react';
import { ProjectClassificationType, ContactFormInput } from '../types';
import { DIRECT_LINES, CONTACT_EMAIL } from '../data';
import { Phone, Mail, Cpu, Send, Loader2, CheckCircle2, History, Database, ShieldAlert, Trash2 } from 'lucide-react';

interface ContactViewProps {
  selectedClassification: ProjectClassificationType;
  setSelectedClassification: (val: ProjectClassificationType) => void;
}

interface SubmittedLog extends ContactFormInput {
  id: string;
  timestamp: string;
  status: 'QUEUED' | 'TRANSMITTED' | 'PROCESSED';
}

export default function ContactView({ selectedClassification, setSelectedClassification }: ContactViewProps) {
  // Input fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Submit state
  const [submitState, setSubmitState] = useState<'idle' | 'processing' | 'success'>('idle');
  const [historyLogs, setHistoryLogs] = useState<SubmittedLog[]>([]);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nexgen_transmissions');
      if (saved) {
        setHistoryLogs(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleClassificationChange = (type: ProjectClassificationType) => {
    setSelectedClassification(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please provide your Full Name and Email Address to initiate connection.');
      return;
    }

    setSubmitState('processing');

    setTimeout(() => {
      setSubmitState('success');
      
      const newLog: SubmittedLog = {
        id: 'TX-' + Math.floor(100000 + Math.random() * 900000),
        name,
        email,
        classification: selectedClassification,
        message: message || 'N/A - Standard Consult Request',
        timestamp: new Date().toLocaleTimeString(),
        status: 'TRANSMITTED',
      };

      const updated = [newLog, ...historyLogs];
      setHistoryLogs(updated);
      localStorage.setItem('nexgen_transmissions', JSON.stringify(updated));

      // Reset form fields after success animation completed
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSubmitState('idle');
      }, 3000);
    }, 1500);
  };

  const clearHistory = () => {
    if (confirm('Clear local transmission log history?')) {
      setHistoryLogs([]);
      localStorage.removeItem('nexgen_transmissions');
    }
  };

  // Human readable labels for tags
  const getClassificationLabel = (type: ProjectClassificationType) => {
    switch (type) {
      case 'web_app':
        return 'Web Application';
      case 'corporate_site':
        return 'Corporate Platform';
      case 'ecommerce':
        return 'E-Commerce Architecture';
      case 'other_protocol':
        return 'Other Protocol';
    }
  };

  return (
    <div className="flex flex-col w-full px-6 md:px-12 max-w-7xl mx-auto py-10" id="contact-canvas">
      
      {/* TWO COLUMN GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left w-full">
        
        {/* LEFT COLUMN: CONTACT CARDS BENTO */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Let's Build The Future.
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant font-light leading-relaxed">
              Ready to elevate your digital presence? Our engineering team is standing by to discuss your next high-performance web project.
            </p>
          </div>

          {/* Contact Details Bento Cards Grid */}
          <div className="flex flex-col gap-4">
            
            {/* Direct Line Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors cursor-default border-white/5 shadow-md">
              <div className="p-3.5 rounded-lg bg-secondary-container/30 text-tertiary flex items-center justify-center border border-[#8A2BE2]/20">
                <Phone className="w-5 h-5 text-tertiary" />
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-sans text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 font-semibold">
                  Direct Line
                </h3>
                {DIRECT_LINES.map((num, i) => (
                  <p key={num} className="font-sans text-body-md text-white font-medium mt-0.5">
                    {num} {i === 0 && <span className="text-on-surface-variant text-xs font-light">(Calls Only)</span>}
                  </p>
                ))}
              </div>
            </div>

            {/* Email Comm Card */}
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-all text-left border-white/5 group shadow-md"
            >
              <div className="p-3.5 rounded-lg bg-secondary-container/30 text-tertiary flex items-center justify-center border border-[#8A2BE2]/20 group-hover:bg-[#8A2BE2]/20 transition-colors">
                <Mail className="w-5 h-5 text-tertiary" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 font-semibold">
                  Email Comm
                </h3>
                <span className="font-sans text-body-md text-white font-medium group-hover:text-tertiary transition-colors mt-0.5">
                  {CONTACT_EMAIL}
                </span>
              </div>
            </a>

            {/* Decorative Fiber Optic Graphic Card */}
            <div className="glass-panel p-6 rounded-2xl h-48 relative overflow-hidden flex items-center justify-center group border-white/5 shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none select-none"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6M4QG3MSUUC8vufaME7h1ShlXEXEun_zSc8DCsl1i8gZvFyIh6bs-R6o8cOsoLYRPb9zbobxAIaK6fAO9Nf2QH1cW3a2g0yrp0JspVfi7iGxnmxe1Vn0IyWf-T83WctVYsWEeD-JnKQnkNzRO2VQiN2P-_wSk_ax2tcc_R2xNikOyHmqqyGyUriTfzTNB6lyYEwz_sFkTc6ptkACv6iuzVru8W-7zTpiZpiaX3_O9Pdh_uG77K0xu0g7W_GseFV1_sZsJ9nyz3fI')`
                }}
              />
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md relative z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Cpu className="w-8 h-8 text-white/60 group-hover:text-tertiary transition-colors" />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CONNECTION FORM */}
        <div className="lg:col-span-7 w-full">
          <div className="glass-panel p-8 md:p-11 rounded-2xl relative overflow-hidden border-white/5 shadow-2xl">
            {/* Ambient internal soft purple glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 blur-[80px] rounded-full pointer-events-none select-none" />

            <h2 className="font-display text-3xl font-bold text-white mb-8 tracking-tight">
              Initiate Connection
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              {/* Inputs row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-label-sm text-on-surface-variant font-medium" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                    className="bg-[#050505] border border-outline-variant/60 rounded-lg p-3.5 text-white font-sans focus:outline-none focus:border-tertiary transition-all duration-300 placeholder:text-zinc-600 shadow-inner"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-label-sm text-on-surface-variant font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                    className="bg-[#050505] border border-outline-variant/60 rounded-lg p-3.5 text-white font-sans focus:outline-none focus:border-tertiary transition-all duration-300 placeholder:text-zinc-600 shadow-inner"
                  />
                </div>
              </div>

              {/* Project Classification Radio pills selection */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-label-sm text-on-surface-variant font-medium mb-2">
                  Project Classification
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Web Application', val: 'web_app' as ProjectClassificationType },
                    { label: 'Corporate Platform', val: 'corporate_site' as ProjectClassificationType },
                    { label: 'E-Commerce Architecture', val: 'ecommerce' as ProjectClassificationType },
                    { label: 'Other Protocol', val: 'other_protocol' as ProjectClassificationType },
                  ].map((chip) => {
                    const isSelected = selectedClassification === chip.val;
                    const pillStyle = isSelected 
                      ? 'bg-secondary-container border-tertiary text-white shadow-lg shadow-secondary-container/30 glow-accent font-semibold' 
                      : 'bg-surface-container-low border-outline-variant/40 text-on-surface hover:border-white/20 hover:bg-white/5';

                    return (
                      <button
                        key={chip.val}
                        type="button"
                        onClick={() => handleClassificationChange(chip.val)}
                        className={`px-4 py-2 text-xs font-sans rounded-full border transition-all duration-300 cursor-pointer ${pillStyle}`}
                        id={`classification-chip-${chip.val}`}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message specs */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-label-sm text-on-surface-variant font-medium" htmlFor="message">
                  System Specifications (Message)
                </label>
                <textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your project requirements, technical constraints, and objectives here..."
                  rows={5}
                  className="bg-[#050505] border border-outline-variant/60 rounded-lg p-3.5 text-white font-sans focus:outline-none focus:border-tertiary transition-all duration-300 placeholder:text-zinc-600 resize-none shadow-inner"
                />
              </div>

              {/* Submit CTA with custom state visual handlers */}
              <div className="pt-4 flex justify-end border-t border-[#000080]/20 mt-2">
                {submitState === 'idle' && (
                  <button 
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#8A2BE2] text-white px-8 py-3.5 rounded-lg font-sans text-label-sm font-bold hover:scale-[0.98] cursor-pointer border border-[#a25cf6] glow-accent transition-all duration-200 group"
                  >
                    <span>Transmit Data</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
                  </button>
                )}

                {submitState === 'processing' && (
                  <button 
                    type="button"
                    disabled
                    className="flex items-center justify-center gap-2 bg-[#8A2BE2]/60 text-white px-8 py-3.5 rounded-lg font-sans text-label-sm font-bold border border-[#a25cf6]/40 pointer-events-none"
                  >
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing...</span>
                  </button>
                )}

                {submitState === 'success' && (
                  <button 
                    type="button"
                    disabled
                    className="flex items-center justify-center gap-2 bg-secondary-container text-white px-8 py-3.5 rounded-lg font-sans text-label-sm font-bold border border-[#4b55e8] pointer-events-none animate-bounce"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Transmission Complete</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* 3. TRANSMISSION SYSTEM LOG UPLINK */}
      {historyLogs.length > 0 && (
        <section className="mt-16 w-full text-left glass-panel p-6 rounded-2xl border-white/5 shadow-lg relative overflow-hidden" id="system-uplink-logs">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2.5">
              <History className="w-5 h-5 text-tertiary" />
              <h3 className="font-display text-lg font-bold text-white tracking-wide">
                Local Terminal Uplink Logs (Offline Persistence)
              </h3>
            </div>
            
            <button 
              onClick={clearHistory}
              className="flex items-center gap-1.5 text-xs font-sans text-red-400 hover:text-red-300 hover:bg-white/5 px-3 py-1.5 rounded bg-transparent transition-all border border-transparent hover:border-red-500/20 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs max-h-64 overflow-y-auto pr-2">
            {historyLogs.map((log) => (
              <div 
                key={log.id} 
                className="p-3.5 rounded-lg bg-black/60 border border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-black/90 transition-all"
              >
                <div className="flex flex-col gap-1 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[#8A2BE2] font-semibold">{log.id}</span>
                    <span className="text-zinc-500">[{log.timestamp}]</span>
                    <span className="text-zinc-300">Name: <strong className="text-white">{log.name}</strong></span>
                  </div>
                  <div className="text-zinc-400">
                    Type: <span className="text-tertiary font-semibold">{getClassificationLabel(log.classification)}</span>
                  </div>
                  <div className="text-zinc-500 line-clamp-1 italic">
                    Specs: "{log.message}"
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 font-semibold text-[10px] tracking-wider uppercase">
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Spacing gap */}
      <div className="h-12 pointer-events-none" />
    </div>
  );
}
