import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { useRotatingIndex } from '../components/useRotatingIndex';


gsap.registerPlugin(ScrollTrigger);

/*
  CARRUSEL DE CAPTURAS
  Cada string de `screenshots` es UN slide del carrusel. Cada slide es una
  imagen ya armada (collage de 2-3 capturas del celu pegadas una al lado
  de la otra) en formato 18:16 (ej: 1080x960), el mismo aspect que la zona
  visual de la card.
  ej: ['/images/screenshots/supply-1.webp', '/images/screenshots/supply-2.webp']
*/
const SLIDE_ASPECT = 'aspect-[1/1]';

const apps = [
  {
    name: 'BIOMATCH',
    tag: 'BIOMECANICA',
    tagColor: '#7C3AED',
    gradient: 'from-purple-500 to-purple-700',
    desc: 'Plataforma de examen biométrico que detecta 33 puntos anatómicos en 3D para calcular ángulos, simetría y riesgos de ejecución en tiempo real.',
    features: ['Análisis biomecánico 3D', 'Rango de movimiento óptimo', 'Recomendaciones IA'],
    link: 'https://biomatch.cultivafitness.app',
    icon: <img src="/images/logobiomatch.png" alt="Biomatch" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'SUPPLY',
    tag: 'NUTRICIÓN',
    tagColor: '#2563EB',
    gradient: 'from-blue-500 to-blue-700',
    desc: 'Asistente de nutrición inteligente que combina registro diario de alimentos, planes personalizados, y recetas saludables en una experiencia motivadora.',
    features: ['Registro de macros y Calorías', 'Plan personalizado', 'Lista de super y recetas IA'],
    link: 'https://supply.cultivafitness.app',
    icon: <img src="/images/logosupply.png" alt="Supply" className="w-15 h-15 object-contain" />,
    screenshots: [
      '/images/screenshots/suppl/1.png',
      '/images/screenshots/suppl/1.png',

    ],
  },
  {
    name: 'RECKON',
    tag: 'WELLNESS',
    tagColor: '#D97706',
    gradient: 'from-amber-500 to-amber-700',
    desc: 'Plataforma inteligente que sintetiza evaluaciones de salud y datos biométricos para generar programas personalizados de acondicionamiento físico y/o rehabilitación.',
    features: ['Salud y mente', 'Cuerpo y dieta', 'Rendimiento'],
    link: 'https://reckon.cultivafitness.app',
    icon: <img src="/images/logoreckon.png" alt="Reckon" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'NEURA',
    tag: 'NEUROCIENCIA',
    tagColor: '#0D9488',
    gradient: 'from-teal-500 to-teal-700',
    desc: 'App que te ayuda a entender tu estado sensorial interno, regular tu sistema nervioso y conectar emociones con hábitos saludables.',
    features: ['Control del sistema nervioso', 'Técnicas emocionales guiadas', 'Juegos para entrenar tu cerebro'],
    link: 'https://neura.cultivafitness.app',
    icon: <img src="/images/logoneura.png" alt="Neura" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'RUNNING',
    tag: 'RUNNING',
    tagColor: '#DC2626',
    gradient: 'from-red-500 to-red-700',
    desc: 'App de Running con un plan personalizado acorde a tu perfil y objetivos específicos. Análisis de pie con IA y un GPS con streetmaps para guardar tu recorrido.',
    features: ['Planificación total', 'Calendario semanal', 'Análisis de pie'],
    link: 'https://running.cultivafitness.app',
    icon: <img src="/images/logorunning.png" alt="Running" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'MICROFIT',
    tag: 'EFICIENCIA',
    tagColor: '#EA580C',
    gradient: 'from-orange-500 to-orange-700',
    desc: 'Entrenamientos eficientes para vidas atareadas. Rutinas personalizadas de 5, 10 o 15 minutos adaptadas a tu horario, energía y equipo disponible.',
    features: ['Rutinas de 5-15 min', 'Adaptación por energía', 'Sin equipo necesario'],
    link: 'https://microfit.cultivafitness.app',
    icon: <img src="/images/logomicrofit.png" alt="Microfit" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'DESKOUT',
    tag: 'PRODUCTIVIDAD',
    tagColor: '#4F46E5',
    gradient: 'from-indigo-500 to-indigo-700',
    desc: 'Microrutinas de movimiento de 2 a 5 minutos diseñadas para integrarse discretamente en tu jornada laboral. Mantente activo sin abandonar tu escritorio.',
    features: ['Rutinas de 2-5 min', 'Modo discreto', 'Alertas de sedentarismo'],
    link: 'https://deskout.cultivafitness.app',
    icon: <img src="/images/logodeskout.png" alt="Deskout" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'SILVER',
    tag: 'LONGEVIDAD',
    tagColor: '#475569',
    gradient: 'from-slate-500 to-slate-700',
    desc: 'Rutinas guiadas de bienestar físico pensadas para adultos mayores, con navegación ultra accesible y apoyo familiar para mantenerse activos con confianza.',
    features: ['Navegación accesible', 'Rutinas guiadas', 'Conexión familiar'],
    link: 'https://silver.cultivafitness.app',
    icon: <img src="/images/logosilver.png" alt="Silver" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'JUNIOR',
    tag: 'EDUCACIÓN',
    tagColor: '#65A30D',
    gradient: 'from-lime-600 to-lime-800',
    desc: 'Plataforma interactiva de Educación Física Integral para niños y jóvenes. Cultiva hábitos saludables y movimiento consciente mediante gamificación y aprendizaje cooperativo.',
    features: ['Gamificación', 'Aprendizaje cooperativo', 'Hábitos saludables'],
    link: 'https://junior.cultivafitness.app',
    icon: <img src="/images/logojunior.png" alt="Junior" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'PRENATAL',
    tag: 'MATERNIDAD',
    tagColor: '#DB2777',
    gradient: 'from-pink-500 to-pink-700',
    desc: 'Compañero digital para un embarazo activo y saludable. Rutinas validadas médicamente, ejercicios de suelo pélvico y bienestar emocional adaptado a cada trimestre.',
    features: ['Rutinas médicamente validadas', 'Suelo pélvico', 'Bienestar por trimestre'],
    link: 'https://prenatal.cultivafitness.app',
    icon: <img src="/images/logoprenatal.png" alt="Prenatal" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
  {
    name: 'TIMER',
    tag: 'UTILIDAD',
    tagColor: '#DB2777',
    gradient: 'from-cultiva-pink to-pink-700',
    desc: 'Un temporizador inteligente para tu entrenamiento físico, que ofrece ajustes preestablecidos personalizables y seguimiento de progreso.',
    features: ['4 modos', '4 Sonidos', 'Modo oscuro'],
    link: 'https://timer.cultivafitness.app',
    icon: <img src="/images/logotimer.png" alt="Timer" className="w-15 h-15 object-contain" />,
    screenshots: [] as string[],
  },
];

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [touchOnly, setTouchOnly] = useState(false);
  const visualRef = useRef<HTMLAnchorElement>(null);

  const slides = app.screenshots;
  const hasSlides = slides.length > 0;
  const external = app.link.startsWith('http');

  // En celular no hay hover: el carrusel corre solo mientras la card está a la vista.
  const autoplay = hasSlides && (hovered || (touchOnly && inView));
  const slideIndex = useRotatingIndex(slides.length, autoplay);

  useEffect(() => {
    setTouchOnly(window.matchMedia('(hover: none)').matches);
  }, []);

  useEffect(() => {
    const el = visualRef.current;
    if (!el || !hasSlides) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.6,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hasSlides]);

  // Precarga todos los slides la primera vez que se activa, para evitar parpadeos
  useEffect(() => {
    if (!autoplay) return;
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [autoplay, slides]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-full flex-col bg-cultiva-surface border border-cultiva-border rounded-[20px] overflow-hidden transition-all duration-500 hover:border-cultiva-green/30 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_40px_rgba(22,163,74,0.06)]"
    >
      {/* Zona visual 18:16. Cada slide es un collage de 2-3 capturas. Toda ella lleva a la app */}
      <a
        ref={visualRef}
        href={app.link}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={`Probar ${app.name}`}
        tabIndex={-1}
        className={`relative block ${SLIDE_ASPECT} overflow-hidden bg-gradient-to-br ${app.gradient}`}
      >
        {hasSlides ? (
          // Todos los slides apilados; el activo se muestra con fundido cruzado
          slides.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Captura ${i + 1} de ${app.name}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              aria-hidden={i !== slideIndex}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                i === slideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-white [&_img]:w-28 [&_img]:h-28 [&_img]:object-contain">
            {app.icon}
          </span>
        )}

        {slides.length > 1 && (
          <span
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/30 px-2 py-1"
            aria-hidden="true"
          >
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === slideIndex ? 'bg-white w-4' : 'bg-white/60 w-1.5'
                }`}
              />
            ))}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center text-white [&_img]:w-8 [&_img]:h-8`}
          >
            {app.icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-cultiva-text leading-tight">{app.name}</h3>
            <span
              className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase"
              style={{ backgroundColor: `${app.tagColor}15`, color: app.tagColor }}
            >
              {app.tag}
            </span>
          </div>
        </div>

        <p className="text-cultiva-secondary text-sm leading-relaxed mb-5">{app.desc}</p>

        <a
          href={app.link}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-cultiva-green-dark hover:translate-x-1 transition-transform duration-300"
        >
          {app.link === '#' ? 'Próximamente' : 'Probar Ahora'}
          {app.link !== '#' && <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
        </a>
      </div>
    </div>
  );
}

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
    <section id="apps" ref={sectionRef} className="relative py-20 lg:py-24 px-6 bg-cultiva-bg">
      <div className="site-container">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-green-dark tracking-[0.2em] block mb-4">
            PARA TUS CLIENTES Y ALUMNOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Sumale el ecosistema completo de apps a tu servicio
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg">
            Estas apps ya están disponibles y como profesional en MANAGER
            podés integrarlas al trabajo con tus clientes, sin costo extra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {apps.map((app, i) => (
            <div key={app.name} ref={(el) => { if (el) cardsRef.current[i] = el; }}>
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}