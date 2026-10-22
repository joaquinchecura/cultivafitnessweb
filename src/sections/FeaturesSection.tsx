import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Dumbbell, CreditCard, CalendarClock, Check } from 'lucide-react';
import { useRotatingIndex } from '../components/useRotatingIndex';

gsap.registerPlugin(ScrollTrigger);

interface Shot {
  src: string;
  alt: string;
}

const features: {
  icon: typeof Users;
  iconColor: string;
  cardBg: string; // fondo pastel de la card (tono suave del color del ícono)
  cardBorder: string; // borde pastel un poco más marcado
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  shots: Shot[]; // capturas 16:9: la primera se ve siempre, al pasar el mouse rotan
}[] = [
  {
    icon: Users,
    iconColor: '#16A34A',
    cardBg: '#F0FDF4',
    cardBorder: '#BBF7D0',
    tag: 'CLIENTES',
    title: 'Toda tu cartera, en un solo lugar',
    desc: 'Fichas de clientes, historial, evolución y notas. Dejá las planillas sueltas y los chats dispersos: cada cliente tiene su perfil completo, siempre a mano.',
    bullets: [
      'Ficha con notas y certificado médico con vencimiento',
      'Composición corporal y evolución en el tiempo',
      'Alta de clientes por link o QR propio',
    ],
    shots: [
      { src: '/images/screenshots/manclientes1.webp', alt: 'Listado de clientes' },
      { src: '/images/screenshots/manclientes2.webp', alt: 'Listado de clientes' }
    ],
  },
  {
    icon: Dumbbell,
    iconColor: '#2563EB',
    cardBg: '#EFF6FF',
    cardBorder: '#BFDBFE',
    tag: 'RUTINAS & EJERCICIOS',
    title: 'Armá rutinas en minutos, no en horas',
    desc: 'Biblioteca de más de 800 ejercicios con generador automático de rutinas. Asigná, duplicá y ajustá programas de entrenamiento sin volver a escribir todo de cero.',
    bullets: [
      'Generador automático según el objetivo del cliente',
      'Plantillas para asignar y duplicar',
      'Seguimiento de cargas por sesión',
    ],
    shots: [
      { src: '/images/screenshots/manejercicios1.webp', alt: 'Ejercicios' },
      { src: '/images/screenshots/manejercicios2.webp', alt: 'Ejercicios' },
      { src: '/images/screenshots/manrutinas1.webp', alt: 'Rutinas' },
    ],
  },
  {
    icon: CreditCard,
    iconColor: '#7C3AED',
    cardBg: '#F5F3FF',
    cardBorder: '#DDD6FE',
    tag: 'PAGOS & MEMBRESÍAS',
    title: 'Cobrá sin perseguir a nadie',
    desc: 'Planes, membresías y pagos en un mismo panel. Sabé quién debe, quién está al día y cuándo vence cada membresía, sin planillas de Excel paralelas.',
    bullets: [
      'Planes mensuales, trimestrales y anuales',
      'Efectivo, transferencia y tarjetas',
      'Caja diaria y alertas de vencimiento',
    ],
    shots: [
      { src: '/images/screenshots/manpagos1.webp', alt: 'Gestión de pagos' },
      { src: '/images/screenshots/manestadisticas1.webp', alt: 'Estadisticas' },
    ],
  },
  {
    icon: CalendarClock,
    iconColor: '#D97706',
    cardBg: '#FFFBEB',
    cardBorder: '#FDE68A',
    tag: 'AGENDA & TURNOS',
    title: 'Tu agenda y la de tu equipo, sincronizadas',
    desc: 'Clases, turnos y reservas en tiempo real. Cada coach de tu equipo ve su propia agenda, y vos ves todo el panorama del negocio.',
    bullets: [
      'Clases grupales y personal training',
      'Reservas con cupo y lista de espera',
      'Control de acceso por QR',
    ],
    shots: [
      { src: '/images/screenshots/managenda1.webp', alt: 'Agenda de clases' },
      { src: '/images/screenshots/manactividades1.webp', alt: 'Agenda de clases' },
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
            {feature.tag}
          </span>
          <h3 className="text-xl lg:text-2xl font-semibold text-cultiva-text leading-snug">
            {feature.title}
          </h3>
        </div>
      </div>

      <p className="text-cultiva-secondary text-base leading-relaxed mb-5">{feature.desc}</p>

      {/* Captura 16:9 siempre visible; al pasar el mouse rota */}
      {hasShots && (
        <figure className="relative aspect-video rounded-xl overflow-hidden border bg-white mb-5"
          style={{ borderColor: feature.cardBorder }}>
          <img
            key={index}
            src={feature.shots[index].src}
            alt={feature.shots[index].alt}
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
        {feature.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-cultiva-secondary text-[15px]">
            <Check
              className="w-4 h-4 mt-0.5 shrink-0"
              style={{ color: feature.iconColor }}
              aria-hidden="true"
            />
            {b}
          </li>
        ))}
      </ul>
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
      className="relative py-20 lg:py-24 px-6 bg-cultiva-elevated"
    >
      <div className="site-container">
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <span className="font-mono-label text-cultiva-blue tracking-[0.2em] block mb-4">
            LA PLATAFORMA MANAGER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text tracking-tight">
            Todo lo que necesitás para manejar tu negocio profesional
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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