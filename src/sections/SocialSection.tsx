import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Youtube, Instagram, Music, Radio, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: 'YouTube',
    handle: '@cultivafitness',
    icon: Youtube,
    iconColor: '#FF0000',
    cta: 'social.subscribe' as const,
    url: 'https://www.youtube.com/@CULTIVAFITNESS',
  },
  {
    name: 'Instagram',
    handle: '@cultivafitness',
    icon: Instagram,
    iconColor: '#E4405F',
    cta: 'social.follow' as const,
    url: 'https://www.instagram.com/cultivafitness/',
  },
  {
    name: 'TikTok',
    handle: '@cultivafitness',
    icon: Music,
    iconColor: '#111827', // antes #F4F7F3 (casi blanco): el ícono no se veía sobre el fondo claro
    cta: 'social.follow' as const,
    // url: pendiente
  },
  {
    name: 'Podcast',
    handle: 'Cultiva Podcast',
    icon: Radio,
    iconColor: '#1DB954',
    cta: 'social.listen' as const,
    // url: pendiente
  },
];

export function SocialSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length === 0) return;
      gsap.fromTo(
        validCards,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const chipBase =
    'group flex items-center gap-3 rounded-2xl border border-cultiva-border/70 bg-white/60 backdrop-blur px-4 py-3 transition-all duration-300';

  return (
    <section
      id="comunidad"
      ref={sectionRef}
      className="relative py-12 lg:py-14 px-6"
      style={{
        background: 'linear-gradient(135deg, #F1F5EF 0%, #E8F0FB 50%, #F1F5EF 100%)',
      }}
    >
      <div className="site-container">
        {/* Header compacto */}
        <div className="text-center max-w-[560px] mx-auto mb-8">
          <span className="font-mono-label text-cultiva-yellow tracking-[0.2em] block mb-2">
            {t('social.label')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-cultiva-text mb-2 tracking-tight">
            {t('social.title')}
          </h2>
          <p className="text-cultiva-secondary text-sm sm:text-base">
            {t('social.subtitle')}
          </p>
        </div>

        {/* Redes: chips en una sola fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1000px] mx-auto">
          {socials.map((social, i) => {
            const Icon = social.icon;
            const inner = (
              <>
                <div
                  className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${social.iconColor}15` }}
                >
                  <Icon className="w-[18px] h-[18px]" style={{ color: social.iconColor }} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <h3 className="text-sm font-semibold text-cultiva-text leading-tight">{social.name}</h3>
                  <p className="text-cultiva-muted text-xs font-mono truncate">{social.handle}</p>
                </div>
                {social.url ? (
                  <ArrowUpRight
                    className="w-4 h-4 shrink-0 text-cultiva-muted transition-all duration-300 group-hover:text-cultiva-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-cultiva-muted">
                    {t('social.soon')}
                  </span>
                )}
              </>
            );

            return (
              <div key={social.name} ref={(el) => { if (el) cardsRef.current[i] = el; }}>
                {social.url ? (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t(social.cta)} ${t('social.on')} ${social.name}`}
                    className={`${chipBase} hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`${chipBase} opacity-70 cursor-default`}>{inner}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}