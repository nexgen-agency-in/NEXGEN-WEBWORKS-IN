import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-surface relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h4 className="text-brand-accent font-support font-semibold tracking-widest uppercase mb-3 text-sm">Get in Touch</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-primary mb-6">
            Begin Your Financial Journey
          </h2>
          <p className="text-text-secondary font-body text-lg">
            Schedule a confidental consultation to discuss your wealth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-bg rounded-2xl p-8 border border-gray-100 h-full"
            >
              <h3 className="text-2xl font-heading font-bold text-brand-primary mb-8">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-support text-text-secondary font-medium mb-1">Phone / WhatsApp</p>
                    <a href="tel:+919876543210" className="text-brand-primary font-heading font-medium hover:text-brand-accent transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-support text-text-secondary font-medium mb-1">Email</p>
                    <a href="mailto:prabhatguptad@gmail.com" className="text-brand-primary font-heading font-medium hover:text-brand-accent transition-colors">prabhatguptad@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-support text-text-secondary font-medium mb-1">Office Address</p>
                    <p className="text-brand-primary font-heading font-medium">89/345, Bangur Park, Rishra, Hooghly, West Bengal 712248</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/917980351478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-heading font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-brand-primary/5 border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-brand-primary mb-8">Request Consultation</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2 font-support">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2 font-support">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2 font-support">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors bg-gray-50 focus:bg-white font-body"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2 font-support">Message / Inquiry</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-colors bg-gray-50 focus:bg-white font-body resize-none"
                    placeholder="Tell us about your financial goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-md font-heading font-semibold transition-colors shadow-lg shadow-brand-primary/20"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
