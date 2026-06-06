import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Fully Insured', description: 'Complete insurance coverage for your peace of mind.' },
  { icon: Award, title: 'Certified Team', description: 'Trained and experienced cleaning professionals.' },
  { icon: Users, title: 'Trusted Service', description: 'Hundreds of satisfied customers across Victoria.' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'We work around your schedule, 7 days a week.' }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-600 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <img 
                className="relative w-full h-auto object-cover rounded-3xl"
                alt="Professional cleaning team at work"
               src="https://images.unsplash.com/photo-1683395706065-a17dd8165eb7" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white">
              Why Choose <span className="text-teal-400">AussieSpotless?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're not just another cleaning service. We're partners in creating a healthier, happier environment for your home and business across Victoria.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-700">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;