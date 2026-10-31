import React, { useState } from 'react';
import { Search, User, ShoppingBag, ChevronDown, ShieldCheck, Flame } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenPolicy: (tab: 'privacy' | 'warranty') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenPolicy,
  onScrollToSection,
}) => {
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0c]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 group"
          >
            <span className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white group-hover:text-neutral-200 transition-colors">
              KICKED
            </span>
            <span className="w-2.5 h-2.5 bg-[#EA2825] inline-block ml-0.5 rounded-xs animate-pulse"></span>
          </a>
        </div>

        {/* Zone 2: Navigation Links (single-line, clean typography) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wider text-neutral-300">
          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShopMenuOpen(!shopMenuOpen)}
              onMouseEnter={() => setShopMenuOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-2 uppercase text-xs tracking-widest font-display"
            >
              <span>SHOP</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </button>

            {shopMenuOpen && (
              <div
                onMouseLeave={() => setShopMenuOpen(false)}
                className="absolute top-full left-0 w-52 py-2 bg-[#121316] border border-white/15 rounded-md shadow-2xl z-50 text-xs font-medium"
              >
                <button
                  onClick={() => {
                    onScrollToSection('featured');
                    setShopMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-white text-neutral-300 flex items-center justify-between"
                >
                  <span>Ver Todos los Drops</span>
                  <Flame className="w-3.5 h-3.5 text-[#EA2825]" />
                </button>
                <button
                  onClick={() => {
                    onScrollToSection('featured');
                    setShopMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-white text-neutral-300"
                >
                  Air Jordan Retro
                </button>
                <button
                  onClick={() => {
                    onScrollToSection('featured');
                    setShopMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-white text-neutral-300"
                >
                  Nike Dunk Low & High
                </button>
                <button
                  onClick={() => {
                    onScrollToSection('featured');
                    setShopMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 hover:text-white text-neutral-300"
                >
                  Yeezy Boost Classics
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onScrollToSection('featured')}
            className="hover:text-white transition-colors uppercase text-xs tracking-widest font-display cursor-pointer"
          >
            NEW DROPS
          </button>

          <button
            onClick={() => onScrollToSection('trend')}
            className="hover:text-white transition-colors uppercase text-xs tracking-widest font-display cursor-pointer"
          >
            BRANDS
          </button>

          <button
            onClick={() => onScrollToSection('values')}
            className="hover:text-white transition-colors uppercase text-xs tracking-widest font-display cursor-pointer"
          >
            ABOUT
          </button>

          <button
            onClick={() => onOpenPolicy('warranty')}
            className="hover:text-[#EA2825] transition-colors uppercase text-xs tracking-widest font-display cursor-pointer flex items-center gap-1.5 text-neutral-300"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#EA2825]" />
            <span>GARANTÍA & AUTENTICIDAD</span>
          </button>
        </nav>

        {/* Zone 3: Interactive Affordances (Search, Account, Cart) */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Buscar zapatillas"
            className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* User Button */}
          <div className="relative">
            <button
              onClick={() => setUserModalOpen(!userModalOpen)}
              aria-label="Mi Cuenta Kicked"
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <User className="w-5 h-5" />
            </button>

            {userModalOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-[#14151a] border border-white/15 rounded-lg shadow-2xl text-xs z-50">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#EA2825]/20 text-[#EA2825] flex items-center justify-center font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-semibold text-white">Coleccionista VIP</p>
                    <p className="text-[11px] text-neutral-400">Drops prioritarios activados</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onOpenPolicy('warranty');
                      setUserModalOpen(false);
                    }}
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 text-neutral-300"
                  >
                    Estado de Garantías & Devoluciones
                  </button>
                  <button
                    onClick={() => {
                      onOpenPolicy('privacy');
                      setUserModalOpen(false);
                    }}
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-white/10 text-neutral-300"
                  >
                    Políticas de Privacidad
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shopping Cart Button with numeric badge */}
          <button
            onClick={onOpenCart}
            aria-label="Ver carrito de compras"
            className="relative p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 bg-[#EA2825] text-white text-[11px] font-bold rounded-full flex items-center justify-center font-mono shadow-md animate-in zoom-in-50 duration-200">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
