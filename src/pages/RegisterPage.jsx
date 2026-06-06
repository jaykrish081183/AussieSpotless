import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Sparkles } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(name, email, password);
      toast({
        title: "Registration Successful!",
        description: "Welcome! We're glad to have you.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-teal-400" />
              <span className="text-3xl font-bold text-white">AussieSpotless</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
            <p className="text-gray-400">Join us to easily manage your cleanings.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" placeholder="••••••••" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-bold shadow-lg shadow-teal-500/20">
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          <p className="text-center text-gray-400 mt-6">
            Already have an account? <Link to="/login" className="font-semibold text-teal-400 hover:underline">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;