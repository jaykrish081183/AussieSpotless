import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Booking System Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Get Your <span className="text-teal-400">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready for a sparkling clean space? Fill out the form or give us a call!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-slate-800 border border-slate-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField label="Name *" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
              <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
              <InputField label="Phone *" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="04XX XXX XXX" />
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Service Required *</label>
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white">
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="carpet">Carpet & Upholstery</option>
                  <option value="window">Window Cleaning</option>
                  <option value="lease">End of Lease</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all resize-none text-white" placeholder="Tell us about your cleaning needs..."/>
              </div>

              <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 text-lg font-bold shadow-lg shadow-teal-500/20">
                Request Free Quote
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                  <ContactInfo icon={Phone} title="Phone" lines={['Jayesh Patel', '(04) 9327 0786']} />
                  <ContactInfo icon={Mail} title="Email" lines={['info@aussiespotless.com.au', 'bookings@aussiespotless.com.au']} />
                  <ContactInfo icon={MapPin} title="Service Area" lines={['All Melbourne Metro', 'Victoria, Australia']} />
              </div>
              <div className="mt-8 bg-gradient-to-br from-teal-500/20 to-purple-500/20 p-8 rounded-2xl border border-teal-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white">Special Offer!</h3>
                <p className="text-gray-300 mb-4">
                  Get <span className="font-bold text-teal-400">15% OFF</span> your first cleaning service when you book this month!
                </p>
                <p className="text-sm text-gray-400">
                  *Terms apply. Valid for new customers only.
                </p>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type = 'text', value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-white">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} required placeholder={placeholder} className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" />
  </div>
);

const ContactInfo = ({ icon: Icon, title, lines }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-teal-400" />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      {lines.map((line, i) => <p key={i} className="text-gray-400">{line}</p>)}
    </div>
  </div>
);

export default Contact;