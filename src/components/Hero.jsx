import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Hero = () => {
  const { user } = useAuth();
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium border border-teal-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Victoria's Trusted Cleaning Experts
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              AussieSpotless in
              <span className="block text-teal-400 text-glow"> Victoria, Australia</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Professional, eco-friendly cleaning that transforms your space. Experienced team, 100% satisfaction guarantee.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {user ? (
                 <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-bold shadow-lg shadow-teal-500/20 transition-all duration-300 transform hover:scale-105">
                    <Link to="/dashboard">Go to Dashboard</Link>
                 </Button>
              ) : (
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-bold shadow-lg shadow-teal-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Cleaning
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-auto object-cover"
                alt="Professional cleaning service in modern home"
               src="https://images.unsplash.com/photo-1670064161367-4c605010ac37" />
              <div className="absolute inset-0 bg-black/30"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-white">Eco-Friendly Products</div>
                    <div className="text-gray-300">Safe for your family & pets</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;