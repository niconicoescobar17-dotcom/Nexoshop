import React from 'react';
import { CheckCircle2, Heart, Sparkles, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'cart' | 'wishlist' | 'discount' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#181920] border border-white/20 text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="mt-0.5">
            {toast.type === 'cart' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'wishlist' && <Heart className="w-5 h-5 text-[#EA2825] fill-[#EA2825]" />}
            {toast.type === 'discount' && <Sparkles className="w-5 h-5 text-[#D4FF00]" />}
            {toast.type === 'info' && <CheckCircle2 className="w-5 h-5 text-blue-400" />}
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-white">
              {toast.title}
            </h5>
            {toast.description && (
              <p className="text-xs text-neutral-400 font-sans-ui mt-0.5">{toast.description}</p>
            )}
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-neutral-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
