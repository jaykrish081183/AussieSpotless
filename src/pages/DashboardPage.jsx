import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import { Plus, Edit, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  "Residential Cleaning", "Commercial Cleaning", "Deep Cleaning", "Carpet & Upholstery", "Window Cleaning", "End of Lease"
];

const DashboardPage = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  useEffect(() => {
    // Mock loading bookings from localStorage
    const allBookings = JSON.parse(localStorage.getItem('bookings') || '{}');
    const userBookings = allBookings[user.email] || [];
    setBookings(userBookings);
  }, [user.email]);

  const saveBookings = (newBookings) => {
    const allBookings = JSON.parse(localStorage.getItem('bookings') || '{}');
    allBookings[user.email] = newBookings;
    localStorage.setItem('bookings', JSON.stringify(allBookings));
    setBookings(newBookings);
  };

  const handleSaveBooking = (bookingData) => {
    let updatedBookings;
    if (currentBooking) {
      // Edit
      updatedBookings = bookings.map(b => b.id === currentBooking.id ? { ...b, ...bookingData } : b);
       toast({ title: "Booking Updated!", description: "Your changes have been saved." });
    } else {
      // Create
      updatedBookings = [...bookings, { ...bookingData, id: Date.now(), status: 'Pending' }];
      toast({ title: "Booking Created!", description: "We've received your request." });
    }
    saveBookings(updatedBookings);
    setIsModalOpen(false);
    setCurrentBooking(null);
  };

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter(b => b.id !== id);
    saveBookings(updatedBookings);
    toast({ variant: "destructive", title: "Booking Canceled", description: "Your booking has been removed." });
  };
  
  const openModal = (booking = null) => {
    setCurrentBooking(booking);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-28">
        <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-extrabold text-white">Welcome, {user?.name}!</h1>
              <p className="text-xl text-gray-400">Manage your cleaning appointments here.</p>
            </div>
            <Button onClick={() => openModal()} className="bg-teal-500 hover:bg-teal-600 text-white font-bold shadow-lg shadow-teal-500/20">
              <Plus className="mr-2 h-5 w-5" /> New Booking
            </Button>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8">
            {bookings.length > 0 ? (
              <div className="space-y-4">
                {bookings.map(booking => (
                  <motion.div 
                    key={booking.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col md:flex-row justify-between items-center bg-slate-700/50 p-6 rounded-lg"
                  >
                    <div>
                      <p className="text-xl font-bold text-white">{booking.service}</p>
                      <p className="text-gray-300">Date: {booking.date}</p>
                      <p className="text-gray-400">Address: {booking.address}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                      <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        booking.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        booking.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>{booking.status}</span>
                      <Button variant="ghost" size="icon" onClick={() => openModal(booking)} className="text-gray-400 hover:text-white hover:bg-slate-600">
                        <Edit className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteBooking(booking.id)} className="text-gray-400 hover:text-red-500 hover:bg-slate-600">
                        <Trash className="h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-white mb-2">No Bookings Yet!</h2>
                <p className="text-gray-400 mb-6">Click "New Booking" to schedule your first cleaning.</p>
                <Button onClick={() => openModal()} className="bg-teal-500 hover:bg-teal-600 text-white font-bold">
                  Let's Get Started
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </main>
      <BookingModal 
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        booking={currentBooking}
        onSave={handleSaveBooking}
      />
      <Footer />
    </div>
  );
};

const BookingModal = ({ isOpen, setIsOpen, booking, onSave }) => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    address: ''
  });

  useEffect(() => {
    if (booking) {
      setFormData({
        service: booking.service,
        date: booking.date,
        address: booking.address,
      });
    } else {
      setFormData({ service: '', date: '', address: '' });
    }
  }, [booking, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">{booking ? 'Edit Booking' : 'Create New Booking'}</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill in the details for your cleaning appointment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Service</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white"
            >
              <option value="" disabled>Select a service</option>
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-white">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              placeholder="123 Main St, Melbourne VIC 3000"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all text-white"
            />
          </div>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="text-white hover:bg-slate-700">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold">
              {booking ? 'Save Changes' : 'Confirm Booking'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardPage;