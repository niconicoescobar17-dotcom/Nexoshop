import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenWarranty: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenWarranty,
  onScrollToSection,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#070709] text-white border-t border-white/10 pt-16 pb-12 font-sans-ui">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Club Banner */}
        <div className="bg-gradient-to-r from-[#121318] to-[#1c1d24] border border-white/10 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 text-[#EA2825] mb-1 font-mono text-xs uppercase tracking-wider font-bold">
              <Mail className="w-4 h-4" />
              <span>KICKED VIP DROP LIST</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              RECIBE 10% OFF EN TU PRIMER DROP
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Accede a sorteos anticipados, restocks secretos de Jordan y notificaciones de drops limitados antes que nadie.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="tu-correo@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/60 border border-white/15 rounded px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 font-sans focus:outline-none focus:border-[#EA2825]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#EA2825] hover:bg-[#d0201d] text-white font-display font-black text-xs uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-md"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡REGISTRADO!</span>
                  </>
                ) : (
                  <>
                    <span>SUSCRIBIRME</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 font-mono mt-2">
                ¡Bienvenido a KICKED Club! Usa el código <strong>KICKED10</strong> en el checkout.
              </p>
            )}
          </form>
        </div>

        {/* Navigation & Legal Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-3xl tracking-wider text-white">
                KICKED
              </span>
              <span className="w-2.5 h-2.5 bg-[#EA2825] inline-block ml-0.5 rounded-xs"></span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Plataforma curada de sneakers originales y streetwear auténtico. Cada par es inspeccionado físicamente por especialistas certificados bajo estrictas condiciones de garantía.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-3 py-1.5 rounded-md w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantía 100% Legit de por vida</span>
            </div>
          </div>

          {/* Links Column 1: Drops */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-300">
              COLECCIONES
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-sans-ui">
              <li>
                <button
                  onClick={() => onScrollToSection('featured')}
                  className="hover:text-white transition-colors"
                >
                  Featured Kicks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('featured')}
                  className="hover:text-white transition-colors"
                >
                  Air Jordan Retro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('featured')}
                  className="hover:text-white transition-colors"
                >
                  Nike Dunk Low & High
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('featured')}
                  className="hover:text-white transition-colors"
                >
                  Yeezy Boost 700 & 350
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('trend')}
                  className="hover:text-white transition-colors"
                >
                  Drops Exclusivos
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Políticas Requeridas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#EA2825]">
              POLÍTICAS Y GARANTÍA
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-sans-ui">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span className="text-[#EA2825]">›</span>
                  <span className="underline decoration-neutral-600 hover:decoration-white">
                    Políticas de Privacidad (RGPD)
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span className="text-[#EA2825]">›</span>
                  <span className="underline decoration-neutral-600 hover:decoration-white">
                    Condiciones de Garantía y Devolución
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span className="text-[#EA2825]">›</span>
                  <span>Protocolo de Autenticación de 12 Puntos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span className="text-[#EA2825]">›</span>
                  <span>Garantía de Defectos de Fábrica (30 Días)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWarranty}
                  className="hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <span className="text-[#EA2825]">›</span>
                  <span>Política de Retorno y Cambio de Tallas (14 Días)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Soporte */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-neutral-300">
              ATENCIÓN AL CLIENTE
            </h4>
            <p className="text-xs text-neutral-400">
              ¿Preguntas sobre un pedido o autenticidad?
            </p>
            <div className="space-y-1 text-xs font-mono text-neutral-300">
              <p>Email: soporte@kicked.drops</p>
              <p>Horario: Lun - Sáb (09:00 - 20:00 UTC)</p>
              <p>Respuesta promedio: &lt; 2 horas</p>
            </div>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                Pagos Cifrados Seguros
              </span>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="bg-white/10 px-2 py-0.5 rounded">VISA</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">MASTERCARD</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">APPLE PAY</span>
                <span className="bg-white/10 px-2 py-0.5 rounded">PAYPAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 KICKED Inc. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenPrivacy} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Privacidad
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={onOpenWarranty} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Garantía
            </button>
            <span aria-hidden="true">·</span>
            <span>Seguridad PCI-DSS Nivel 1</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
