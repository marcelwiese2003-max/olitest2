'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          AirSwitch
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="#services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="#testimonials" className="hover:text-blue-400 transition">
            Reviews
          </Link>
          <Link href="#booking" className="hover:text-blue-400 transition">
            Book Now
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 px-4 py-4 space-y-4"
        >
          <Link href="#services" className="block hover:text-blue-400">
            Services
          </Link>
          <Link href="#testimonials" className="block hover:text-blue-400">
            Reviews
          </Link>
          <Link href="#booking" className="block hover:text-blue-400">
            Book Now
          </Link>
          <Link href="#contact" className="block hover:text-blue-400">
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}