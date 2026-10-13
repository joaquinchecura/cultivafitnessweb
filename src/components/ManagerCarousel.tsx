import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ManagerSlide {
  src: string;
  alt: string;      // descripción: se muestra como texto visible debajo de la imagen
  caption: string;  // texto corto de la pestaña: "Clientes", "Rutinas", etc.
}

// Capturas 16:9 (ej: 1600×900). Las rutas empiezan con "/" y están dentro de /public.
const slides: ManagerSlide[] = [
  {
    src: '/images/screenshots/mandash1.jpg',
    alt: 'Dashboard de MANAGER con el resumen del negocio',
    caption: 'Dashboard',
  },
  {
    src: '/images/screenshots/manager-clientes.webp',
    alt: 'Panel de clientes en MANAGER',
    caption: 'Clientes',
  },
  {
    src: '/images/screenshots/manager-rutinas.webp',
    alt: 'Generador de rutinas en MANAGER',
    caption: 'Rutinas',
  },
];

const AUTOPLAY_MS = 4500;

export function ManagerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count, paused, reduceMotion]);

  if (count === 0) return null;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Capturas de la plataforma MANAGER"
    >
      {/* Sin marco: la captura 16:9 va directo, con bordes redondeados y sombra */}
      <div className="group relative aspect-video rounded-2xl overflow-hidden bg-cultiva-elevated border border-cultiva-border shadow-[0_30px_80px_rgba(16,28,20,0.15)]">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Captura anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-cultiva-text opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Captura siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-cultiva-text opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {/* Descripción visible de la captura actual (siempre debajo, nunca tapada) */}
      <p
        className="mt-5 text-center text-sm sm:text-base text-cultiva-secondary min-h-[1.5rem]"
        aria-live="polite"
      >
        {slides[index].alt}
      </p>

      {/* Pestañas con el nombre de cada pantalla */}
      {count > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              type="button"
              onClick={() => go(i)}
              aria-current={i === index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                i === index
                  ? 'bg-cultiva-green-dark text-white'
                  : 'border border-cultiva-border text-cultiva-secondary hover:bg-cultiva-elevated'
              }`}
            >
              {slide.caption}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}