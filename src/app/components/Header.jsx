'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'À PROPOS DE NOUS', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'RÉALISATIONS ', href: '#realisations' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#2B2B2B]/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent border-b border-white/20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <img
            src="/assets/logo-w.png"
            alt="Logo BTP Solution Énergétique"
            width={110}
            height={60}
          />
        </Link>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-sm font-medium text-white
                  relative
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-blue-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                  hover:text-blue-400
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#devis"
            className="
              border border-white-600
              text-white
              px-5 py-2.5
              rounded-full
              text-sm font-semibold
              transition-all duration-300
              hover:bg-blue-700
              hover:scale-105
              shadow-md hover:shadow-xl
            "
          >
            Devis gratuit
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Down Animation */}
      <div
        className={`
          md:hidden bg-[#2B2B2B]/90 backdrop-blur-md overflow-hidden transition-[max-height] duration-500
          ${menuOpen ? 'max-h-screen' : 'max-h-0'}
        `}
      >
        <nav className="flex flex-col items-center gap-6 py-16">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-medium text-lg hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#devis"
            className="
              border border-white-600
              text-white
              px-6 py-3
              rounded-full
              text-sm font-semibold
              hover:bg-blue-700
              hover:scale-105
              shadow-md hover:shadow-xl
            "
          >
            Demander un devis gratuit
          </a>
        </nav>
      </div>
    </header>
  );
}
