'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-white flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background animated elements */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="text-center max-w-3xl px-4 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Master Kitesurf in Le Morne
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-blue-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Private coaching for all levels • Professional instructors • Stunning beaches
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Lesson
          </motion.button>

          <motion.button
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16 text-blue-100"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
}