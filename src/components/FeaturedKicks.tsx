import React, { useState } from 'react';
import { Heart, ArrowRight, Check } from 'lucide-react';
import { Sneaker } from '../types/sneaker';
import { ImageSlice } from './ImageSlice';

interface FeaturedKicksProps {
  sneakers: Sneaker[];
  wishlist: string[];
  onToggleWishlist: (sneakerId: string) => void;
  onAddToCart: (sneaker: Sneaker, size: number, color: string) => void;
  onQuickView: (sneaker: Sneaker) => void;
  onViewAllClick: () => void;
}

export const FeaturedKicks: React.FC<FeaturedKicksProps> = ({
  sneakers,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAllClick,
}) => {
  // Store selected color index for each sneaker
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({});
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const handleColorSelect = (sneakerId: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedColors((prev) => ({ ...prev, [sneakerId]: index }));
  };

  const handleAddClick = (sneaker: Sneaker, e: React.MouseEvent) => {
    e.stopPropagation();
    const colorIdx = selectedColors[sneaker.id] ?? sneaker.defaultColorIndex;
    const chosenColor = sneaker.colors[colorIdx]?.name || 'Standard';
    const chosenSize = sneaker.sizes[2] || 9.5; // default popular size
    onAddToCart(sneaker, chosenSize, chosenColor);

    setAddedAnimationId(sneaker.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  return (
    <section id="featured" className="w-full bg-[#EFEFEF] text-neutral-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Row: OUR PICKS + FEATURED KICKS + VIEW ALL */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            {/* Handwritten scribble kicker */}
            <div className="flex items-center gap-2 mb-1">
              <span className="font-doodle text-[#EA2825] text-sm sm:text-base tracking-wide uppercase rotate-[-1.5deg]">
                OUR PICKS
              </span>
              <svg className="w-10 h-2 text-[#EA2825]" viewBox="0 0 50 10" fill="none">
                <path d="M1 5 Q 25 10 49 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-black">
              FEATURED KICKS
            </h2>
          </div>

          {/* VIEW ALL Button */}
          <button
            onClick={onViewAllClick}
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-black/80 text-black font-display font-bold text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all rounded-xs cursor-pointer active:scale-95 self-start sm:self-auto"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sneakers.slice(0, 3).map((sneaker) => {
            const isWishlisted = wishlist.includes(sneaker.id);
            const activeColorIdx = selectedColors[sneaker.id] ?? sneaker.defaultColorIndex;
            const isJustAdded = addedAnimationId === sneaker.id;

            return (
              <div
                key={sneaker.id}
                onClick={() => onQuickView(sneaker)}
                className="group relative bg-[#E5E5E5] hover:bg-[#E0E0E0] rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between border border-neutral-300/60"
              >
                {/* Top Row: Status Badge Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs ${sneaker.tagColor || 'bg-black text-white'}`}
                  >
                    {sneaker.tag}
                  </span>

                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    {sneaker.brand}
                  </span>
                </div>

                {/* Sneaker Image Stage */}
                <div className="relative py-4 my-2 flex items-center justify-center min-h-[170px]">
                  {sneaker.imageSlice ? (
                    <ImageSlice
                      sx={sneaker.imageSlice.sx}
                      sy={sneaker.imageSlice.sy}
                      sw={sneaker.imageSlice.sw}
                      sh={sneaker.imageSlice.sh}
                      alt={sneaker.name}
                      hoverZoom={true}
                      containerClassName="w-full max-w-[240px] drop-shadow-md"
                    />
                  ) : (
                    <div className="w-full h-36 flex items-center justify-center bg-neutral-300 rounded text-neutral-600 font-mono text-xs">
                      {sneaker.name}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="mt-4 pt-2 border-t border-neutral-300/70">
                  <h3 className="font-display font-extrabold text-base sm:text-lg uppercase tracking-tight text-neutral-900 group-hover:text-black line-clamp-1 mb-1">
                    {sneaker.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`font-display font-black text-lg sm:text-xl tabular-nums tracking-wide ${sneaker.priceColor || 'text-[#EA2825]'}`}
                    >
                      ${sneaker.price.toFixed(2)}
                    </span>
                    {sneaker.originalPrice && (
                      <span className="text-xs font-mono text-neutral-500 line-through">
                        ${sneaker.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Color Swatch Circles */}
                  <div className="flex items-center gap-2 mb-5" onClick={(e) => e.stopPropagation()}>
                    {sneaker.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={(e) => handleColorSelect(sneaker.id, idx, e)}
                        title={color.name}
                        className={`w-4 h-4 rounded-full transition-all cursor-pointer ${
                          activeColorIdx === idx
                            ? 'ring-2 ring-offset-2 ring-black scale-110'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={`Color ${color.name}`}
                      />
                    ))}
                  </div>

                  {/* Action Buttons: ADD TO CART + Wishlist Heart */}
                  <div className="grid grid-cols-12 gap-2">
                    <button
                      onClick={(e) => handleAddClick(sneaker, e)}
                      className={`col-span-9 sm:col-span-10 py-3 px-4 font-display font-black text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 rounded-xs cursor-pointer active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>¡AGREGADO!</span>
                        </>
                      ) : (
                        <span>ADD TO CART</span>
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(sneaker.id);
                      }}
                      aria-label="Agregar a favoritos"
                      className="col-span-3 sm:col-span-2 py-3 border border-black/30 hover:border-black flex items-center justify-center rounded-xs transition-colors cursor-pointer group/fav bg-transparent hover:bg-white/40"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform group-hover/fav:scale-110 ${
                          isWishlisted
                            ? 'fill-[#EA2825] text-[#EA2825]'
                            : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
