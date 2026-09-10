import React from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/menuData';

interface MenuItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#FAF6F0] rounded-2xl overflow-hidden shadow-2xl border border-[#E0D3C2] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#FAF6F0]/85 backdrop-blur-sm border border-[#DACBB8] text-stone-700 flex items-center justify-center hover:bg-stone-100 hover:text-stone-950 transition-colors shadow-xs"
          aria-label="Close dish details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Food Image */}
        <div className="relative aspect-16/10 w-full bg-[#EADECF] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.tag && (
            <span className="absolute top-3 left-3 bg-amber-800 text-[#FAF6F0] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {item.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-semibold text-amber-800 tracking-wider">
                {item.category.replace('-', ' ')}
              </span>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                {item.name}
              </h3>
            </div>
            <span className="text-xl font-bold text-amber-900 shrink-0">
              {item.price}
            </span>
          </div>

          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-4 pt-4 border-t border-[#E8DFC9] flex items-center gap-2 text-xs text-stone-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Prepared fresh upon order at Islamabad Cafe kitchen.</span>
          </div>

          {/* Action to call restaurant for this dish */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.phoneDial}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-800 text-white font-semibold text-sm hover:bg-amber-900 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-amber-200" />
              <span>Call to Order ({RESTAURANT_INFO.phone})</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-[#EFE8DC] text-stone-700 text-sm font-medium hover:bg-[#E5DCCF] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
