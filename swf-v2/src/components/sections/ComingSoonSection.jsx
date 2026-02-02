'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ComingSoonSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/coming-soon/312702579_cede4592-4e6a-4dd2-a2b3-3374ececf2b0.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {/* Logo */}
        <div className="mx-auto max-w-[600px]">
          <Image
            src="/coming-soon/MEGASLAM2026-V2LOGO.png"
            alt="MEGASLAM 2026"
            width={1200}
            height={600}
            className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,140,255,0.6)]"
            priority
          />
        </div>

        {/* Text */}
        <h2 className="mt-10 text-3xl md:text-5xl font-extrabold uppercase tracking-widest text-white">
          Coming Soon
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          A new era is approaching.  
          Bigger. Louder. Unforgettable.  
          Stay tuned for the announcement.
        </p>
      </motion.div>

    </section>
  );
}
