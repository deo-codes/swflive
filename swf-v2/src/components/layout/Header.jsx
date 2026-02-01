'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isSticky ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">
          SWF
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <ul
          className={`md:flex md:items-center md:gap-6 absolute md:static left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${
            menuOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'
          }`}
        >
          {['Home', 'About', 'Events', 'IWTV', 'Policy'].map((item) => (
            <li key={item} className="text-center py-3 md:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
