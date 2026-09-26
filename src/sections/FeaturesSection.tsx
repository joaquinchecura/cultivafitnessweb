import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Dumbbell, CreditCard, CalendarClock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Users,
    iconBg: 'bg-cultiva-green/10',
    iconColor: '#16A34A',
    tag: 'CLIENTES',
    title: 'Toda tu cartera, en un solo lugar',
    desc: 'Fichas de clientes, historial, evolución y notas. Dejá las planillas sueltas y los chats dispersos: cada cliente tiene su perfil completo, siempre a mano.',
  },
  {
    icon: Dumbbell,
    iconBg: 'bg-cultiva-blue/10',
    iconColor: '#2563EB',
    tag: 'RUTINAS & EJERCICIOS',
    title: 'Armá rutinas en minutos, no en horas',
    desc: 'Biblioteca de más de 780 ejercicios con generador automático de rutinas. Asigná, duplicá y ajustá programas de entrenamiento sin volver a escribir todo de cero.',
  },
  {
    icon: CreditCard,
    iconBg: 'bg-cultiva-purple/10',
    iconColor: '#7C3AED',
    tag: 'PAGOS & MEMBRESÍAS',
    title: 'Cobrá sin perseguir a nadie',
    desc: 'Planes, membresías y pagos en un mismo panel. Sabé quién debe, quién está al día y cuándo vence cada membresía, sin planillas de Excel paralelas.',
  },
  {
    icon: CalendarClock,
    iconBg: 'bg-cultiva-yellow/10',
    iconColor: '#D97706',
    tag: 'AGENDA & TURNOS',
    title: 'Tu agenda y la de tu equipo, sincronizadas',
    desc: 'Clases, turnos y reservas en tiempo real. Cada coach de tu equipo ve su propia agenda, y vos ves todo el panorama del negocio.',
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
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
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="feature-card group p-8 lg:p-10 rounded-2xl bg-cultiva-surface border border-cultiva-border hover:border-cultiva-green/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
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
          })}
        </div>
      </div>
    </section>
  );
}