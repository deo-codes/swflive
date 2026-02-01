'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const HERO_IMAGES = [
  '/swf-background(1).jpg',
  '/swf-background(2).jpg',
  '/swf-background(9).jpg',
  '/swf-background(4).jpg',
  '/swf-background(8).jpg',
  '/swf-background(10).jpg',

];

export default function HeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);
  const [bgPosition, setBgPosition] = useState('center');

  // Handle background position (mobile vs desktop)
  useEffect(() => {
    const updateBgPosition = () => {
      if (window.innerWidth < 768) {
        setBgPosition('50% 30%');
      } else {
        setBgPosition('center');
      }
    };

    updateBgPosition();
    window.addEventListener('resize', updateBgPosition);
    return () => window.removeEventListener('resize', updateBgPosition);
  }, []);

  // Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // 6 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Slideshow */}
      <AnimatePresence>
        <motion.div
          key={HERO_IMAGES[currentImage]}
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('${HERO_IMAGES[currentImage]}')`,
            backgroundPosition: bgPosition,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
          SWF No Love Lost
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200">
          SWF Live returns to Port Monmouth for February&apos;s event,
          <span className="font-semibold text-white"> No Love Lost</span> on
          <span className="font-semibold text-white"> Saturday, February 15th</span>.
          <br />
          Doors open at 4:00 PM · Bell time 5:00 PM
        </p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://buytickets.at/swflive/1531832"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 text-lg font-semibold uppercase tracking-wide"
          >
            Buy Tickets Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
