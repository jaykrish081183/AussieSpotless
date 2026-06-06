import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Sparkles } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast({
        title: "Login Successful!",
        description: "Welcome back! Redirecting to your dashboard...",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
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
            <h1 className="text-2xl font-bold text-white">Welcome Back!</h1>
            <p className="text-gray-400">Sign in to manage your bookings.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white" placeholder="••••••••" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-bold shadow-lg shadow-teal-500/20">
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
          <p className="text-center text-gray-400 mt-6">
            Don't have an account? <Link to="/register" className="font-semibold text-teal-400 hover:underline">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;