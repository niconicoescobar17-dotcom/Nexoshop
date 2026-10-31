import React, { useState } from 'react';
import { ArrowRight, Globe, Sparkles, Check } from 'lucide-react';
import { ImageSlice } from './ImageSlice';

interface HeroProps {
  onShopDrop: () => void;
  onCopItClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopDrop, onCopItClick }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopIt = () => {
    onCopItClick();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="relative w-full bg-[#09090b] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center border-b border-white/10">
      {/* Background Urban Texture & Street Wall Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Subtle asphalt road vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#0e0f12]/90 to-[#09090b]/80 pointer-events-none"></div>

      {/* Urban Graffiti Watermark Text "KICK DIFFERENT" in background */}
      <div className="absolute right-2 md:right-12 top-10 pointer-events-none select-none opacity-30 z-0">
        <div className="font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight text-right leading-none text-white/20 uppercase rotate-[-6deg]">
          KICK
          <br />
          DIFF
          <br />
          RENT
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-start z-20">
            {/* Doodle Kicker: Crown + NEW DROP */}
            <div className="flex items-center gap-2 mb-2 text-[#EA2825]">
              {/* SVG Doodle Crown */}
              <svg
                className="w-7 h-7 text-[#EA2825] animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 17l2-9 4 5 3-7 3 7 4-5 2 9H3z" />
                <circle cx="5" cy="8" r="1" fill="currentColor" />
                <circle cx="12" cy="6" r="1" fill="currentColor" />
                <circle cx="19" cy="8" r="1" fill="currentColor" />
              </svg>

              <span className="font-doodle text-lg sm:text-xl text-[#EA2825] tracking-wider uppercase rotate-[-3deg]">
                NEW DROP
              </span>
            </div>

            {/* Giant Streetwear Headline */}
            <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.88] uppercase mb-5 select-none">
              <span className="block text-white drop-shadow-md">STEP</span>
              <span className="block text-white drop-shadow-md">INTO YOUR</span>
              <span className="block text-[#EA2825] drop-shadow-lg">ERA.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-md font-sans-ui font-normal leading-relaxed mb-8">
              Fresh kicks. Bold moves. <br />
              Make every step count.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onShopDrop}
                className="group px-7 py-3.5 bg-white text-black font-display font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-neutral-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 cursor-pointer active:scale-95"
              >
                <span>SHOP THE DROP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Worldwide Shipping Stamp Badge */}
            <div className="flex items-center gap-3 group cursor-default pt-2">
              <div className="relative w-16 h-16 rounded-full border border-dashed border-white/40 flex items-center justify-center text-white/80 p-1">
                {/* Rotating curved text simulation */}
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[9px] font-mono tracking-widest uppercase fill-white/80">
                      <textPath href="#textPath" startOffset="0%">
                        • WORLDWIDE SHIPPING • AUTHENTIC
                      </textPath>
                    </text>
                  </svg>
                </div>
                <Globe className="w-6 h-6 text-white" />
              </div>

              <div className="text-xs text-neutral-400 font-mono tracking-wide leading-tight">
                <p className="text-white font-semibold">WORLDWIDE</p>
                <p>EXPRESS DELIVERY</p>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Hero Sneaker + Sticker Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-0">
            {/* Sneaker shadow on asphalt */}
            <div className="absolute -bottom-4 w-72 sm:w-96 h-12 bg-black/80 rounded-full blur-xl transform scale-x-110 pointer-events-none"></div>

            {/* Floating Hero Shoe Container */}
            <div className="relative w-full max-w-[460px] transform hover:scale-105 transition-transform duration-500">
              {/* Cutout / Sliced Air Jordan 1 from attached visual */}
              <div className="relative z-10 animate-float-hero filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
                <ImageSlice
                  sx={255}
                  sy={65}
                  sw={360}
                  sh={340}
                  alt="Air Jordan 1 Retro High Chicago - Hero Shoe"
                  className="w-full h-auto object-contain"
                  containerClassName="w-full max-w-[420px] mx-auto"
                />
              </div>

              {/* Doodle Graphic Badge: Neon Lime Smiley + LIMITED COP IT Tag */}
              <div
                onClick={handleCopIt}
                title="Haz clic para activar tu código de descuento"
                className="absolute -bottom-6 right-2 sm:right-6 z-20 flex items-center gap-2 cursor-pointer group transform hover:scale-108 transition-transform select-none"
              >
                {/* Neon Lime Smiley Face Badge */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#D4FF00] text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,255,0,0.45)] border-2 border-black rotate-[-8deg] group-hover:rotate-[0deg] transition-transform">
                  {/* Lightning Eyes */}
                  <div className="flex items-center gap-2 text-black">
                    <span className="font-bold text-sm sm:text-base leading-none">⚡</span>
                    <span className="font-bold text-sm sm:text-base leading-none">⚡</span>
                  </div>
                  {/* Smile */}
                  <svg
                    className="absolute bottom-3.5 w-6 h-3 text-black stroke-current"
                    viewBox="0 0 24 12"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M2 2c5 8 15 8 20 0" />
                  </svg>
                </div>

                {/* Angled Distressed Tag: LIMITED COP IT. */}
                <div className="bg-black text-[#D4FF00] border-2 border-white/80 px-3 py-1.5 rounded-sm shadow-xl rotate-[4deg] group-hover:rotate-[2deg] transition-transform flex flex-col items-start">
                  <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold">
                    {copiedCode ? '¡CÓDIGO COPIADO!' : 'LIMITED'}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="font-display font-black text-sm sm:text-base tracking-wider text-[#D4FF00] uppercase">
                      {copiedCode ? 'COPIT15 (15% OFF)' : 'COP IT.'}
                    </span>
                    {copiedCode ? (
                      <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-[#D4FF00] animate-pulse" />
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
