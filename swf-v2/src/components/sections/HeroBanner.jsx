'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Background images for hero slideshow
 */
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

  /**
   * Adjust background position for mobile vs desktop
   * Mobile crops slightly higher to keep faces centered
   */
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

  /**
   * Rotate background images on interval
   */
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

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Headline with subtle animated underline on "Unhinged" */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
          The{' '}
          <span className="relative inline-block">
            Unhinged
            {/* Animated underline */}
            <motion.span
              className="absolute left-0 -bottom-2 h-[3px] w-full bg-red-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </span>{' '}
          Era Begins
        </h1>

        {/* Supporting Brand Statement */}
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl">
          A new chapter of SWF Pro Wrestling is here.
          <br />
          Harder hits. Louder crowds. No limits.
        </p>
      </motion.div>
    </section>
  );
}
