import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Sparkles, Droplets, Wind, Trash2 } from 'lucide-react';

const services = [
  { icon: Home, title: 'Residential Cleaning', description: 'Complete home cleaning services including kitchens, bathrooms, and living areas.' },
  { icon: Building2, title: 'Commercial Cleaning', description: 'Professional office and commercial space cleaning to maintain a pristine work environment.' },
  // { icon: Sparkles, title: 'Deep Cleaning', description: 'Intensive cleaning service that reaches every corner and surface of your property.' },
  // { icon: Droplets, title: 'Carpet & Upholstery', description: 'Specialized cleaning for carpets, rugs, and furniture using advanced techniques.' },
  // { icon: Wind, title: 'Window Cleaning', description: 'Crystal-clear windows inside and out, including frames and sills for a streak-free finish.' },
  // { icon: Trash2, title: 'End of Lease', description: 'Comprehensive cleaning to ensure you get your bond back. We follow a detailed checklist.' }
];

const Services = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Our Cleaning <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your every need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;