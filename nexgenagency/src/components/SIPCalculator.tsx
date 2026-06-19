import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedRate, setExpectedRate] = useState<number>(12);
  const [duration, setDuration] = useState<number>(10);

  const results = useMemo(() => {
    const P = monthlyInvestment || 0;
    const i = (expectedRate || 0) / 12 / 100;
    const n = (duration || 0) * 12;

    const totalInvested = P * n;
    let maturityAmount = 0;
    
    if (i === 0) {
      maturityAmount = totalInvested;
    } else {
      maturityAmount = P * (((Math.pow(1 + i, n) - 1) / i)) * (1 + i);
    }
    
    const wealthGained = Math.max(0, maturityAmount - totalInvested);

    return {
      totalInvested,
      wealthGained,
      maturityAmount
    };
  }, [monthlyInvestment, expectedRate, duration]);

  const formatCurrency = (amount: number) => {
    const rounded = Math.round(amount);
    if (isNaN(rounded)) return '₹0';
    const x = rounded.toString();
    let lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return '₹' + res;
  };

  return (
    <section id="calculator" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-support font-semibold tracking-widest uppercase mb-3 text-sm"
          >
            Wealth Planner
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6"
          >
            Investment SIP Calculator
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary font-body text-lg"
          >
            Estimate your potential returns and plan your financial journey with precision.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-surface rounded-2xl shadow-xl shadow-brand-primary/5 border border-gray-100 overflow-hidden max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Inputs Section */}
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h3 className="text-xl font-heading font-bold text-brand-primary mb-8 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brand-accent" />
              Investment Details
            </h3>

            <div className="space-y-8">
              {/* Monthly Investment */}
              <div>
                <div className="flex justify-between mb-3 items-end">
                  <label className="text-sm font-medium text-text-secondary font-support">Monthly Investment</label>
                  <span className="text-xl text-brand-primary font-heading font-bold bg-brand-bg px-4 py-1 rounded border border-gray-100">{formatCurrency(monthlyInvestment)}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="500000" 
                  step="500"
                  value={monthlyInvestment} 
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-colors" 
                />
                <div className="flex justify-between text-xs text-text-secondary mt-3 font-body font-medium">
                  <span>₹500</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              {/* Expected Return Rate */}
              <div>
                <div className="flex justify-between mb-3 items-end">
                  <label className="text-sm font-medium text-text-secondary font-support">Expected Return Rate</label>
                  <span className="text-xl text-brand-primary font-heading font-bold bg-brand-bg px-4 py-1 rounded border border-gray-100">{expectedRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="0.5"
                  value={expectedRate} 
                  onChange={(e) => setExpectedRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-colors" 
                />
                 <div className="flex justify-between text-xs text-text-secondary mt-3 font-body font-medium">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period */}
              <div>
                <div className="flex justify-between mb-3 items-end">
                  <label className="text-sm font-medium text-text-secondary font-support">Time Period</label>
                  <span className="text-xl text-brand-primary font-heading font-bold bg-brand-bg px-4 py-1 rounded border border-gray-100">{duration} Yr</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  step="1"
                  value={duration} 
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-colors" 
                />
                <div className="flex justify-between text-xs text-text-secondary mt-3 font-body font-medium">
                  <span>1 Yr</span>
                  <span>40 Yr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-brand-bg to-transparent flex flex-col justify-center overflow-hidden">
            {/* Abstract visual flair */}
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

            <h3 className="text-xl font-heading font-bold text-brand-primary mb-8 text-center lg:text-left relative z-10">
              Projected Returns
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-support text-text-secondary">Amount Invested</span>
                <span className="text-xl font-heading font-bold text-text-primary">{formatCurrency(results.totalInvested)}</span>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-support text-text-secondary">Est. Returns Gained</span>
                <span className="text-xl font-heading font-bold text-brand-secondary">{formatCurrency(results.wealthGained)}</span>
              </div>
              
              <div className="bg-brand-primary p-8 rounded-xl shadow-2xl flex flex-col items-center lg:items-start text-white relative overflow-hidden mt-6">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-secondary rounded-full blur-xl translate-y-1/2 -translate-x-1/3 opacity-50"></div>
                
                <span className="text-sm font-support text-white/80 mb-2 relative z-10 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-accent" />
                  Estimated Future Value
                </span>
                <span className="text-4xl md:text-5xl font-heading font-bold text-brand-accent relative z-10">{formatCurrency(results.maturityAmount)}</span>
              </div>
            </div>

            <div className="mt-10 text-center lg:text-left relative z-10">
              <p className="text-xs text-text-secondary mb-4 italic font-body">
                *The above returns are illustrative based on expected rates. Mutual Fund investments are subject to market risks.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-brand-primary font-heading font-semibold group"
              >
                Start Your Wealth Creation Journey
                <span className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform group-hover:bg-brand-secondary text-sm">
                  →
                </span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
