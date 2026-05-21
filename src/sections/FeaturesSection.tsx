import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, FlaskConical, Smartphone, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Activity,
    iconBg: 'bg-cultiva-green/15',
    iconColor: '#4ADE80',
    title: 'Tracking Inteligente',
    desc: 'Cada métrica importa. Desde repeticiones hasta variabilidad de ingesta calórica, desde evaluaciones físicas hasta análisis de emociones, nuestro sistema de aplicaciones aprende de ti y se adapta.',
  },
  {
    icon: FlaskConical,
    iconBg: 'bg-cultiva-blue/15',
    iconColor: '#60A5FA',
    title: 'Base Científica',
    desc: 'No seguimos modas. Seguimos evidencia. Cada protocolo está respaldado por literatura científica real. Cada app esta desarrollada por profesionales de las ciencias de la salud y el deporte.',
  },
  {
    icon: Smartphone,
    iconBg: 'bg-cultiva-teal/15',
    iconColor: '#2DD4BF',
    title: 'Diseño Intuitivo',
    desc: 'Experiencia fluida que no te distrae de lo importante: tus entrenamientos, tus comidas, tu evolución emocional. Apps diseñadas para todas las edades y perfiles. Desde niños y jóvenes hasta adultos y tercera edad.',
  },
  {
    icon: Users,
    iconBg: 'bg-cultiva-purple/15',
    iconColor: '#a78bfa',
    title: 'Comunidad Viva',
    desc: 'No estás solo. Forma parte de una comunidad que comparte tus objetivos y te impulsa a superarlos.',
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
      className="relative py-28 lg:py-36 px-6"
      style={{
        background: 'linear-gradient(180deg, #0B0F0A 0%, #0D3328 50%, #0B0F0A 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <span className="font-mono-label text-cultiva-blue tracking-[0.2em] block mb-4">
            POR QUÉ CULTIVA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text tracking-tight">
            Todo lo que necesitas, en un solo ecosistema
          </h2>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                ref={(el) => { if (el) cardsRef.current[i] = el; }}
                className="feature-card group p-8 lg:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07]"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                </div>
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