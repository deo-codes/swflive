import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3 items-start">

        {/* BRAND */}
        <div>
          <Image
            src="/swf-logo.png"
            alt="SWF Pro Wrestling"
            width={160}
            height={60}
            className="object-contain"
          />
          <p className="mt-4 text-sm text-gray-500 max-w-xs">
            Superstars of Wrestling delivers hard-hitting professional wrestling
            action and unforgettable live events.
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="md:text-center">
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#iwtv" className="hover:text-white transition">
                IWTV
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div className="md:text-right">
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4">
            Follow Us
          </h4>

          <div className="flex md:justify-end gap-4">
            <a
              href="https://www.facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-white transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/@YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Superstars of Wrestling. All rights reserved.
      </div>
    </footer>
  );
}
