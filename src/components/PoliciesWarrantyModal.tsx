import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, AlertCircle, FileText, ArrowRight, Printer } from 'lucide-react';
import { POLICIES_DATA } from '../data/sneakers';

interface PoliciesWarrantyModalProps {
  isOpen: boolean;
  initialTab?: 'privacy' | 'warranty';
  onClose: () => void;
}

export const PoliciesWarrantyModal: React.FC<PoliciesWarrantyModalProps> = ({
  isOpen,
  initialTab = 'warranty',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'warranty'>(initialTab);

  if (!isOpen) return null;

  const currentData = activeTab === 'privacy' ? POLICIES_DATA.privacy : POLICIES_DATA.warranty;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#121316] text-white rounded-2xl border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Tabs */}
        <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#18191e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EA2825]/20 border border-[#EA2825]/30 flex items-center justify-center text-[#EA2825]">
              {activeTab === 'warranty' ? <ShieldCheck className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl tracking-wide uppercase text-white">
                {currentData.title}
              </h3>
              <p className="text-xs text-neutral-400 font-sans-ui">
                {currentData.subtitle} · Actualizado: {currentData.lastUpdated}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Tab switchers */}
            <div className="flex items-center p-1 bg-white/5 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveTab('warranty')}
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                  activeTab === 'warranty'
                    ? 'bg-[#EA2825] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Garantía y Autenticidad
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-[#EA2825] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Privacidad
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans-ui text-sm text-neutral-300 leading-relaxed">
          {/* Quick Notice Banner */}
          {activeTab === 'warranty' ? (
            <div className="p-4 rounded-xl bg-[#EA2825]/10 border border-[#EA2825]/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#EA2825] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-display">
                  Promesa KICKED: Cero réplicas no autorizadas.
                </p>
                <p className="text-neutral-300">
                  Cada par incluye un tag criptográfico y sello físico inviolable con número de serie único verificado antes de salir de nuestras bóvedas.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-bold text-white uppercase tracking-wider font-display">
                  Cifrado de Extremo a Extremo
                </p>
                <p className="text-neutral-300">
                  Cumplimos estrictamente con la normativa europea de protección de datos (RGPD) y leyes de comercio electrónico vigentes.
                </p>
              </div>
            </div>
          )}

          {/* Section Items */}
          <div className="space-y-6">
            {currentData.sections.map((section, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                <h4 className="font-display font-bold text-base sm:text-lg text-white mb-2 uppercase tracking-wide">
                  {section.title}
                </h4>
                <p className="text-neutral-300 mb-3">{section.content}</p>
                {section.bullets && (
                  <ul className="space-y-2 pl-4 border-l-2 border-[#EA2825]/50">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                        <span className="text-[#EA2825] font-bold">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Authenticity Certificate Highlights */}
          {activeTab === 'warranty' && (
            <div className="mt-6 p-5 rounded-xl bg-black/40 border border-white/10">
              <h5 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#EA2825]" />
                Protocolo de Devolución en 3 Pasos
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-mono font-bold text-[#EA2825]">01. Contacto</span>
                  <p className="text-neutral-400 mt-1">Escribe a soporte@kicked.drops con tu número de orden #KCK.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-mono font-bold text-[#EA2825]">02. Guía Prepago</span>
                  <p className="text-neutral-400 mt-1">Te enviamos una etiqueta prepagada de DHL Express o FedEx.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="font-mono font-bold text-[#EA2825]">03. Cambio o Reembolso</span>
                  <p className="text-neutral-400 mt-1">Inspección de 24h en bodega y despacho inmediato de tu reemplazo.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#16171c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-400">
            ¿Dudas sobre tu garantía? Escríbenos a{' '}
            <a href="mailto:soporte@kicked.drops" className="text-[#EA2825] underline">
              soporte@kicked.drops
            </a>
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 border border-white/20 hover:border-white/50 text-neutral-300 hover:text-white rounded-md transition-colors flex items-center gap-1.5 cursor-pointer font-mono"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Documento</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#EA2825] hover:bg-[#d0201d] text-white font-display font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer shadow-md"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
