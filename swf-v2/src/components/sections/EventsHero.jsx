'use client';

import { motion } from 'framer-motion';

export default function EventsHero() {
  return (
    <section className="relative h-[65vh] min-h-[420px] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/swf-background(11).jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
          Events
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Upcoming and past Superstars of Wrestling live events.
          <br />
          Experience the action, atmosphere, and unforgettable moments.
        </p>
      </motion.div>

      {/* Bottom fade to transition into content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}
