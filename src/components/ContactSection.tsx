import React from 'react';
import { Phone, MapPin, Navigation, Clock, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-[#F3EDE2] px-3 py-1 rounded-full border border-[#E3D4C0]">
            Visit Us
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
            Location &amp; Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Conveniently located on Karnal Sher Khan Shaheed Road in Rawalpindi. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl border border-[#E4D7C7] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="border-b border-[#EAE0D2] pb-6 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Restaurant Details
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-stone-900 mt-1">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">Rawalpindi, Pakistan</p>
              </div>

              <div className="space-y-5 text-sm">
                {/* Address Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Address</h4>
                    <p className="text-stone-700 mt-0.5 leading-relaxed">
                      P No. 118,
                      <br />
                      Karnal Sher Khan Shaheed Road,
                      <br />
                      Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Phone</h4>
                    <a
                      href={RESTAURANT_INFO.phoneDial}
                      className="text-amber-900 font-semibold text-base hover:underline block mt-0.5"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <span className="text-xs text-stone-500">Tap to call directly from mobile</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE6D8] border border-[#DECFC0] flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Opening Hours</h4>
                    <p className="text-stone-700 mt-0.5">{RESTAURANT_INFO.openingHours}</p>
                    <span className="text-xs text-stone-500">Open 7 days a week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="mt-8 pt-6 border-t border-[#EAE0D2] flex flex-col sm:flex-row gap-3">
              <a
                id="contact-call-btn"
                href={RESTAURANT_INFO.phoneDial}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-800 text-white font-semibold text-sm hover:bg-amber-900 active:scale-98 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>CALL NOW</span>
              </a>

              <a
                id="contact-directions-btn"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F0E7DA] text-stone-900 font-semibold text-sm border border-[#DACCC0] hover:bg-[#E8DDD0] active:scale-98 transition-all"
              >
                <Navigation className="w-4 h-4 text-amber-800" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Card / Route Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[340px] rounded-2xl overflow-hidden border border-[#E4D7C7] bg-[#FAF6F0] shadow-xs flex flex-col">
              {/* Google Map iframe centered on Karnal Sher Khan Shaheed Road, Rawalpindi */}
              <iframe
                title="Islamabad Cafe Location Map"
                src="https://maps.google.com/maps?q=Karnal+Sher+Khan+Shaheed+Road,+Rawalpindi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="flex-1 border-0 min-h-[280px]"
                loading="lazy"
                aria-label="Map showing Islamabad Cafe on Karnal Sher Khan Shaheed Road, Rawalpindi"
              />

              {/* Bottom bar of map preview */}
              <div className="bg-[#FAF6F0] border-t border-[#EAE0D2] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-stone-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  <span><strong>Plot No. 118</strong>, Karnal Sher Khan Shaheed Road, Rawalpindi</span>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
