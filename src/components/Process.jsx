import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: '1. Get a Quote',
    description: 'Contact us via phone or our online form for a free, no-obligation quote tailored to your needs.'
  },
  {
    icon: Calendar,
    title: '2. Book Your Service',
    description: 'Choose a date and time that works for you. We offer flexible scheduling to fit your life.'
  },
  {
    icon: Sparkles,
    title: '3. We Clean',
    description: 'Our professional, vetted team arrives on time with eco-friendly products to make your space shine.'
  },
  {
    icon: CheckCircle,
    title: '4. You Relax',
    description: 'Enjoy your sparkling clean space with our 100% satisfaction guarantee. It\'s that simple!'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Our Simple <span className="text-teal-400">4-Step Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Getting a pristine clean has never been easier.
          </p>
        </motion.div>

        <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-center"
                >
                    <div className="relative inline-block mb-6">
                        <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-lg">
                            <step.icon className="w-10 h-10 text-teal-400" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;