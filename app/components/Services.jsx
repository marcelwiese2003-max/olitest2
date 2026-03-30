'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Beginner Lessons',
    description: 'Perfect for first-timers. Learn the basics of kitesurf in a safe, controlled environment.',
    price: '€50/hour',
    icon: '🪁',
  },
  {
    id: 2,
    title: 'Intermediate Coaching',
    description: 'Improve your technique, learn new tricks, and build confidence on the water.',
    price: '€60/hour',
    icon: '🌊',
  },
  {
    id: 3,
    title: 'Advanced Training',
    description: 'Master advanced tricks, freestyle, and wave riding with expert guidance.',
    price: '€70/hour',
    icon: '🏄',
  },
  {
    id: 4,
    title: 'Group Sessions',
    description: 'Learn with friends! Fun group lessons with personalized attention.',
    price: '€40/person',
    icon: '👥',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600">
            Tailored coaching programs for every skill level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-slate-50 rounded-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="text-blue-600 font-bold text-lg">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}