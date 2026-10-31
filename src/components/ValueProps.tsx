import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

interface ValuePropsProps {
  onOpenWarranty: () => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ onOpenWarranty }) => {
  const perks = [
    {
      icon: ShieldCheck,
      title: '100% AUTHENTIC',
      desc: 'Every pair is verified',
      sub: 'Inspección física en 12 puntos',
    },
    {
      icon: Truck,
      title: 'FAST SHIPPING',
      desc: 'Get it to your door',
      sub: 'Despacho express con rastreo',
    },
    {
      icon: RotateCcw,
      title: 'EASY RETURNS',
      desc: '14 days return policy',
      sub: 'Cambio de talla sin fricciones',
    },
    {
      icon: Headphones,
      title: 'ALWAYS HERE',
      desc: 'We got your back',
      sub: 'Soporte especializado 24/7',
    },
  ];

  return (
    <section id="values" className="w-full bg-[#070709] text-white py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div
                key={index}
                onClick={onOpenWarranty}
                className="flex items-center gap-3.5 group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors"
                title="Haz clic para ver las condiciones de garantía"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#EA2825]/50 group-hover:bg-[#EA2825]/10 transition-colors">
                  <Icon className="w-5 h-5 text-neutral-300 group-hover:text-[#EA2825] transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-white group-hover:text-white transition-colors truncate">
                    {perk.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-sans-ui truncate">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
