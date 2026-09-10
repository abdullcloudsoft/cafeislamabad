import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FEATURED_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

interface PopularSectionProps {
  onSelectItem?: (item: MenuItem) => void;
}

export const PopularSection: React.FC<PopularSectionProps> = ({ onSelectItem }) => {
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
    <section id="popular" className="py-10 sm:py-14 bg-[#F8F4EC] border-y border-[#EAE0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
              Popular at Islamabad Cafe
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              A quick taste of our most requested comfort meals, drinks, and desserts.
            </p>
          </div>

          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900 transition-colors group shrink-0"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Compact Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURED_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem?.(item)}
              className="group bg-[#FDFBF7] rounded-xl border border-[#E4D7C7] p-3.5 hover:border-amber-700/40 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="flex gap-3.5 items-start">
                {/* Compact Realistic Food Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-[#EFE9DE] border border-[#E2D6C5]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    {item.tag && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {item.tag}
                      </span>
                    )}
                    <span className="text-sm font-bold text-stone-900 ml-auto whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="font-serif-title font-bold text-base text-stone-900 leading-snug truncate group-hover:text-amber-800 transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Micro Bar */}
              <div className="mt-3 pt-2.5 border-t border-[#F0E6D8] flex items-center justify-between text-xs text-stone-500">
                <span className="capitalize">{item.category.replace('-', ' ')}</span>
                <span className="text-amber-800 font-medium group-hover:underline">View details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
