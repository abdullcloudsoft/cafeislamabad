import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menuData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            <Camera className="w-3.5 h-3.5" />
            <span>Snapshots</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
            Cafe Atmosphere
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            A glimpse of our coffee bar, kitchen creations, and welcoming dining space.
          </p>
        </div>

        {/* Compact 6-image grid (3 cols desktop, 2 cols mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-[#EFE8DC] border border-[#E4D7C7] cursor-pointer shadow-xs hover:shadow-md transition-all duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Subtle hover overlay with title */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 sm:p-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl border border-[#E3D6C5] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/60 text-white flex items-center justify-center hover:bg-stone-900 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-xl overflow-hidden aspect-16/10 bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 sm:p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-serif-title font-bold text-base text-stone-900">
                    {selectedImage.title}
                  </h3>
                  <span className="text-xs text-amber-800 font-medium">{selectedImage.category}</span>
                </div>
                <span className="text-xs text-stone-500">ISLAMABAD CAFE</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
