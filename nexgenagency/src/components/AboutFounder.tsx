import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10"></div>
              <img
                src="src/assets/founder.jpg"
                alt="Founder of Aadarsh Investment Solutions"
                className="w-full h-full object-cover object-center grayscale-[20%]"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-accent/40 rounded-2xl -z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute -right-8 bottom-12 bg-brand-surface p-6 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-4">
              <div className="bg-brand-accent/10 p-3 rounded-full text-brand-accent">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-support text-text-secondary uppercase tracking-wider">Committed to</p>
                <p className="text-lg font-heading font-bold text-brand-primary">Integrity & Growth</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-brand-accent font-support font-semibold tracking-widest uppercase mb-3 text-sm">Meet the Founder</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6 leading-tight">
              Guiding Wealth with Trust & Experience
            </h2>
            
            <div className="space-y-6 text-text-secondary font-body text-lg leading-relaxed">
              <p>
                At Aadarsh Investment Solutions, we believe that true wealth management goes beyond isolated investments. It's about architecting a secure, predictable financial future built on transparency and long-term relationships.
              </p>
              <p>
                With over two decades of dedicated expertise in financial planning, mutual funds, and holistic wealth strategies, I founded this firm on a simple premise: putting the client's financial well-being above all else. We design portfolios that weather market cycles and adapt to life's shifting priorities.
              </p>
            </div>
            
            <div className="mt-10">
              <p className="font-heading font-bold text-xl text-brand-primary mb-1">Aadarsh</p>
              <p className="text-brand-secondary font-support">Founder & Principal Advisor</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
