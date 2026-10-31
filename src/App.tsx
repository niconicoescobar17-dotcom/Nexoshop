import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedKicks } from './components/FeaturedKicks';
import { TrendBanner } from './components/TrendBanner';
import { ValueProps } from './components/ValueProps';
import { PoliciesWarrantyModal } from './components/PoliciesWarrantyModal';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { Toast, ToastMessage } from './components/Toast';
import { FEATURED_SNEAKERS, POLICIES_DATA } from './data/sneakers';
import { Sneaker, CartItem } from './types/sneaker';
import { ShieldCheck, Lock, CheckCircle2, ChevronRight, Award } from 'lucide-react';

export default function App() {
  // Initial cart with 2 items matching the '2' badge in the mockup image
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      sneaker: FEATURED_SNEAKERS[0],
      selectedSize: 9.5,
      selectedColor: FEATURED_SNEAKERS[0].colors[0].name,
      quantity: 1,
    },
    {
      id: 'cart-init-2',
      sneaker: FEATURED_SNEAKERS[1],
      selectedSize: 10,
      selectedColor: FEATURED_SNEAKERS[1].colors[0].name,
      quantity: 1,
    },
  ]);

  const [wishlist, setWishlist] = useState<string[]>(['jordan-4-black-canvas']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewSneaker, setQuickViewSneaker] = useState<Sneaker | null>(null);
  const [policyModal, setPolicyModal] = useState<{ isOpen: boolean; tab: 'privacy' | 'warranty' }>({
    isOpen: false,
    tab: 'warranty',
  });
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeInlinePolicyTab, setActiveInlinePolicyTab] = useState<'warranty' | 'privacy'>('warranty');
  const [checkoutSuccessModal, setCheckoutSuccessModal] = useState(false);

  const addToast = (type: ToastMessage['type'], title: string, description?: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (sneaker: Sneaker, size: number, color: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.sneaker.id === sneaker.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            id: `item-${Date.now()}`,
            sneaker,
            selectedSize: size,
            selectedColor: color,
            quantity: 1,
          },
        ];
      }
    });

    addToast(
      'cart',
      `¡${sneaker.name} Añadido!`,
      `Talla US ${size} · ${color}. Verificación de autenticidad incluida.`
    );
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    addToast('info', 'Producto eliminado', 'Se actualizó tu carrito de drops.');
  };

  const handleToggleWishlist = (sneakerId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(sneakerId);
      if (exists) {
        addToast('wishlist', 'Eliminado de favoritos', 'Puedes volver a añadirlo cuando quieras.');
        return prev.filter((id) => id !== sneakerId);
      } else {
        const item = FEATURED_SNEAKERS.find((s) => s.id === sneakerId);
        addToast('wishlist', '¡Guardado en favoritos!', item?.name || 'Zapatilla guardada');
        return [...prev, sneakerId];
      }
    });
  };

  const handleCopItClick = () => {
    navigator.clipboard?.writeText?.('COPIT15');
    addToast(
      'discount',
      '¡Código Secreto Activado: COPIT15!',
      'Copiado al portapapeles. 15% de descuento en tu próximo drop.'
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCheckoutSuccessModal(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col font-sans-ui">
      {/* 1. Header Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPolicy={(tab) => setPolicyModal({ isOpen: true, tab })}
        onScrollToSection={scrollToSection}
      />

      {/* 2. Hero Section (Matching top of flyer) */}
      <Hero
        onShopDrop={() => scrollToSection('featured')}
        onCopItClick={handleCopItClick}
      />

      {/* 3. Featured Kicks Section (Matching middle of flyer) */}
      <FeaturedKicks
        sneakers={FEATURED_SNEAKERS}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onQuickView={(sneaker) => setQuickViewSneaker(sneaker)}
        onViewAllClick={() => scrollToSection('featured')}
      />

      {/* 4. Trend Banner (Matching bottom of flyer: "DON'T FOLLOW THE TREND. SET IT.") */}
      <TrendBanner
        onShopNow={() => scrollToSection('featured')}
        onOpenWarranty={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
      />

      {/* 5. Value Propositions Strip (Matching the 4 icons in the bottom strip) */}
      <ValueProps
        onOpenWarranty={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
      />

      {/* 6. Dedicated On-Page Legal & Warranty Section */}
      <section id="policies" className="w-full bg-[#101115] py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#EA2825] font-mono text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>TRANSPARENCIA TOTAL & SEGURIDAD</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                POLÍTICAS Y CONDICIONES DE GARANTÍA
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                En KICKED. protegemos a cada comprador con normas claras de autenticidad de por vida, garantía contra defectos y rigurosa protección de datos personales.
              </p>
            </div>

            {/* Interactive Toggle for the Section */}
            <div className="flex items-center p-1 bg-black/50 border border-white/15 rounded-lg self-start md:self-auto">
              <button
                onClick={() => setActiveInlinePolicyTab('warranty')}
                className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
                  activeInlinePolicyTab === 'warranty'
                    ? 'bg-[#EA2825] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Condiciones de Garantía</span>
              </button>
              <button
                onClick={() => setActiveInlinePolicyTab('privacy')}
                className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
                  activeInlinePolicyTab === 'privacy'
                    ? 'bg-[#EA2825] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>Políticas de Privacidad</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeInlinePolicyTab === 'warranty' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {POLICIES_DATA.warranty.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#EA2825]/20 text-[#EA2825] flex items-center justify-center font-mono font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wide mb-2">
                      {sec.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans-ui">
                      {sec.content}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#EA2825]">
                    <span>Kicked Verified</span>
                    <button
                      onClick={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
                      className="hover:underline flex items-center gap-0.5 cursor-pointer text-neutral-400 hover:text-white"
                    >
                      <span>Ver detalles</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {POLICIES_DATA.privacy.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white uppercase tracking-wide mb-2">
                      {sec.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans-ui">
                      {sec.content}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-blue-400">
                    <span>RGPD / PCI-DSS</span>
                    <button
                      onClick={() => setPolicyModal({ isOpen: true, tab: 'privacy' })}
                      className="hover:underline flex items-center gap-0.5 cursor-pointer text-neutral-400 hover:text-white"
                    >
                      <span>Leer completo</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Policy Modal Trigger Bar */}
          <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-ui">
            <div className="flex items-center gap-2 text-neutral-300">
              <Award className="w-5 h-5 text-[#D4FF00]" />
              <span>
                Certificado oficial de autenticidad emitido con cada compra y respaldado por peritaje profesional.
              </span>
            </div>
            <button
              onClick={() => setPolicyModal({ isOpen: true, tab: activeInlinePolicyTab })}
              className="px-4 py-2 border border-white/20 hover:border-white text-white font-display font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shrink-0"
            >
              Abrir Documento Completo
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyModal({ isOpen: true, tab: 'privacy' })}
        onOpenWarranty={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
        onScrollToSection={scrollToSection}
      />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenWarranty={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
        onCheckout={handleCheckout}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        sneaker={quickViewSneaker}
        isOpen={!!quickViewSneaker}
        isWishlisted={quickViewSneaker ? wishlist.includes(quickViewSneaker.id) : false}
        onClose={() => setQuickViewSneaker(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onOpenWarranty={() => setPolicyModal({ isOpen: true, tab: 'warranty' })}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        sneakers={FEATURED_SNEAKERS}
        onClose={() => setIsSearchOpen(false)}
        onSelectSneaker={(sneaker) => setQuickViewSneaker(sneaker)}
      />

      {/* Comprehensive Policies & Warranty Modal */}
      <PoliciesWarrantyModal
        isOpen={policyModal.isOpen}
        initialTab={policyModal.tab}
        onClose={() => setPolicyModal({ ...policyModal, isOpen: false })}
      />

      {/* Checkout Success Simulated Modal */}
      {checkoutSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14151a] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              ¡ORDEN CONFIRMADA!
            </h3>

            <p className="text-xs text-neutral-300 font-sans-ui leading-relaxed">
              Tu pedido <strong>#KCK-9182</strong> ha ingresado a la bóveda para la inspección física de autenticación de 12 puntos. Recibirás tu guía de rastreo y certificado digital en tu correo.
            </p>

            <div className="p-3 bg-black/50 border border-white/10 rounded-lg text-xs font-mono text-left space-y-1 text-neutral-400">
              <p className="text-white font-bold">Resumen de Garantía:</p>
              <p>✓ 100% Legit Guarantee (Reembolso 200%)</p>
              <p>✓ 30 días contra defectos de fabricación</p>
              <p>✓ 14 días para cambio de talla sin costo</p>
            </div>

            <button
              onClick={() => {
                setCheckoutSuccessModal(false);
                setCartItems([]);
              }}
              className="w-full py-3 bg-white text-black font-display font-black text-xs uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              VOLVER A LA TIENDA
            </button>
          </div>
        </div>
      )}

      {/* Floating Interactive Toast Stack */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
