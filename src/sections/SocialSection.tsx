import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Youtube, Instagram, Music, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: 'YouTube',
    handle: '@cultivafitness',
    icon: Youtube,
    iconColor: '#FF0000',
    cta: 'Suscribirse',
  },
  {
    name: 'Instagram',
    handle: '@cultivafitness',
    icon: Instagram,
    iconColor: '#E4405F',
    cta: 'https://www.youtube.com/@CULTIVAFITNESS',
  },
  {
    name: 'TikTok',
    handle: '@cultivafitness',
    icon: Music,
    iconColor: '#F4F7F3',
    cta: 'Seguir',
  },
  {
    name: 'Podcast',
    handle: 'Cultiva Podcast',
    followers: 'Episodios semanales',
    icon: Radio,
    iconColor: '#1DB954',
    cta: 'Escuchar',
  },
];

export function SocialSection() {
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
      id="comunidad"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6"
      style={{
        background: 'linear-gradient(135deg, #0B0F0A 0%, #0A1F3D 50%, #0B0F0A 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-yellow tracking-[0.2em] block mb-4">
            COMUNIDAD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Crecemos juntos
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg">
            Síguenos para contenido diario, retos en vivo y una dosis de ciencia aplicada a tu bienestar.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <div
                key={social.name}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group relative bg-cultiva-surface/60 backdrop-blur-xl border border-white/5 rounded-[20px] p-10 text-center hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${social.iconColor}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: social.iconColor }} />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-cultiva-text mb-1">
                  {social.name}
                </h3>

                {/* Handle */}
                <p className="text-cultiva-secondary text-sm font-mono mb-1">
                  {social.handle}
                </p>

                {/* Followers */}
                <p className="text-cultiva-muted text-sm mb-6">
                  {social.followers}
                </p>

                {/* CTA */}
                <button
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 hover:bg-white/5"
                  style={{ borderColor: `${social.iconColor}30`, color: social.iconColor }}
                >
                  {social.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
