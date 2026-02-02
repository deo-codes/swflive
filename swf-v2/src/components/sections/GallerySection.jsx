'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_IMAGES = [
  '/gallery/swf-gallery(1).jpg',
  '/gallery/swf-gallery(2).jpg',
  '/gallery/swf-gallery(3).jpg',
  '/gallery/swf-gallery(4).jpg',
  '/gallery/swf-gallery(5).jpg',
  '/gallery/swf-gallery(6).jpg',
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (distance > threshold) {
      // swipe left → next
      setActiveIndex((prev) =>
        prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
      );
    } else if (distance < -threshold) {
      // swipe right → previous
      setActiveIndex((prev) =>
        prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            Gallery
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Relive the action, intensity, and unforgettable moments from SWF live events.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square overflow-hidden group focus:outline-none"
            >
              <Image
                src={src}
                alt={`SWF Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500 transition"
                  aria-label="Close gallery"
                >
                  ✕
                </button>

                <div className="relative w-full h-[70vh]">
                  <Image
                    src={GALLERY_IMAGES[activeIndex]}
                    alt="SWF Gallery Enlarged"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
