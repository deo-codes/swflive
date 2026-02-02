'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            About SWF
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Superstars of Wrestling Live (SWF) is a New Jersey based independent professional wrestling
            promotion built on intensity, storytelling, and unforgettable live
            experiences. For almost two decades, SWF delivers hard-hitting action while showcasing some of
            the most driven and talented competitors in the industry.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            From intimate venues to electric crowds, SWF prides itself on creating
            an atmosphere where every match matters. This is where passion meets
            performance — and where the next era of professional wrestling is forged.
          </p>
        </motion.div>

        {/* IMAGE BLOCK (replaces "Why Fans Love SWF") */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about/about-image.jpg"
            alt="SWF Live Event"
            fill
            className="object-cover"
            priority
          />

          {/* Optional subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

      </div>
    </section>
  );
}
