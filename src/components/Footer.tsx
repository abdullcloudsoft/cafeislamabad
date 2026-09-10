import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#FAF6F0] border-t border-[#E8DFC9] text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#EAE0D2]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-sm text-stone-600 max-w-sm leading-relaxed">
              Serving good food, specialty coffee, and comfortable moments on Karnal Sher Khan Shaheed Road, Rawalpindi.
            </p>
            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EFE6D8] border border-[#DFCFC0] text-xs font-semibold text-stone-800 hover:bg-[#E6DDD0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber-800" />
                <span>Instagram ({RESTAURANT_INFO.instagramFollowers} followers)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-serif-title font-bold text-base text-stone-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-stone-600 hover:text-amber-850 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="font-serif-title font-bold text-base text-stone-900 mb-3">
              Contact &amp; Address
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  {RESTAURANT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                <a
                  href={RESTAURANT_INFO.phoneDial}
                  className="text-amber-900 font-semibold hover:underline"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EFE8DC] text-stone-700 hover:text-amber-900 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
