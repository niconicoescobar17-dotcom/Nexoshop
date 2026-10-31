import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { CartItem } from '../types/sneaker';
import { ImageSlice } from './ImageSlice';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenWarranty: () => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onOpenWarranty,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.sneaker.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const freeShippingThreshold = 250;
  const freeShippingReached = subtotal >= freeShippingThreshold;
  const shippingCost = freeShippingReached || subtotal === 0 ? 0 : 15;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'COPIT15') {
      setDiscountPercent(15);
      setPromoMessage('¡15% de descuento aplicado con éxito!');
    } else if (clean === 'KICKED10') {
      setDiscountPercent(10);
      setPromoMessage('¡10% de bienvenida aplicado!');
    } else {
      setPromoMessage('Código no válido. Prueba con COPIT15');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#111216] text-white h-full shadow-2xl flex flex-col border-l border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#15161b]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#EA2825]" />
            <h3 className="font-display font-black text-lg tracking-wider uppercase text-white">
              TU CARRITO DE DROPS
            </h3>
            <span className="text-xs font-mono bg-white/10 px-2 py-0.5 rounded-full text-neutral-300">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#191a21] border-b border-white/5">
          <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
            <span className="text-neutral-300">
              {freeShippingReached ? (
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> ¡Envío Express Gratis desbloqueado!
                </span>
              ) : (
                <span>
                  Faltan <strong className="text-white">${(freeShippingThreshold - subtotal).toFixed(2)}</strong> para envío gratis
                </span>
              )}
            </span>
            <span className="text-neutral-400">Meta: $250</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#EA2825] to-[#D4FF00] transition-all duration-300"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-400">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-neutral-500" />
              </div>
              <p className="font-display font-bold text-base text-white uppercase mb-1">
                Tu carrito está vacío
              </p>
              <p className="text-xs text-neutral-400 mb-6 max-w-xs">
                Añade tus siluetas favoritas antes de que se agoten en el próximo drop.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-white text-black font-display font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                EXPLORAR DROPS
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
              >
                {/* Sneaker Image Slice */}
                <div className="w-24 h-20 bg-neutral-900 rounded-lg p-1 flex items-center justify-center overflow-hidden shrink-0 border border-white/5">
                  {item.sneaker.imageSlice ? (
                    <ImageSlice
                      sx={item.sneaker.imageSlice.sx}
                      sy={item.sneaker.imageSlice.sy}
                      sw={item.sneaker.imageSlice.sw}
                      sh={item.sneaker.imageSlice.sh}
                      alt={item.sneaker.name}
                      containerClassName="w-full h-full"
                    />
                  ) : (
                    <span className="text-[10px] font-mono text-neutral-500">Kicks</span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase line-clamp-1">
                        {item.sneaker.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-mono">
                        Talla: US {item.selectedSize} · {item.selectedColor}
                      </p>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-neutral-500 hover:text-[#EA2825] p-1 transition-colors cursor-pointer"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between mt-2 pt-1">
                    <div className="flex items-center border border-white/10 rounded bg-black/40">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        aria-label="Disminuir cantidad"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-display font-black text-sm text-[#EA2825] tabular-nums">
                      ${(item.sneaker.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Calculations and Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#15161b] space-y-4">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Código (ej. COPIT15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-black/50 border border-white/15 rounded px-3 py-1.5 text-xs text-white placeholder-neutral-500 font-mono uppercase focus:outline-none focus:border-[#EA2825]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-display font-bold uppercase rounded cursor-pointer transition-colors"
              >
                Aplicar
              </button>
            </form>

            {promoMessage && (
              <p
                className={`text-[11px] font-mono ${
                  discountPercent > 0 ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {promoMessage}
              </p>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-sans-ui text-neutral-400 border-t border-white/5 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Descuento ({discountPercent}%)</span>
                  <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Envío express asegurado</span>
                <span className="font-mono text-white tabular-nums">
                  {shippingCost === 0 ? 'GRATIS' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-display font-black text-white pt-2 border-t border-white/10">
                <span>TOTAL</span>
                <span className="text-[#EA2825] tabular-nums text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Guarantee Badge */}
            <button
              onClick={onOpenWarranty}
              className="w-full p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer group"
            >
              <ShieldCheck className="w-4 h-4 text-[#EA2825]" />
              <span className="group-hover:underline">Garantía de Autenticidad 100% y 14 Días Devolución</span>
            </button>

            {/* Checkout CTA */}
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-white text-black font-display font-black text-sm tracking-wider uppercase rounded-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-98"
            >
              <span>PROCEDER AL PAGO SEGURO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
