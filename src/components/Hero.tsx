import React from 'react';
import { Phone, Utensils, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offset = 75;
      const top = menuSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E3D4C0] text-amber-900 text-xs font-semibold w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
              <span>Karnal Sher Khan Shaheed Road, Rawalpindi</span>
            </div>

            {/* Exact Title */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              ISLAMABAD <span className="text-amber-800">CAFE</span>
            </h1>

            {/* Required Tagline */}
            <p className="mt-4 text-xl sm:text-2xl text-stone-700 font-medium tracking-wide">
              &ldquo;Good Food. Good Coffee. Good Moments.&rdquo;
            </p>

            {/* Short Simple Description */}
            <p className="mt-3 text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Serving hearty breakfasts, gourmet burgers, artisan coffee, pizzas, and comforting cafe favorites in Rawalpindi.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="hero-view-menu-btn"
                href="#menu"
                onClick={handleScrollToMenu}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-800 text-white font-semibold text-base hover:bg-amber-900 active:scale-98 transition-all shadow-sm"
              >
                <Utensils className="w-5 h-5 text-amber-200" />
                <span>VIEW MENU</span>
              </a>

              <a
                id="hero-call-now-btn"
                href={RESTAURANT_INFO.phoneDial}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F5EFE6] text-stone-900 font-semibold text-base border border-[#DECFC0] hover:bg-[#EBE2D4] active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-800" />
                <span>CALL NOW</span>
              </a>
            </div>

            {/* Quick Micro Info Chips */}
            <div className="mt-8 pt-6 border-t border-[#EDE4D6] grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-stone-800">Open Daily</p>
                  <p className="text-xs text-stone-500">11:00 AM &ndash; 1:00 AM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-800 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-stone-800">Rawalpindi</p>
                  <p className="text-xs text-stone-500">Plot No. 118</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column: Daylight Cafe & Food Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5DACB] shadow-md bg-[#F4EFE6] aspect-4/3 sm:aspect-16/11 max-w-xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
                alt="Islamabad Cafe bright daylight food and dining atmosphere"
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Light accent badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#FDFBF7]/95 backdrop-blur-sm border border-[#E2D4C3] rounded-xl px-4 py-2.5 shadow-sm">
                <p className="text-xs font-bold text-stone-900">Fresh Flavors &middot; Daily Brews</p>
                <p className="text-[11px] text-stone-600">Dine-in, Takeaway &amp; Quick Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
