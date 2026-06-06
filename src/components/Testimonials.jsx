import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rakesh Patel',
    location: 'Werribee',
    rating: 5,
    text: 'Best cleaning service in Victoria! They helped us get our full bond back with their end of lease cleaning. Worth every penny.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
  },
  {
    name: 'Nirav Patel',
    location: 'Truganina',
    rating: 5,
    text: 'Absolutely fantastic service! They transformed our office space and the team is always professional and thorough. Highly recommend!',
    image: 'https://www.aussizzgroup.com/wp-content/uploads/2025/07/Nirav-Patel.webp'
  },
  {
    name: 'Shalinder Singh',
    location: 'Werribee',
    rating: 5,
    text: 'I love how they use eco-friendly products. My home is spotless and I feel good knowing it\'s safe for my kids and pets.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            What Our <span className="text-teal-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-700/50" />
              
              <div className="flex items-center gap-4 mb-6 z-10">
                <img 
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
                  alt={`${testimonial.name} testimonial photo`}
                  src={testimonial.image} />
                
                <div>
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic z-10 flex-grow">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;