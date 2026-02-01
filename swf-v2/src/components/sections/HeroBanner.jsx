'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image - Smaller on mobile for readability */}
      <motion.div
        className="absolute inset-0 md:inset-0"
        style={{
          width: 'clamp(100%, 120%, 100%)',
          height: '100%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src="/swf-background(1).jpg"
          alt="SWF No Love Lost Banner"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
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
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
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
