'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const PROMOTIONS = [
  { name: 'Bronx Wrestling Federation', logo: '/iwtv/promotions/bwf-logo.png', scale: 1.15 },
  { name: 'Intense Wrestling Alliance', logo: '/iwtv/promotions/iwa-logo.png', scale: 1.15 },
  { name: 'Stand Alone Wrestling', logo: '/iwtv/promotions/stand-alone.png', scale: 1.25 },
  { name: 'Project Codename: Wrestling', logo: '/iwtv/promotions/project-logo.png', scale: 1.3 },
  { name: 'Shore Star Wrestling', logo: '/iwtv/promotions/ssw-logo.png', scale: 1.3 },
  { name: 'Pro Wrestling After Dark', logo: '/iwtv/promotions/pwad-logo.png', scale: 1.3 },
  { name: 'Pro Wrestling Magic', logo: '/iwtv/promotions/prowrestlingmagic-logo.png', scale: 1.2 },

];

export default function IWTVSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/iwtv/iwtv-bg.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Hero Content */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-[260px]">
            <Image
              src="/iwtv/logo-onair-@2x.png"
              alt="Independent Wrestling TV"
              width={520}
              height={260}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Watch The SWF Library on IWTV
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Stream Superstars of Wrestling and the best independent wrestling
            promotions worldwide, anytime and anywhere.
          </p>

          <a
            href="https://independentwrestling.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-red-600 hover:bg-red-700 transition px-8 py-4 font-semibold uppercase tracking-wide"
          >
            Watch on IWTV
          </a>
        </motion.div>

        {/* Partner Promotions */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-center text-xl uppercase tracking-widest text-gray-400 mb-10">
            Also Streaming On IWTV
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
            {PROMOTIONS.map((promo) => (
              <div
                key={promo.name}
                className="
                  relative w-[160px] h-[90px]
                  flex items-center justify-center
                  grayscale hover:grayscale-0 transition
                "
              >
                <Image
                  src={promo.logo}
                  alt={promo.name}
                  fill
                  className="object-contain"
                  style={{ transform: `scale(${promo.scale || 1.1})` }}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
