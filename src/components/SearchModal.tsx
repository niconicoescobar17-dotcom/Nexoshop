import React, { useState } from 'react';
import { Search, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Sneaker } from '../types/sneaker';
import { ImageSlice } from './ImageSlice';

interface SearchModalProps {
  isOpen: boolean;
  sneakers: Sneaker[];
  onClose: () => void;
  onSelectSneaker: (sneaker: Sneaker) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  sneakers,
  onClose,
  onSelectSneaker,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = sneakers.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.brand.toLowerCase().includes(query.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#14151a] text-white rounded-2xl border border-white/15 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-[#181920]">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Buscar por modelo, marca (Jordan, Dunk, Yeezy) o estilo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-neutral-500 font-sans-ui focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Brands Pills */}
        <div className="p-3 bg-white/5 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <span className="text-neutral-400 pl-2">Filtros:</span>
          {['Todos', 'Jordan', 'Nike', 'Yeezy'].map((brand) => (
            <button
              key={brand}
              onClick={() => setQuery(brand === 'Todos' ? '' : brand)}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                (brand === 'Todos' && query === '') || query.toLowerCase() === brand.toLowerCase()
                  ? 'bg-white text-black font-bold'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-neutral-400">
              <p className="font-display font-bold uppercase text-base text-white">No se encontraron pares</p>
              <p className="text-xs mt-1">Prueba con palabras clave como &quot;Retro&quot;, &quot;Jordan&quot; o &quot;Green&quot;</p>
            </div>
          ) : (
            filtered.map((sneaker) => (
              <div
                key={sneaker.id}
                onClick={() => {
                  onSelectSneaker(sneaker);
                  onClose();
                }}
                className="py-3 px-3 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 bg-black/60 rounded-lg p-1 flex items-center justify-center shrink-0 border border-white/5">
                    {sneaker.imageSlice ? (
                      <ImageSlice
                        sx={sneaker.imageSlice.sx}
                        sy={sneaker.imageSlice.sy}
                        sw={sneaker.imageSlice.sw}
                        sh={sneaker.imageSlice.sh}
                        alt={sneaker.name}
                        containerClassName="w-full h-full"
                      />
                    ) : (
                      <span className="text-[10px] text-neutral-500 font-mono">Kicks</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-[#EA2825] transition-colors uppercase">
                      {sneaker.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono">{sneaker.subtitle}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-display font-black text-sm text-[#EA2825] tabular-nums block">
                    ${sneaker.price.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3 h-3" /> Legit
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
