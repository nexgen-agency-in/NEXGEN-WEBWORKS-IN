import { motion } from 'motion/react';
import { PieChart, TrendingUp, Umbrella, Landmark, ShieldAlert, Gem } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ElementType> = {
  PieChart,
  TrendingUp,
  Umbrella,
  Landmark,
  ShieldAlert,
  Gem,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-support font-semibold tracking-widest uppercase mb-3 text-sm"
          >
            Our Expertise
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary font-body text-lg"
          >
            We offer bespoke investment strategies designed to protect your capital and generate sustainable growth across generations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-brand-surface border border-gray-100 rounded-2xl p-10 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-primary/5 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
