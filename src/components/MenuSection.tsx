import React, { useState, useMemo } from 'react';
import { Search, Info, SlidersHorizontal, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem, MenuCategoryId } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on active category and search
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Count items per category
  const getCategoryCount = (categoryId: MenuCategoryId) => {
    if (categoryId === 'all') return MENU_ITEMS.length;
    return MENU_ITEMS.filter((item) => item.category === categoryId).length;
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-[#F3EDE2] px-3 py-1 rounded-full border border-[#E3D4C0] mb-3">
            Kitchen &amp; Brew Bar
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Our Cafe Menu
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Freshly prepared comfort food, specialty hot and iced coffee, wood-fired style pizzas, and handcrafted burgers.
          </p>

          {/* Sample Menu Notice as explicitly instructed */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF4EA] border border-[#E9DFC8] text-xs text-stone-600 text-left sm:text-center">
            <Info className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span>
              <strong>Sample Menu:</strong> Dishes and prices shown for demonstration. Easy to update for the restaurant team.
            </span>
          </div>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, burgers, coffee..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF6F0] border border-[#DFCFC0] text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-800/30 focus:border-amber-800 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs font-semibold text-stone-400 hover:text-stone-700 px-1.5 py-0.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Bar:
            Mobile: horizontally scrolling inside category bar with no page scroll.
            Desktop: wrapped clean flex pills */}
        <div className="mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 sm:flex-wrap sm:justify-center"
            role="tablist"
            aria-label="Menu categories"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  id={`cat-tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-800 text-[#FAF6F0] border-amber-900 shadow-xs'
                      : 'bg-[#FAF6F0] text-stone-700 border-[#DECFC0] hover:bg-[#F2ECE2] hover:border-[#CFBDAC]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-amber-900/60 text-amber-100'
                        : 'bg-[#EDE4D6] text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid:
            Desktop: Clean 2 or 3-column grid
            Mobile: Compact 1-column cards with balanced image sizes */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#FAF7F2] rounded-2xl border border-dashed border-[#DFCFC0]">
            <p className="text-stone-700 font-medium text-base">No dishes found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-amber-800 underline underline-offset-4 cursor-pointer"
            >
              Reset filters &amp; view all menu items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                onClick={() => onSelectItem(item)}
                className="group bg-[#FAF6F0] rounded-xl border border-[#E3D6C6] p-3 sm:p-3.5 hover:border-amber-800/40 hover:bg-[#FFFDF9] hover:shadow-md transition-all duration-200 flex gap-3.5 items-start cursor-pointer"
              >
                {/* Compact, consistent, realistic food image */}
                <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-[#E8DFD3] border border-[#DECFC0] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.isVeg && (
                    <span
                      title="Vegetarian"
                      className="absolute top-1 left-1 w-4 h-4 rounded-full bg-emerald-700 border border-white flex items-center justify-center text-[9px] text-white"
                    >
                      v
                    </span>
                  )}
                </div>

                {/* Content details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-title font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-800 transition-colors leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-sm font-bold text-stone-900 whitespace-nowrap shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#EDE2D2] flex items-center justify-between text-[11px]">
                    <span className="text-stone-500 capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                    {item.tag ? (
                      <span className="font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    ) : (
                      <span className="text-stone-400 group-hover:text-amber-800 transition-colors">
                        View item &rarr;
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Order Call to Action beneath Menu */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F6EFE5] border border-[#DECFC0] text-center max-w-2xl mx-auto">
          <h3 className="font-serif-title text-xl font-bold text-stone-900">
            Ready to place an order or reserve a table?
          </h3>
          <p className="mt-1.5 text-sm text-stone-600">
            Call our team directly for takeout pickup or table availability.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:03111186629"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-800 text-white text-sm font-semibold hover:bg-amber-900 transition-colors shadow-xs"
            >
              <span>Call 0311 1186629</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
