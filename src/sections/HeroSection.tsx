import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ArrowRight, Layers, Play, Check } from 'lucide-react';
import { ManagerCarousel } from '../components/ManagerCarousel';

/*
  VIDEO DEL HERO
  Cuando tengas el video editado, ponelo en  public/videos/  y completá estas rutas.
  Mientras VIDEO.mp4 y VIDEO.webm estén vacíos, la pantalla de la laptop muestra un placeholder.
  - poster: imagen que se ve mientras carga (un frame del video, 1280x800, WebP)
  - Formato recomendado: 1280x800 (16:10), sin audio, < 3 MB
*/
const VIDEO = {
  webm: '', // ej: '/videos/manager-demo.webm'
  mp4: '', // ej: '/videos/manager-demo.mp4'
  poster: '', // ej: '/images/manager-demo-poster.webp'
};
const hasVideo = Boolean(VIDEO.mp4 || VIDEO.webm);

const WHATSAPP_URL =
  'https://wa.me/5491123970926?text=Hola!%20Quiero%20probar%20MANAGER%20gratis%2014%20d%C3%ADas';

const highlights = ['Clientes, agenda y pagos', 'Rutinas y planes', '12 apps para tus clientes'];

/* Marco de laptop moderna: tapa con bisel fino, cámara, y base de aluminio */
function LaptopFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      {/* Resplandor detrás */}
      <div className="absolute inset-x-8 -bottom-6 top-10 -z-10 rounded-[40px] bg-gradient-to-br from-cultiva-green/30 via-cultiva-blue/20 to-cultiva-yellow/20 blur-3xl" />

      {/* Tapa / pantalla */}
      <div className="rounded-t-[18px] bg-[#0B1220] p-[10px] pb-[10px] shadow-[0_30px_80px_rgba(15,23,42,0.35)] ring-1 ring-black/40">
        {/* Cámara */}
        <div className="mb-[6px] flex justify-center">
          <span className="h-[5px] w-[5px] rounded-full bg-[#1E293B] ring-1 ring-white/10" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-[#F1F5EF]">
          {hasVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={VIDEO.poster || undefined}
              aria-label="Demostración de MANAGER"
            >
              {VIDEO.webm && <source src={VIDEO.webm} type="video/webm" />}
              {VIDEO.mp4 && <source src={VIDEO.mp4} type="video/mp4" />}
            </video>
          ) : (
            /* Placeholder hasta tener el video */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#E8F5EC] via-[#EAF1FB] to-[#FFF7E0]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
                <Play className="ml-1 h-7 w-7 text-cultiva-green" aria-hidden="true" />
              </span>
              <span className="font-mono-label text-[11px] tracking-[0.2em] text-cultiva-muted">
                VIDEO DE MANAGER
              </span>
            </div>
          )}
          {/* Reflejo sutil sobre el vidrio */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15" />
        </div>
      </div>

      {/* Base */}
      <div className="relative mx-auto h-[14px] w-[108%] -translate-x-[3.7%] rounded-b-[18px] rounded-t-[2px] bg-gradient-to-b from-[#D5DAE1] via-[#C3C9D2] to-[#9AA3B0] shadow-[0_18px_30px_rgba(15,23,42,0.25)]">
        {/* Muesca para abrir la tapa */}
        <span className="absolute left-1/2 top-0 h-[5px] w-[110px] -translate-x-1/2 rounded-b-[8px] bg-[#AEB6C2]" />
      </div>
    </div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
        .to(listRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .fromTo(laptopRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, 0.5)
        .to(carouselRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col justify-center overflow-hidden bg-cultiva-bg pt-32 pb-20 lg:min-h-screen"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cultiva-green/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-cultiva-blue/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cultiva-yellow/10 blur-[100px]" />

      <div className="relative z-10 w-full site-container px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-10 xl:gap-16">
          {/* ---------- Texto ---------- */}
          <div className="text-center lg:text-left">
            <div ref={labelRef} className="opacity-0 translate-y-5 mb-6">
              <span className="inline-flex items-center gap-2 font-mono-label text-cultiva-green-dark tracking-[0.2em] bg-cultiva-green/10 px-4 py-2 rounded-full text-[11px] sm:text-xs">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                PARA PROFESIONALES DE LA SALUD, EL FITNESS Y EL DEPORTE
              </span>
            </div>

            <h1
              ref={titleRef}
              className="opacity-0 translate-y-10 text-4xl sm:text-5xl xl:text-[3.25rem] font-extrabold text-cultiva-text leading-[1.08] tracking-tight mb-6"
            >
              Tu consultorio, tu gimnasio o tu estudio,{' '}
              <span className="gradient-text">en una sola app.</span>
            </h1>

            <p
              ref={subtitleRef}
              className="opacity-0 translate-y-5 text-cultiva-secondary text-lg max-w-[560px] mx-auto lg:mx-0 mb-7 leading-relaxed"
            >
              MANAGER organiza clientes, agenda, pagos y planes de entrenamiento, y le suma a cada uno
              un ecosistema de 12 apps para que sigan su progreso entre sesiones.
            </p>

            <ul
              ref={listRef}
              className="opacity-0 translate-y-5 mb-9 flex flex-col items-center gap-2.5 lg:items-start"
            >
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-[15px] font-medium text-cultiva-text">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cultiva-green/15">
                    <Check className="h-3 w-3 text-cultiva-green-dark" aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div
              ref={ctaRef}
              className="opacity-0 translate-y-5 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cultiva-green text-white font-semibold text-sm shadow-[0_8px_24px_rgba(22,163,74,0.3)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Probar 14 días gratis
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/precios"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-cultiva-border bg-white/60 text-cultiva-text font-semibold text-sm hover:bg-white transition-all duration-300"
              >
                Ver precios
              </Link>
              <a
                href="#apps"
                className="px-3 py-3 text-sm font-semibold text-cultiva-green-dark underline-offset-4 hover:underline"
              >
                Conocer las apps
              </a>
            </div>

            <div
              ref={trustRef}
              className="opacity-0 translate-y-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-10 text-sm text-cultiva-muted"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cultiva-green" />
                Sin tarjeta de crédito
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cultiva-blue" />
                Datos aislados por profesional
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cultiva-yellow" />
                Funciona en el celu, sin instalar
              </span>
            </div>
          </div>

          {/* ---------- Laptop con video ---------- */}
          <div ref={laptopRef} className="opacity-0">
            <LaptopFrame />
          </div>
        </div>

        {/* Carrusel de capturas de MANAGER (podés quitarlo cuando el video esté listo) */}
        <div ref={carouselRef} className="opacity-0 translate-y-8 mt-20 max-w-[1280px] mx-auto">
          <ManagerCarousel />
        </div>
      </div>
    </section>
  );
}