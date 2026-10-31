import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Dumbbell, CreditCard, CalendarClock, Check } from 'lucide-react';
import { useRotatingIndex } from '../components/useRotatingIndex';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

gsap.registerPlugin(ScrollTrigger);

interface Shot {
  src: string;
  alt: TranslationKey; // clave en translations.ts (features.alt.*)
}

/*
  Los textos (etiqueta, título, descripción, puntos y alt de capturas) viven en translations.ts
  con claves features.<id>.tag / .title / .desc / .b1 / .b2 / .b3 y features.alt.*
*/
const features: {
  id: 'clients' | 'routines' | 'payments' | 'agenda';
  icon: typeof Users;
  iconColor: string;
  cardBg: string; // fondo pastel de la card (tono suave del color del ícono)
  cardBorder: string; // borde pastel un poco más marcado
  shots: Shot[]; // capturas 16:9: la primera se ve siempre, al pasar el mouse rotan
}[] = [
  {
    id: 'clients',
    icon: Users,
    iconColor: '#16A34A',
    cardBg: '#F0FDF4',
    cardBorder: '#BBF7D0',
    shots: [
      { src: '/images/screenshots/manclientes1.webp', alt: 'features.alt.clients' },
      { src: '/images/screenshots/manclientes2.webp', alt: 'features.alt.clients' },
      { src: '/images/screenshots/cliente3.webp', alt: 'features.alt.clients' },
    ],
  },
  {
    id: 'routines',
    icon: Dumbbell,
    iconColor: '#2563EB',
    cardBg: '#EFF6FF',
    cardBorder: '#BFDBFE',
    shots: [
      { src: '/images/screenshots/manejercicios1.webp', alt: 'features.alt.exercises' },
      { src: '/images/screenshots/manejercicios2.webp', alt: 'features.alt.exercises' },
      { src: '/images/screenshots/manrutinas1.webp', alt: 'features.alt.routines' },
      { src: '/images/screenshots/miplanrutina.webp', alt: 'features.alt.routines' },
    ],
  },
  {
    id: 'payments',
    icon: CreditCard,
    iconColor: '#7C3AED',
    cardBg: '#F5F3FF',
    cardBorder: '#DDD6FE',
    shots: [
      { src: '/images/screenshots/manpagos1.webp', alt: 'features.alt.payments' },
      { src: '/images/screenshots/mandashboard1.webp', alt: 'features.alt.clients' },
      { src: '/images/screenshots/memb.webp', alt: 'features.alt.clients' },
    ],
  },
  {
    id: 'agenda',
    icon: CalendarClock,
    iconColor: '#D97706',
    cardBg: '#FFFBEB',
    cardBorder: '#FDE68A',
    shots: [
      { src: '/images/screenshots/managenda1.webp', alt: 'features.alt.agenda' },
      { src: '/images/screenshots/manactividades1.webp', alt: 'features.alt.agenda' },
      { src: '/images/screenshots/manestadisticas1.webp', alt: 'features.alt.stats' },
    ],
  },
];

function FeatureCard({
  feature,
  cardRef,
}: {
  feature: (typeof features)[number];
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const Icon = feature.icon;
  const hasShots = feature.shots.length > 0;
  const index = useRotatingIndex(feature.shots.length, active && hasShots);

  // Precarga al primer hover para evitar parpadeos
  useEffect(() => {
    if (!active || !hasShots) return;
    feature.shots.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, [active, hasShots, feature.shots]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{
        backgroundColor: feature.cardBg,
        borderColor: active ? `${feature.iconColor}66` : feature.cardBorder,
      }}
      className="feature-card group flex flex-col p-6 lg:p-8 rounded-2xl border hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      {/* Encabezado: ícono a la izquierda, etiqueta y título a la derecha */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 shrink-0 rounded-xl bg-white/80 flex items-center justify-center"
        >
          <Icon className="w-6 h-6" style={{ color: feature.iconColor }} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span
            className="block text-[11px] font-mono tracking-wider uppercase mb-1"
            style={{ color: feature.iconColor }}
          >
            {t(`features.${feature.id}.tag` as TranslationKey)}
          </span>
          <h3 className="text-xl lg:text-2xl font-semibold text-cultiva-text leading-snug">
            {t(`features.${feature.id}.title` as TranslationKey)}
          </h3>
        </div>
      </div>

      <p className="text-cultiva-secondary text-base leading-relaxed mb-5">{t(`features.${feature.id}.desc` as TranslationKey)}</p>

      {/* Captura 16:9 siempre visible; al pasar el mouse rota */}
      {hasShots && (
        <figure className="relative aspect-video rounded-xl overflow-hidden border bg-white mb-5"
          style={{ borderColor: feature.cardBorder }}>
          <img
            key={index}
            src={feature.shots[index].src}
            alt={t(feature.shots[index].alt)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top animate-[fadeIn_0.6s_ease-out]"
          />
          {feature.shots.length > 1 && (
            <div className="absolute right-3 bottom-3 flex gap-1.5" aria-hidden="true">
              {feature.shots.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-white w-4 shadow' : 'bg-white/60 w-1.5'
                  }`}
                />
              ))}
            </div>
          )}
        </figure>
      )}

      <ul className="space-y-2.5 mt-auto">
        {(['b1', 'b2', 'b3'] as const).map((n) => (
          <li key={n} className="flex items-start gap-2.5 text-cultiva-secondary text-[15px]">
            <Check
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: feature.iconColor }}
              aria-hidden="true"
            />
            {t(`features.${feature.id}.${n}` as TranslationKey)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-20 lg:py-24 px-6 bg-cultiva-elevated"
    >
      <div className="site-container">
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <span className="font-mono-label text-cultiva-blue tracking-[0.2em] block mb-4">
            {t('features.label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text tracking-tight">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              cardRef={(el) => { if (el) cardsRef.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}