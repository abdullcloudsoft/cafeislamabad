import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularSection } from './components/PopularSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MenuItemModal } from './components/MenuItemModal';
import { MenuItem } from './types';
import { Phone, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from './data/menuData';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offset = 72;
      const top = menuSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 flex flex-col font-sans overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      {/* Top Sticky Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Popular Items */}
        <PopularSection onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* Core Restaurant Menu */}
        <MenuSection onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* Truthful & Concise About Section */}
        <AboutSection />

        {/* Compact 6-image Gallery */}
        <GallerySection />

        {/* Verified Instagram Community Section */}
        <InstagramSection />

        {/* Location & Contact with Directions and Map */}
        <ContactSection />
      </main>

      {/* Light Theme Footer */}
      <Footer />

      {/* Detail Modal for Selected Menu Item */}
      <MenuItemModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
      />

      {/* Floating Mobile Bottom Call/Menu Quick Bar for Easy Tap Access */}
      <div className="sm:hidden fixed bottom-3 inset-x-4 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border border-[#DFCFC0] rounded-2xl p-2 shadow-lg flex items-center justify-between gap-2">
        <a
          href={RESTAURANT_INFO.phoneDial}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-800 text-white text-xs font-bold shadow-xs active:scale-98 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call: 0311 1186629</span>
        </a>

        <button
          type="button"
          onClick={handleScrollToMenu}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#EDE4D6] text-stone-800 text-xs font-semibold border border-[#DECFC0] active:scale-98 transition-transform"
        >
          <Utensils className="w-3.5 h-3.5 text-amber-800" />
          <span>View Menu</span>
        </button>
      </div>
    </div>
  );
}
