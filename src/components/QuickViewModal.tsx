import React, { useState } from 'react';
import { X, ShieldCheck, Check, Heart, Truck, RotateCcw } from 'lucide-react';
import { Sneaker } from '../types/sneaker';
import { ImageSlice } from './ImageSlice';

interface QuickViewModalProps {
  sneaker: Sneaker | null;
  isOpen: boolean;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (sneaker: Sneaker, size: number, color: string) => void;
  onToggleWishlist: (sneakerId: string) => void;
  onOpenWarranty: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  sneaker,
  isOpen,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist,
  onOpenWarranty,
}) => {
  if (!isOpen || !sneaker) return null;

  const [selectedSize, setSelectedSize] = useState<number>(sneaker.sizes[2] || 9);
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(sneaker.defaultColorIndex);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAdd = () => {
    const chosenColor = sneaker.colors[selectedColorIdx]?.name || 'Standard';
    onAddToCart(sneaker, selectedSize, chosenColor);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#121316] text-white rounded-2xl border border-white/15 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar modal de producto"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Showcase */}
        <div className="md:w-1/2 bg-[#1b1c22] p-8 flex flex-col justify-between items-center relative border-b md:border-b-0 md:border-r border-white/10">
          <div className="w-full flex items-center justify-between">
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow ${sneaker.tagColor || 'bg-black text-white'}`}
            >
              {sneaker.tag}
            </span>
            <span className="text-xs font-mono text-neutral-400">SKU: {sneaker.sku}</span>
          </div>

          <div className="py-6 w-full flex items-center justify-center">
            {sneaker.imageSlice ? (
              <ImageSlice
                sx={sneaker.imageSlice.sx}
                sy={sneaker.imageSlice.sy}
                sw={sneaker.imageSlice.sw}
                sh={sneaker.imageSlice.sh}
                alt={sneaker.name}
                containerClassName="w-full max-w-[280px] drop-shadow-2xl"
              />
            ) : (
              <div className="w-48 h-48 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-500 font-mono text-sm">
                Kicked Drop
              </div>
            )}
          </div>

          <div className="w-full bg-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Verificado</span>
            </div>
            <span className="text-neutral-400">Año {sneaker.releaseYear}</span>
          </div>
        </div>

        {/* Right Column: Information, Sizing & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="text-xs font-mono text-[#EA2825] uppercase tracking-wider mb-1">
              {sneaker.brand} Drop Oficial
            </div>

            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white mb-2 leading-tight">
              {sneaker.name}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <span
                className={`font-display font-black text-2xl tabular-nums ${sneaker.priceColor || 'text-[#EA2825]'}`}
              >
                ${sneaker.price.toFixed(2)}
              </span>
              {sneaker.originalPrice && (
                <span className="text-sm font-mono text-neutral-500 line-through">
                  ${sneaker.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                En stock
              </span>
            </div>

            <p className="text-xs text-neutral-300 font-sans-ui leading-relaxed mb-4">
              {sneaker.description}
            </p>

            {/* Colorways */}
            <div className="mb-4">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                Colorway:{' '}
                <span className="text-white font-semibold">
                  {sneaker.colors[selectedColorIdx]?.name}
                </span>
              </label>
              <div className="flex items-center gap-2.5">
                {sneaker.colors.map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColorIdx(idx)}
                    className={`w-6 h-6 rounded-full cursor-pointer transition-all ${
                      selectedColorIdx === idx
                        ? 'ring-2 ring-offset-2 ring-[#EA2825] scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                <span>Talla US Hombre</span>
                <button
                  onClick={onOpenWarranty}
                  className="text-neutral-400 hover:text-white underline text-[11px] cursor-pointer"
                >
                  Garantía de Ajuste (14 días)
                </button>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
                {sneaker.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-mono font-bold rounded border transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-white text-black border-white shadow'
                        : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    US {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex gap-2">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 font-display font-black text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡AÑADIDO AL CARRITO!</span>
                  </>
                ) : (
                  <span>AÑADIR AL CARRITO</span>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(sneaker.id)}
                className="p-3 border border-white/20 hover:border-white/60 rounded-xs flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Añadir a lista de deseos"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'fill-[#EA2825] text-[#EA2825]' : 'text-neutral-400'
                  }`}
                />
              </button>
            </div>

            {/* Quick trust strip */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-400 font-sans-ui pt-1">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-neutral-300" />
                <span>Despacho express asegurado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-neutral-300" />
                <span>Cambio de talla gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
