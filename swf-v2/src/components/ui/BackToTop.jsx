'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-black/80 border border-zinc-700
        flex items-center justify-center
        text-white text-xl
        hover:border-red-600 hover:text-red-500
        transition
      "
    >
      ↑
    </button>
  );
}
