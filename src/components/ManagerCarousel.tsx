import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

interface ManagerSlide {
  src: string;
  alt: TranslationKey;      // clave en translations.ts: descripción visible debajo de la imagen
  caption: TranslationKey;  // clave en translations.ts: texto corto de la pestaña
}

// Capturas 16:9 (ej: 1600×900). Las rutas empiezan con "/" y están dentro de /public.
const slides: ManagerSlide[] = [
  {
    src: '/images/screenshots/mandashboard1.webp',
    alt: 'mgr.dashboard.alt',
    caption: 'mgr.dashboard.caption',
  },
  {
    src: '/images/screenshots/manclientes1.webp',
    alt: 'mgr.clients.alt',
    caption: 'mgr.clients.caption',
  },
  {
    src: '/images/screenshots/managenda1.webp',
    alt: 'mgr.agenda.alt',
    caption: 'mgr.agenda.caption',
  },
  {
    src: '/images/screenshots/manejercicios1.webp',
    alt: 'mgr.exercises.alt',
    caption: 'mgr.exercises.caption',
  },
  {
    src: '/images/screenshots/miplanrutina.webp',
    alt: 'mgr.routine.alt',
    caption: 'mgr.routine.caption',
  }
  ];

const AUTOPLAY_MS = 3500;
const BROWSER_URL = 'cultivafitness.app'; // texto que se ve en la barra del marco

export function ManagerCarousel() {
  const { t } = useLanguage();
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
      aria-roledescription={t('mgr.roledesc')}
      aria-label={t('mgr.region')}
    >
      {/* Marco tipo ventana de navegador: barra superior con puntos y dirección */}
      <div className="group relative overflow-hidden rounded-2xl bg-[#0F172A] ring-1 ring-black/30 shadow-[0_30px_80px_rgba(16,28,20,0.25)]">
        {/* Barra del navegador */}
        <div className="flex items-center gap-3 bg-[#1E293B] px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto flex w-full max-w-[420px] items-center justify-center gap-1.5 rounded-md bg-[#0F172A]/70 px-3 py-1 text-[11px] text-slate-400">
            <Lock className="h-3 w-3" aria-hidden="true" />
            {BROWSER_URL}
          </div>
          <div className="hidden w-[54px] sm:block" aria-hidden="true" />
        </div>

        {/* Pantalla (captura 16:9) */}
        <div className="relative aspect-video bg-cultiva-elevated">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={t(slide.alt)}
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
              aria-label={t('mgr.prev')}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-cultiva-text opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t('mgr.next')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-cultiva-text opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </>
        )}
        </div>
      </div>

      {/* Descripción visible de la captura actual (siempre debajo, nunca tapada) */}
      <p
        className="mt-5 text-center text-sm sm:text-base text-cultiva-secondary min-h-[1.5rem]"
        aria-live="polite"
      >
        {t(slides[index].alt)}
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
              {t(slide.caption)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}