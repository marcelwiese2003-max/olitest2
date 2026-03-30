'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Professional Athlete',
    content: 'The best kitesurf coaching I\'ve ever received. The instructors really understand the sport and how to teach it.',
    rating: 5,
    image: '👩‍🦰',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    role: 'First-time Learner',
    content: 'I was nervous about starting, but the team made me feel comfortable and confident on my first day!',
    rating: 5,
    image: '👨‍🦱',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Hobby Enthusiast',
    content: 'Fantastic experience at AirSwitch. The Le Morne location is beautiful and the waves are perfect.',
    rating: 5,
    image: '👩‍🦳',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Student Reviews
          </h2>
          <p className="text-xl text-slate-600">
            What our students say about AirSwitch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>

              <p className="text-slate-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}