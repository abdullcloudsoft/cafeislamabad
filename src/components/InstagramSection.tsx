import React from 'react';
import { Instagram, ArrowUpRight, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#F5EFE5] border-t border-[#EAE0D2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Instagram Icon Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EDE4D6] border border-[#DECFC0] text-amber-900 mb-3 shadow-xs">
          <Instagram className="w-6 h-6" />
        </div>

        {/* Small verified followers pill */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-stone-600 mb-2">
          <Users className="w-3.5 h-3.5 text-amber-800" />
          <span>{RESTAURANT_INFO.instagramFollowers} Followers Community</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-stone-900">
          Follow Islamabad Cafe on Instagram
        </h2>

        <p className="mt-2 text-sm text-stone-600 max-w-md mx-auto">
          Catch our daily food specials, coffee pours, and updates on our official social channel.
        </p>

        {/* Direct CTA Button to the verified post/page */}
        <div className="mt-6 flex justify-center">
          <a
            id="instagram-follow-cta"
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-medium text-sm hover:bg-stone-800 active:scale-98 transition-all shadow-xs"
          >
            <Instagram className="w-4 h-4 text-amber-300" />
            <span>Visit Our Instagram Post</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
