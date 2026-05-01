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
    desc: 'Cada métrica importa. Desde repeticiones hasta variabilidad de frecuencia cardíaca, nuestro sistema de tracking aprende de ti y se adapta.',
  },
  {
    icon: FlaskConical,
    iconBg: 'bg-cultiva-blue/15',
    iconColor: '#60A5FA',
    title: 'Base Científica',
    desc: 'No seguimos modas. Seguimos evidencia. Cada protocolo está respaldado por literatura científica revisada por expertos.',
  },
  {
    icon: Smartphone,
    iconBg: 'bg-cultiva-teal/15',
    iconColor: '#2DD4BF',
    title: 'Diseño Intuitivo',
    desc: 'Experiencia fluida que no te distrae de lo importante: tu entrenamiento, tu comida, tu práctica mental.',
  },
  {
    icon: Users,
    iconBg: 'bg-cultiva-purple/15',
    iconColor: '#a78bfa',
    title: 'Comunidad Viva',
    desc: 'No estás solo. Forma parte de una comunidad que comparte tus objetivos y te impulsa a superarlos.',
    image: '/images/app-fitness.jpg',
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, i) => {
        const textSide = row.querySelector('.feature-text') as HTMLElement;
        const imgSide = row.querySelector('.feature-image') as HTMLElement;
        const isEven = i % 2 === 1;

        gsap.from(textSide, {
          x: isEven ? 40 : -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          },
        });

        gsap.from(imgSide, {
          x: isEven ? -40 : 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
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

        {/* Feature Rows */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 1;

            return (
              <div
                key={feature.title}
                ref={(el) => { if (el) rowsRef.current[i] = el; }}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-12 lg:gap-16`}
              >
                {/* Text */}
                <div className="feature-text flex-1 max-w-[520px]">
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

      {/* Image */}
                <div className="feature-image flex-1 w-full max-w-[480px]">
                  <div className="relative aspect-[4/3] bg-cultiva-surface rounded-2xl border border-cultiva-green/10 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cultiva-bg/30 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
