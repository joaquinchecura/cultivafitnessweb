import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const apps = [
  {
    name: 'BODYMIND',
    tag: 'FITNESS',
    tagColor: '#4ADE80',
    gradient: 'from-cultiva-green to-cultiva-green-dark',
    desc: 'La App de bienestar integral que combina entrenamiento, nutrición y neurociencia para mejorar tu cuerpo, mente y rendimiento.',
    features: ['Tracking de progreso', 'Planes adaptativos', 'Biblioteca de ejercicios'],
    link: 'https://bodymind.cultivafitness.app/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M6.5 6.5h11M6.5 17.5h11M6 12h12M4 12a8 8 0 0116 0 8 8 0 01-16 0z" />
      </svg>
    ),
  },
  {
    name: 'Cultiva Nutre',
    tag: 'NUTRICIÓN',
    tagColor: '#60A5FA',
    gradient: 'from-cultiva-blue to-blue-600',
    desc: 'Planificación nutricional inteligente basada en tus objetivos. Macros, micros y timing optimizado.',
    features: ['Contador de macros', 'Recetas personalizadas', 'Sincronización con entrenos'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: 'Cultiva Mente',
    tag: 'NEUROCIENCIA',
    tagColor: '#2DD4BF',
    gradient: 'from-cultiva-teal to-teal-600',
    desc: 'Entrena tu cerebro con protocolos basados en neuroplasticidad. Meditación, focus y recovery mental.',
    features: ['Protocolos de focus', 'Meditación guiada', 'Análisis de hábitos'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 01-4.5-4.5A9.01 9.01 0 0012 3z" />
      </svg>
    ),
  },
  {
    name: 'Cultiva Cuerpo',
    tag: 'FISIOLOGÍA',
    tagColor: '#a78bfa',
    gradient: 'from-cultiva-purple to-violet-600',
    desc: 'Monitorea tus biomarcadores, ciclo de sueño y recuperación. Datos que revelan tu fisiología única.',
    features: ['Tracking de sueño', 'Biomarcadores', 'Análisis HRV'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    name: 'Cultiva Wellness',
    tag: 'WELLNESS',
    tagColor: '#fbbf24',
    gradient: 'from-cultiva-yellow to-amber-500',
    desc: 'Bienestar integral que une cuerpo y mente. Hábitos, journaling y balance para una vida plena.',
    features: ['Tracker de hábitos', 'Journaling diario', 'Balance semanal'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: 'Cultiva Social',
    tag: 'COMUNIDAD',
    tagColor: '#f472b6',
    gradient: 'from-cultiva-pink to-pink-500',
    desc: 'Conecta con tu tribu. Comparte progresos, participa en retos y aprende de expertos.',
    features: ['Retos grupales', 'Leaderboards', 'Contenido exclusivo'],
    link: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export function AppsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length === 0) return;
      gsap.fromTo(
        validCards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="apps"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 bg-cultiva-bg"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-green tracking-[0.2em] block mb-4">
            TU ECOSISTEMA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Una app para cada dimensión de tu bienestar
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg">
            Desde ejercicios hasta neurociencias, cada aplicación está diseñada con rigor científico y una experiencia intuitiva.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={app.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative bg-cultiva-surface border border-cultiva-green/[0.08] rounded-[20px] p-8 transition-all duration-500 hover:border-cultiva-green/30 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(74,222,128,0.08)]"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-cultiva-bg mb-5 transition-transform duration-300 group-hover:scale-105`}
              >
                {app.icon}
              </div>

              {/* Tag */}
              <span
                className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase mb-3"
                style={{ backgroundColor: `${app.tagColor}15`, color: app.tagColor }}
              >
                {app.tag}
              </span>

              {/* Name */}
              <h3 className="text-xl font-semibold text-cultiva-text mb-3">
                {app.name}
              </h3>

              {/* Desc */}
              <p className="text-cultiva-secondary text-sm leading-relaxed mb-5">
                {app.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {app.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-cultiva-muted text-sm">
                    <Check className="w-3.5 h-3.5 text-cultiva-green flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={app.link}
                target={app.link.startsWith('http') ? '_blank' : undefined}
                rel={app.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1 text-sm font-medium text-cultiva-green hover:translate-x-1 transition-transform duration-300"
              >
                {app.link === '#' ? 'Próximamente' : 'Probar Ahora'}
                {app.link !== '#' && <ExternalLink className="w-3.5 h-3.5" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
