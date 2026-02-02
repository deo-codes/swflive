'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'IWTV', id: 'iwtv' },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sticky header + active section tracking (same-page sections only)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);

      const scrollPosition = window.scrollY + 120;

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler (same-page only)
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const linkClasses = (id) =>
    `transition ${
      activeSection === id
        ? 'text-red-500 font-semibold'
        : 'hover:text-red-500'
    }`;

  return (
    <header className={`fixed top-0 w-full z-50 ${isSticky ? 'bg-black' : 'bg-black'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 text-white">

        {/* DESKTOP NAV */}
        <div className="hidden md:grid grid-cols-3 items-center">

          {/* LEFT LINKS */}
          <ul className="flex gap-6 justify-start">
            <li>
              <a
                href="#home"
                onClick={handleNavClick('home')}
                className={linkClasses('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleNavClick('about')}
                className={linkClasses('about')}
              >
                About
              </a>
            </li>
          </ul>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <a href="#home" onClick={handleNavClick('home')}>
              <Image
                src="/swf-logo.png"
                alt="SWF Wrestling"
                width={130}
                height={50}
                priority
                className="object-contain"
              />
            </a>
          </div>

          {/* RIGHT LINKS */}
          <ul className="flex gap-6 justify-end">
            <li>
              <a
                href="/events"
                className="hover:text-red-500 transition"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#iwtv"
                onClick={handleNavClick('iwtv')}
                className={linkClasses('iwtv')}
              >
                IWTV
              </a>
            </li>
          </ul>

        </div>

        {/* MOBILE BAR */}
        <div className="md:hidden flex items-center justify-between">
          <a href="#home" onClick={handleNavClick('home')}>
            <Image
              src="/swf-logo.png"
              alt="SWF Wrestling"
              width={110}
              height={42}
              priority
              className="object-contain"
            />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-800">
            <ul className="flex flex-col text-center py-4 gap-4">

              {/* Same-page links */}
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleNavClick(item.id)}
                    className={linkClasses(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Page route */}
              <li>
                <a
                  href="/events"
                  className="hover:text-red-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Events
                </a>
              </li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
