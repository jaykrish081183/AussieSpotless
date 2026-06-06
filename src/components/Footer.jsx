import React from 'react';
import { Sparkles, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold">AussieSpotless</span>
            </div>
            <p className="text-gray-400 mb-4">
              Victoria's premier cleaning service, delivering excellence since 2025.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4 block">Services</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Commercial Cleaning</a></li>
              {/* <li><a href="#services" className="hover:text-teal-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">End of Lease</a></li> */}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4 block">Company</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#process" className="hover:text-teal-400 transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4 block">Legal</p>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500">
          <p>&copy; 2025 AussieSpotless. All rights reserved. ABN: 35 692 212 105</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;