import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EADFCF]'
          : 'bg-[#FDFBF7] border-b border-[#EFE8DE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg p-1 -ml-1"
          aria-label="Islamabad Cafe Home"
        >
          <BrandLogo size="md" />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-amber-800 hover:bg-[#F4EFE6] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Quick Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="header-call-button"
            href={RESTAURANT_INFO.phoneDial}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-amber-800 text-[#FAF6F0] text-sm font-semibold hover:bg-amber-900 active:scale-98 transition-all shadow-xs"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
            <span className="hidden lg:inline text-amber-200 text-xs font-normal border-l border-amber-700/80 pl-2">
              {RESTAURANT_INFO.phone}
            </span>
          </a>
        </div>

        {/* Mobile menu toggle & quick call */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={RESTAURANT_INFO.phoneDial}
            aria-label="Call Islamabad Cafe"
            className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center active:scale-95 shadow-xs"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-lg text-stone-700 hover:bg-[#F2ECE2] active:bg-[#EADFCF] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-800"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="sm:hidden bg-[#FAF6F0] border-b border-[#EADFCF] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-base font-medium text-stone-800 hover:text-amber-900 hover:bg-[#EFE8DC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E8DFC9] flex flex-col gap-2.5">
            <a
              href={RESTAURANT_INFO.phoneDial}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-amber-800 text-white font-medium text-sm shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F0E8DC] text-stone-700 font-medium text-xs border border-[#DFD3C0]"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>{RESTAURANT_INFO.shortAddress}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
