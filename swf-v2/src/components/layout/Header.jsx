'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /**
   * Track active section ONLY on the home page
   */
  useEffect(() => {
    if (!isHome) return;

    const sections = ['home', 'about', 'iwtv'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  /**
   * Handle hash-based scrolling (Next.js App Router fix)
   * Works for:
   * - /#about
   * - /#iwtv
   * - /events → /#iwtv
   * - page refresh on hash
   */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const section = document.getElementById(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  const linkClasses = (id) =>
    `transition ${
      activeSection === id && isHome
        ? 'text-red-500 font-semibold'
        : 'hover:text-red-500'
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-black">
      <nav className="max-w-7xl mx-auto px-6 py-4 text-white">

        {/* DESKTOP NAV */}
        <div className="hidden md:grid grid-cols-3 items-center">

          {/* LEFT LINKS */}
          <ul className="flex gap-6 justify-start">
            <li>
              <Link href="/" className={linkClasses('home')}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href={isHome ? '#about' : '/#about'}
                className={linkClasses('about')}
              >
                About
              </Link>
            </li>
          </ul>

          {/* LOGO */}
          <div className="flex justify-center">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/swf-logo.png"
                alt="SWF Wrestling"
                width={130}
                height={50}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* RIGHT LINKS */}
          <ul className="flex gap-6 justify-end">
            <li>
              <Link href="/events" className="hover:text-red-500 transition">
                Events
              </Link>
            </li>

            <li>
              <Link
                href={isHome ? '#iwtv' : '/#iwtv'}
                className={linkClasses('iwtv')}
              >
                IWTV
              </Link>
            </li>
          </ul>

        </div>

        {/* MOBILE BAR */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/swf-logo.png"
              alt="SWF Wrestling"
              width={110}
              height={42}
              priority
              className="object-contain"
            />
          </Link>

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

              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href={isHome ? '#about' : '/#about'}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link href="/events" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href={isHome ? '#iwtv' : '/#iwtv'}
                  onClick={() => setMenuOpen(false)}
                >
                  IWTV
                </Link>
              </li>

            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
