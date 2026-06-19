import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/stock_chart_businessman_1779537009646.png';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 gradient-primary opacity-60 z-20" />
        {/* Abstract shapes for premium feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-20" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-56 mb-8"
          >
            <img 
              src={heroImage}
              alt="Investment Strategy" 
              className="w-full aspect-video object-cover rounded-2xl mx-auto shadow-2xl border-4 border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-sm"
          >
            <span className="text-brand-accent font-support text-sm font-medium tracking-wider uppercase">
              Premium Wealth Advisory
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-8 leading-tight">
            Smart investment guidance for a <span className="text-brand-accent italic font-light pr-2">secure financial future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Helping individuals and families with investment planning, mutual funds, insurance, and long-term financial growth strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-surface text-brand-primary rounded-md font-heading font-semibold hover:bg-gray-50 transition-colors shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2 group"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-primary rounded-md font-heading font-semibold transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-brand-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
