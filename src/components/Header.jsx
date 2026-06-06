import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Happy Clients', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-7 h-7 text-teal-400" />
              <span className="text-2xl font-bold text-white">AussieSpotless</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <Button asChild variant="ghost" className="text-white hover:bg-slate-700 hover:text-white">
                    <Link to="/dashboard">
                      <LayoutDashboard className="mr-2 h-5 w-5" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button onClick={handleLogout} variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:text-white">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" className="text-white hover:bg-slate-700">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white font-bold">
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-40 bg-slate-900 p-8 md:hidden shadow-lg"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 text-lg hover:text-teal-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full border-t border-slate-700 my-4"></div>
              {user ? (
                <>
                   <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-gray-200 text-lg hover:text-teal-400 transition-colors font-medium w-full text-center">Dashboard</Link>
                   <Button onClick={() => { handleLogout(); setIsOpen(false); }} size="lg" className="bg-red-500 hover:bg-red-600 text-white font-bold w-full mt-4">
                     Logout
                   </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-gray-200 text-lg hover:text-teal-400 transition-colors font-medium w-full text-center">Login</Link>
                  <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-bold w-full mt-4">
                    <Link to="/register" onClick={() => setIsOpen(false)}>Sign Up</Link>
                  </Button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;