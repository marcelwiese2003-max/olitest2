'use client';

import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}