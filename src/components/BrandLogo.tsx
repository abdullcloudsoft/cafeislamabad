import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  id?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  id = 'brand-logo',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  }[size];

  return (
    <div id={id} className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Custom Cafe Emblem */}
      <div
        className={`${iconDimensions} rounded-xl bg-gradient-to-br from-[#FAF5EE] to-[#EFE7DC] border border-[#DFCFC0] shadow-xs flex items-center justify-center text-amber-800 transition-transform group-hover:scale-105 duration-200 shrink-0`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-800"
          aria-hidden="true"
        >
          {/* Subtle rising aroma curves */}
          <path
            d="M12 7C11.5 8.5 12.5 9.5 12 11"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M16 6C15.5 7.8 16.8 9 16 11"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M20 7.5C19.5 8.8 20.2 9.8 19.8 11"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Modern minimalist coffee cup / cafe bowl */}
          <path
            d="M7 13H24C24 13 23.5 21 16 21C8.5 21 7 13 7 13Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          {/* Cup handle */}
          <path
            d="M23.5 14.5C25.8 14.5 27 16 27 17.5C27 19.2 25.4 20 23.2 20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Base saucer curve / subtle crescent touch */}
          <path
            d="M5.5 24.5C9.5 26 22.5 26 26.5 24.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif-title font-bold tracking-wider text-stone-900 ${titleSizes}`}
        >
          ISLAMABAD <span className="text-amber-800">CAFE</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.2em] uppercase text-stone-500 font-medium mt-1 ${subtitleSizes}`}
          >
            Coffee &middot; Kitchen &middot; Rawalpindi
          </span>
        )}
      </div>
    </div>
  );
};
