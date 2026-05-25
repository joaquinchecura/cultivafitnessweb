// src/components/TipWidget.tsx
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MP_LINK = 'https://mpago.la/XXXXX'; // ← REEMPLAZAR con tu link real

export function TipWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleWidget = () => setIsOpen((prev) => !prev);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        triggerRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Animación de entrada del trigger (delay 2.5s)
  useEffect(() => {
    if (!triggerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(triggerRef.current, {
        scale: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 2.5,
      });
    });

    return () => ctx.revert();
  }, []);

  // Animación del panel (abrir/cerrar)
  useEffect(() => {
    if (!panelRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(panelRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: 'back.out(1.4)',
          visibility: 'visible',
        });
      } else {
        gsap.to(panelRef.current, {
          opacity: 0,
          y: 12,
          scale: 0.96,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            if (panelRef.current) {
              panelRef.current.style.visibility = 'hidden';
            }
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Botón Trigger */}
      <button
        ref={triggerRef}
        onClick={toggleWidget}
        aria-label="Apoyar proyecto"
        className="relative w-[60px] h-[60px] rounded-full bg-gradient-to-br from-green-700 to-green-900 
                   text-white text-2xl flex items-center justify-center shadow-lg shadow-green-900/40 
                   hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-pointer border-none"
      >
        <span className="relative z-10">💚</span>
        <span className="absolute inset-[-4px] rounded-full border-2 border-green-600 animate-[ping_2s_ease-out_infinite] opacity-40" />
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        className="absolute bottom-[76px] right-0 w-[340px] bg-white rounded-3xl shadow-2xl 
                   shadow-black/15 opacity-0 invisible origin-bottom-right overflow-hidden"
        style={{ border: '1px solid rgba(0,0,0,0.06)' }}
      >
        {/* Barra de color superior */}
        <div className="h-[5px] bg-gradient-to-r from-green-700 via-orange-400 to-orange-600" />

        <div className="p-7 relative">
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-4">
            <span className="text-4xl leading-none">🏃‍♂️</span>
            <div>
              <strong className="block text-green-900 text-[17px] font-bold">
                ¿Te ayudó a entrenar?
              </strong>
              <span className="text-green-400 text-[13px] font-medium">
                Tu apoyo me ayuda a seguir creando
              </span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            Usás mis webapps gratis para planificar tus entrenos. Si te aportan valor, podés dejarme un tip.
          </p>

          {/* Selector de montos */}
          <div className="flex gap-2.5 mb-5">
            <a
              href={`${MP_LINK}?amount=500`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-2 rounded-xl border-2 border-gray-100 text-green-700 
                         font-bold text-[15px] hover:border-green-700 hover:bg-green-50 transition-all duration-200"
            >
              $500
            </a>
            <a
              href={`${MP_LINK}?amount=1000`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-2 rounded-xl border-2 border-orange-300 
                         bg-gradient-to-br from-orange-50 to-amber-50 text-orange-700 
                         font-bold text-[15px] relative hover:border-orange-500 transition-all duration-200"
            >
              <span className="absolute -top-2 right-1.5 text-xs text-orange-400">★</span>
              $1.000
            </a>
            <a
              href={`${MP_LINK}?amount=2000`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-2 rounded-xl border-2 border-gray-100 text-green-700 
                         font-bold text-[15px] hover:border-green-700 hover:bg-green-50 transition-all duration-200"
            >
              $2.000
            </a>
          </div>

          {/* CTA Principal */}
          <a
            href={MP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-900 
                       text-white py-4 rounded-2xl font-bold text-[15px] hover:-translate-y-0.5 
                       hover:shadow-lg hover:shadow-green-900/30 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Pagar con MercadoPago
          </a>

          <span className="block text-center mt-3.5 text-green-400/80 text-xs font-medium">
            🔒 100% seguro · Sin complicaciones
          </span>

          {/* Botón cerrar */}
          <button
            onClick={toggleWidget}
            className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-gray-100 text-gray-400 
                       flex items-center justify-center text-sm hover:bg-green-100 hover:text-green-700 
                       transition-all duration-200 cursor-pointer border-none"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}