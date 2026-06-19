import { motion } from 'motion/react';
import { UserCheck, Eye, BarChart3, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

const iconMap: Record<string, React.ElementType> = {
  UserCheck,
  Eye,
  BarChart3,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-brand-accent rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-secondary rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-support font-semibold tracking-widest uppercase mb-3 text-sm"
          >
            The Aadarsh Difference
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Why Choose Aadarsh Investment Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                    {Icon && <Icon className="w-7 h-7 text-brand-accent" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-body leading-relaxed">
                    {item.description}
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
