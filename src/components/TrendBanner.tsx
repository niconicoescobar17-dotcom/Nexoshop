import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageSlice } from './ImageSlice';

interface TrendBannerProps {
  onShopNow: () => void;
  onOpenWarranty: () => void;
}

export const TrendBanner: React.FC<TrendBannerProps> = ({ onShopNow, onOpenWarranty }) => {
  return (
    <section id="trend" className="relative w-full bg-[#0a0a0c] text-white py-16 lg:py-20 overflow-hidden border-b border-white/10">
      {/* Subtle asphalt grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Doodle Crown */}
            <div className="mb-2 text-[#D4FF00]">
              <svg
                className="w-7 h-7 text-[#D4FF00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 17l2-9 4 5 3-7 3 7 4-5 2 9H3z" />
                <circle cx="5" cy="8" r="1" fill="currentColor" />
                <circle cx="12" cy="6" r="1" fill="currentColor" />
                <circle cx="19" cy="8" r="1" fill="currentColor" />
              </svg>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.88] uppercase mb-4">
              <span className="block text-white">DON&apos;T</span>
              <span className="block text-white">FOLLOW</span>
              <span className="block text-white">THE TREND.</span>
              <div className="flex items-center gap-3">
                <span className="text-[#D4FF00] drop-shadow-[0_0_20px_rgba(212,255,0,0.4)]">SET IT.</span>
                {/* Arrow Doodle */}
                <svg
                  className="w-8 h-6 text-[#D4FF00]"
                  viewBox="0 0 40 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M2 12h32M24 4l10 8-10 8" />
                </svg>
              </div>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base font-sans-ui max-w-sm mb-8 leading-relaxed">
              La calle no espera a nadie. Consigue las siluetas más buscadas con verificación de autenticidad garantizada y despacho exprés.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onShopNow}
                className="group px-7 py-3.5 bg-white text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs hover:bg-neutral-200 transition-all flex items-center gap-3 cursor-pointer shadow-lg active:scale-95"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenWarranty}
                className="px-5 py-3.5 border border-white/20 text-neutral-300 font-display font-bold text-xs tracking-wider uppercase hover:text-white hover:border-white/60 transition-all rounded-xs cursor-pointer"
              >
                VER GARANTÍAS
              </button>
            </div>
          </div>

          {/* Right Column: Lifestyle Streetwear Image + "BE BOLD." Stamp */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              {/* Lifestyle slice from the flyer */}
              <ImageSlice
                sx={255}
                sy={840}
                sw={340}
                sh={210}
                alt="Streetwear Panda Dunks Lifestyle"
                hoverZoom={true}
                className="w-full h-auto object-cover"
                containerClassName="w-full min-h-[260px] sm:min-h-[300px]"
              />

              {/* Contrast gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

              {/* BE BOLD. Neon Stamp Doodle on bottom right */}
              <div className="absolute bottom-6 right-6 z-20 flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-[#D4FF00] text-[#D4FF00] flex flex-col items-center justify-center p-2 rotate-[12deg] shadow-[0_0_20px_rgba(212,255,0,0.3)] bg-black/50 backdrop-blur-xs">
                  <span className="font-display font-black text-xs sm:text-sm tracking-widest uppercase leading-none">
                    BE
                  </span>
                  <span className="font-display font-black text-sm sm:text-base tracking-widest uppercase leading-none text-[#D4FF00]">
                    BOLD.
                  </span>
                  <div className="flex gap-1 mt-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#D4FF00]" />
                  </div>
                </div>

                {/* Doodle cross mark */}
                <div className="text-[#D4FF00] text-sm font-doodle self-end mt-1 mr-2 opacity-80">
                  ✕
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
