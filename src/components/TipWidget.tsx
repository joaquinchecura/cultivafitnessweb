// src/components/TipWidget.tsx
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const MP_LINK = 'link.mercadopago.com.ar/cultivafitnessapp'; // ← REEMPLAZAR CON TU LINK REAL

export function TipWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<<HTMLDivElement>(null);
  const triggerRef = useRef<<HTMLButtonElement>(null);

  const toggleWidget = () => setIsOpen((prev) => !prev);

  // Mostrar después de 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Animación de entrada
  useEffect(() => {
    if (!isVisible || !triggerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(triggerRef.current, {
        scale: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    });
    return () => ctx.revert();
  }, [isVisible]);

  // Cerrar al click fuera
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

  // Animación del panel
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

  if (!isVisible) {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99999,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Botón Trigger */}
      <button
        ref={triggerRef}
        onClick={toggleWidget}
        aria-label="Apoyar proyecto"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ADE80, #22c55e)',
          color: '#0A0F0A',
          fontSize: '22px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(74, 222, 128, 0.35), 0 0 0 1px rgba(74, 222, 128, 0.2)',
          position: 'relative',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(-3deg)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(74, 222, 128, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(74, 222, 128, 0.35)';
        }}
      >
        <span style={{ position: 'relative', zIndex: 10 }}>💚</span>
        {/* Anillo pulsante */}
        <span
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            border: '2px solid #4ADE80',
            animation: 'tipwidget-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            opacity: 0.4,
          }}
        />
      </button>

      {/* Panel */}
      <div
        ref={panelRef}
        style={{
          position: 'absolute',
          bottom: '72px',
          right: '0',
          width: '320px',
          background: '#141C16',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(74, 222, 128, 0.1)',
          opacity: 0,
          visibility: 'hidden',
          transformOrigin: 'bottom right',
          overflow: 'hidden',
        }}
      >
        {/* Barra de color */}
        <div
          style={{
            height: '4px',
            background: 'linear-gradient(90deg, #4ADE80, #60A5FA)',
          }}
        />

        <div style={{ padding: '24px', position: 'relative' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <span style={{ fontSize: '32px', lineHeight: 1 }}>🏃‍♂️</span>
            <div>
              <strong
                style={{
                  display: 'block',
                  color: '#F4F7F3',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
              >
                ¿Te ayudó a entrenar?
              </strong>
              <span
                style={{
                  color: '#8FA68A',
                  fontSize: '12px',
                  fontWeight: 500,
                }}
              >
                Tu apoyo me ayuda a seguir creando
              </span>
            </div>
          </div>

          {/* Descripción */}
          <p
            style={{
              color: '#8FA68A',
              fontSize: '13px',
              lineHeight: 1.6,
              margin: '0 0 18px 0',
            }}
          >
            Usás mis webapps gratis para planificar tus entrenos. Si te aportan valor, podés dejarme un tip.
          </p>

          {/* Montos */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {[
              { amount: 500, label: '$500', featured: false },
              { amount: 1000, label: '$1.000', featured: true },
              { amount: 2000, label: '$2.000', featured: false },
            ].map((option) => (
              <a
                key={option.amount}
                href={`${MP_LINK}?amount=${option.amount}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '10px 6px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  border: option.featured
                    ? '2px solid rgba(96, 165, 250, 0.4)'
                    : '2px solid rgba(74, 222, 128, 0.15)',
                  background: option.featured
                    ? 'rgba(96, 165, 250, 0.1)'
                    : 'rgba(74, 222, 128, 0.05)',
                  color: option.featured ? '#60A5FA' : '#4ADE80',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = option.featured ? '#60A5FA' : '#4ADE80';
                  e.currentTarget.style.background = option.featured
                    ? 'rgba(96, 165, 250, 0.2)'
                    : 'rgba(74, 222, 128, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = option.featured
                    ? 'rgba(96, 165, 250, 0.4)'
                    : 'rgba(74, 222, 128, 0.15)';
                  e.currentTarget.style.background = option.featured
                    ? 'rgba(96, 165, 250, 0.1)'
                    : 'rgba(74, 222, 128, 0.05)';
                }}
              >
                {option.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '4px',
                      fontSize: '10px',
                    }}
                  >
                    ★
                  </span>
                )}
                {option.label}
              </a>
            ))}
          </div>

          {/* CTA Principal */}
          <a
            href={MP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #4ADE80, #22c55e)',
              color: '#0A0F0A',
              textDecoration: 'none',
              padding: '14px',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '14px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 222, 128, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Pagar con MercadoPago
          </a>

          <span
            style={{
              display: 'block',
              textAlign: 'center',
              marginTop: '12px',
              color: '#8FA68A',
              fontSize: '11px',
              fontWeight: 500,
            }}
          >
            🔒 100% seguro · Sin complicaciones
          </span>

          {/* Cerrar */}
          <button
            onClick={toggleWidget}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(143, 166, 138, 0.1)',
              color: '#8FA68A',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(74, 222, 128, 0.2)';
              e.currentTarget.style.color = '#4ADE80';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(143, 166, 138, 0.1)';
              e.currentTarget.style.color = '#8FA68A';
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}