import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Dumbbell, CreditCard, CalendarClock } from 'lucide-react';
import { useRotatingIndex } from '../components/useRotatingIndex';

gsap.registerPlugin(ScrollTrigger);

interface Shot {
  src: string;
  alt: string;
}

const features: {
  icon: typeof Users;
  iconBg: string;
  iconColor: string;
  tag: string;
  title: string;
  desc: string;
  shots: Shot[]; // capturas 16:9 que se muestran al pasar el mouse
}[] = [
  {
    icon: Users,
    iconBg: 'bg-cultiva-green/10',
    iconColor: '#16A34A',
    tag: 'CLIENTES',
    title: 'Toda tu cartera, en un solo lugar',
    desc: 'Fichas de clientes, historial, evolución y notas. Dejá las planillas sueltas y los chats dispersos: cada cliente tiene su perfil completo, siempre a mano.',
    shots: [
      { src: '/images/screenshots/2.hiit-vs-sit.jpeg', alt: 'Listado de clientes' },
      // { src: '/images/screenshots/manager-cliente-ficha.webp', alt: 'Ficha de un cliente' },
    ],
  },
  {
    icon: Dumbbell,
    iconBg: 'bg-cultiva-blue/10',
    iconColor: '#2563EB',
    tag: 'RUTINAS & EJERCICIOS',
    title: 'Armá rutinas en minutos, no en horas',
    desc: 'Biblioteca de más de 780 ejercicios con generador automático de rutinas. Asigná, duplicá y ajustá programas de entrenamiento sin volver a escribir todo de cero.',
    shots: [],
  },
  {
    icon: CreditCard,
    iconBg: 'bg-cultiva-purple/10',
    iconColor: '#7C3AED',
    tag: 'PAGOS & MEMBRESÍAS',
    title: 'Cobrá sin perseguir a nadie',
    desc: 'Planes, membresías y pagos en un mismo panel. Sabé quién debe, quién está al día y cuándo vence cada membresía, sin planillas de Excel paralelas.',
    shots: [],
  },
  {
    icon: CalendarClock,
    iconBg: 'bg-cultiva-yellow/10',
    iconColor: '#D97706',
    tag: 'AGENDA & TURNOS',
    title: 'Tu agenda y la de tu equipo, sincronizadas',
    desc: 'Clases, turnos y reservas en tiempo real. Cada coach de tu equipo ve su propia agenda, y vos ves todo el panorama del negocio.',
    shots: [],
  },
];

function FeatureCard({
  feature,
  cardRef,
}: {
  feature: (typeof features)[number];
  cardRef: (el: HTMLDivElement | null) => void;
}) {
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
      tabIndex={hasShots ? 0 : undefined}
      aria-label={hasShots ? `${feature.title}. Ver capturas` : undefined}
      className="feature-card group relative overflow-hidden p-8 lg:p-10 rounded-2xl bg-cultiva-surface border border-cultiva-border hover:border-cultiva-green/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cultiva-green"
    >
      {/* Capturas 16:9 al pasar el mouse */}
      {active && hasShots && (
        <div className="absolute inset-0 z-10 bg-cultiva-elevated">
          <img
            key={index}
            src={feature.shots[index].src}
            alt={feature.shots[index].alt}
            className="w-full h-full object-cover object-top animate-[fadeIn_0.6s_ease-out]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute left-5 bottom-4 right-24 text-white text-sm font-medium drop-shadow">
            {feature.shots[index].alt}
          </p>
          <div className="absolute right-5 bottom-5 flex gap-1.5" aria-hidden="true">
            {feature.shots.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-white w-4' : 'bg-white/40 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
        <Icon className="w-6 h-6" style={{ color: feature.iconColor }} aria-hidden="true" />
      </div>
      <span
        className="inline-block text-[11px] font-mono tracking-wider uppercase mb-3"
        style={{ color: feature.iconColor }}
      >
        {feature.tag}
      </span>
      <h3 className="text-2xl lg:text-[28px] font-semibold text-cultiva-text mb-4">
        {feature.title}
      </h3>
      <p className="text-cultiva-secondary text-base lg:text-lg leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

export function FeaturesSection() {
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
      className="relative py-28 lg:py-36 px-6 bg-cultiva-elevated"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <span className="font-mono-label text-cultiva-blue tracking-[0.2em] block mb-4">
            LA PLATAFORMA MANAGER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text tracking-tight">
            Todo lo que necesitás para manejar tu negocio profesional
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              cardRef={(el) => { if (el) cardsRef.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}