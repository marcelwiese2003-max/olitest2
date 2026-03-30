'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">AirSwitch</h3>
            <p className="text-slate-400">
              Professional kitesurf coaching in Le Morne, Mauritius. Master the waves with expert instructors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-blue-400 transition">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-blue-400 transition">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Monday - Friday: 8:00 - 17:00</li>
              <li>Saturday: 9:00 - 16:00</li>
              <li>Sunday: 10:00 - 15:00</li>
              <li>By appointment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>📍 Le Morne, Mauritius</li>
              <li>
                <a href="tel:+230-123-4567" className="hover:text-blue-400 transition">
                  📞 +230 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@airswitch.mu" className="hover:text-blue-400 transition">
                  ✉️ info@airswitch.mu
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  🌐 Facebook
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <hr className="border-slate-700 mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} AirSwitch. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-400 transition">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}