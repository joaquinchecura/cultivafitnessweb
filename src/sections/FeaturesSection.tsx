import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const apps = [
  // FILA 1
  {
    name: 'RECKON',
    tag: 'WELLNESS',
    tagColor: '#fbbf24',
    gradient: 'from-cultiva-yellow to-amber-500',
    desc: 'Tu plataforma inteligente que sintetiza evaluaciones de salud y datos biométricos para generar programas personalizados de acondicionamiento físico y rehabilitación.',
    features: ['Tracker de hábitos', 'Journaling diario', 'Balance semanal'],
    link: 'https://reckon.cultivafitness.app',
    icon: (
      <img src="/images/logoreckon.png" alt="Reckon" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'SUPPLY',
    tag: 'NUTRICIÓN',
    tagColor: '#60A5FA',
    gradient: 'from-cultiva-blue to-blue-600',
    desc: 'Tu asistente de nutrición inteligente que combina planes personalizados, seguimiento con IA y recetas saludables en una experiencia motivadora.',
    features: ['Contador de macros y Calorías', 'Plan personalizado', 'Lista de super y recetas IA'],
    link: 'https://supply.cultivafitness.app',
    icon: (
      <img src="/images/logosupply.png" alt="Supply" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'NEURA',
    tag: 'NEUROCIENCIA',
    tagColor: '#2DD4BF',
    gradient: 'from-cultiva-teal to-teal-600',
    desc: 'Te ayuda a entender tu estado interno, regular tu sistema nervioso y conectar emociones con hábitos saludables.',
    features: ['Protocolos de focus', 'Meditación guiada', 'Análisis de hábitos'],
    link: 'https://neura.cultivafitness.app',
    icon: (
      <img src="/images/logoneura.png" alt="Neura" className="w-15 h-15 object-contain" />
    ),
  },
  // FILA 2
  {
    name: 'BODYMIND',
    tag: 'FITNESS',
    tagColor: '#4ADE80',
    gradient: 'from-cultiva-green to-cultiva-green-dark',
    desc: 'La App de bienestar integral que combina entrenamiento, nutrición y neurociencia para mejorar tu rendimiento.',
    features: ['Tracking de progreso', 'Planes adaptativos', 'Biblioteca de ejercicios'],
    link: 'https://bodymind.cultivafitness.app/',
    icon: (
      <img src="/images/logobodymind.png" alt="Bodymind" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'MICROFIT',
    tag: 'EFICIENCIA',
    tagColor: '#FB923C',
    gradient: 'from-orange-400 to-orange-600',
    desc: 'Entrenamiento ultraeficiente para vidas ajetreadas. Rutinas personalizadas de 5, 10 o 15 minutos adaptadas a tu horario, energía y equipo disponible.',
    features: ['Rutinas de 5-15 min', 'Adaptación por energía', 'Sin equipo necesario'],
    link: 'https://microfit.cultivafitness.app',
    icon: (
      <img src="/images/logomicrofit.png" alt="Microfit" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'DESKOUT',
    tag: 'PRODUCTIVIDAD',
    tagColor: '#818CF8',
    gradient: 'from-indigo-400 to-indigo-600',
    desc: 'Microrutinas de movimiento de 2-5 minutos diseñadas para integrarse discretamente en tu jornada laboral. Mantente activo sin abandonar tu escritorio.',
    features: ['Rutinas de 2-5 min', 'Modo discreto', 'Alertas de sedentarismo'],
    link: 'https://deskout.cultivafitness.app',
    icon: (
      <img src="/images/logodeskout.png" alt="Deskout" className="w-15 h-15 object-contain" />
    ),
  },
  // FILA 3
  {
    name: 'SILVER',
    tag: 'LONGEVIDAD',
    tagColor: '#94A3B8',
    gradient: 'from-slate-400 to-slate-600',
    desc: 'Rutinas guiadas de bienestar físico pensadas para adultos mayores, con navegación ultra accesible y apoyo familiar para mantenerse activos con confianza.',
    features: ['Navegación accesible', 'Rutinas guiadas', 'Conexión familiar'],
    link: 'https://silver.cultivafitness.app',
    icon: (
      <img src="/images/logosilver.png" alt="Silver" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'JUNIOR',
    tag: 'EDUCACIÓN',
    tagColor: '#A3E635',
    gradient: 'from-lime-400 to-lime-600',
    desc: 'Plataforma interactiva de Educación Física Integral para niños y jóvenes. Cultiva hábitos saludables y movimiento consciente mediante gamificación y aprendizaje cooperativo.',
    features: ['Gamificación', 'Aprendizaje cooperativo', 'Hábitos saludables'],
    link: 'https://junior.cultivafitness.app',
    icon: (
      <img src="/images/logojunior.png" alt="Junior" className="w-15 h-15 object-contain" />
    ),
  },
  {
    name: 'PRENATAL',
    tag: 'MATERNIDAD',
    tagColor: '#F472B6',
    gradient: 'from-pink-400 to-pink-600',
    desc: 'Compañero digital para un embarazo activo y saludable. Rutinas validadas médicamente, ejercicios de suelo pélvico y bienestar emocional adaptado a cada trimestre.',
    features: ['Rutinas médicamente validadas', 'Suelo pélvico', 'Bienestar por trimestre'],
    link: 'https://prenatal.cultivafitness.app',
    icon: (
      <img src="/images/logoprenatal.png" alt="Prenatal" className="w-15 h-15 object-contain" />
    ),
  },
  // FILA 4 (TIMER sola centrada o al final)
  {
    name: 'TIMER',
    tag: 'UTILIDAD',
    tagColor: '#f472b6',
    gradient: 'from-cultiva-pink to-pink-500',
    desc: 'Un temporizador inteligente para tu entrenamiento físico, que ofrece ajustes preestablecidos personalizables y seguimiento de progreso.',
    features: ['Retos grupales', 'Leaderboards', 'Contenido exclusivo'],
    link: 'https://timer.cultivafitness.app',
    icon: (
      <img src="/images/logotimer.png" alt="Timer" className="w-15 h-15 object-contain" />
    ),
  },
];

export function AppsSection() {
  const sectionRef = useRef<<HTMLDivElement>(null);
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
            Desde fisiología hasta neurociencias, cada aplicación está diseñada con rigor científico y una experiencia intuitiva.
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