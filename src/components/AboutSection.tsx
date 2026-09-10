import React from 'react';
import { Coffee, Utensils, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#F8F4EC] border-y border-[#EAE0D2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Visual Column */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E3D6C5] shadow-sm bg-[#EFE8DC] aspect-4/3 sm:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80"
                alt="Islamabad Cafe bright seating area and warm atmosphere"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 mb-2">
              Our Story &amp; Space
            </span>
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              About Islamabad Cafe
            </h2>

            <div className="mt-4 space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Islamabad Cafe is a cafe and restaurant located on Karnal Sher Khan Shaheed Road in Rawalpindi. We bring together good coffee, freshly cooked meals, and a comfortable cafe space for friends, families, and solo diners.
              </p>
              <p>
                From hearty breakfast platters and artisan espresso drinks to gourmet burgers, wood-fired style pizzas, and signature desserts, our focus is simple: quality ingredients, attentive service, and a warm, inviting environment.
              </p>
            </div>

            {/* Simple Value Badges */}
            <div className="mt-6 pt-6 border-t border-[#E8DFC9] grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-stone-900">Good Coffee</h3>
                  <p className="text-[11px] text-stone-500">Freshly ground</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-stone-900">Good Food</h3>
                  <p className="text-[11px] text-stone-500">Made to order</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-stone-900">Good Moments</h3>
                  <p className="text-[11px] text-stone-500">Relaxed vibe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
