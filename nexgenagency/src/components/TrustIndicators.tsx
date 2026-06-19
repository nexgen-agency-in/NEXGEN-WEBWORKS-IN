import { motion } from 'motion/react';
import { Briefcase, Users, Target, ShieldCheck } from 'lucide-react';
import { TRUST_STATS } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  Target,
  ShieldCheck,
};

export default function TrustIndicators() {
  return (
    <section className="relative -mt-20 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_STATS.map((stat, index) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-brand-surface rounded-xl p-8 shadow-xl shadow-brand-primary/5 border border-gray-100 flex flex-col items-center text-center group transition-all"
            >
              <div className="w-14 h-14 bg-brand-bg rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-primary/5 transition-colors">
                {Icon && <Icon className="w-6 h-6 text-brand-secondary" />}
              </div>
              <h3 className="text-3xl font-heading font-bold text-brand-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-support font-medium text-text-secondary uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
