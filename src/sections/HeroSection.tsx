import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Layers } from 'lucide-react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cultiva-bg pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cultiva-green/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-cultiva-blue/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cultiva-yellow/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        <div ref={labelRef} className="opacity-0 translate-y-5 mb-6">
          <span className="inline-flex items-center gap-2 font-mono-label text-cultiva-green tracking-[0.2em] bg-cultiva-green/10 px-4 py-2 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            PARA PROFESIONALES DE SALUD, FITNESS Y DEPORTE
          </span>
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 translate-y-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cultiva-text leading-tight tracking-tight mb-6"
        >
          Gestioná tu negocio.{' '}
          <span className="gradient-text">Cultiva</span> a tus clientes.
        </h1>

        <p
          ref={subtitleRef}
          className="opacity-0 translate-y-5 text-cultiva-secondary text-lg sm:text-xl max-w-[640px] mx-auto mb-10 leading-relaxed"
        >
          MANAGER es la plataforma todo-en-uno para gestionar clientes, rutinas, pagos y agenda —
          y sumarles a tus clientes un ecosistema de 12+ apps de bienestar, todo en un solo lugar.
        </p>

        <div
          ref={ctaRef}
          className="opacity-0 translate-y-5 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5491123970926?text=Hola!%20Quiero%20acceso%20anticipado%20a%20MANAGER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cultiva-green text-white font-semibold text-sm shadow-[0_8px_24px_rgba(22,163,74,0.3)] hover:shadow-[0_12px_32px_rgba(22,163,74,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Solicitar acceso anticipado
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#apps"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cultiva-border text-cultiva-text font-semibold text-sm hover:bg-cultiva-elevated transition-all duration-300"
          >
            Ver las apps incluidas
          </a>
        </div>

        {/* Trust row - early access, sin métricas infladas */}
        <div
          ref={trustRef}
          className="opacity-0 translate-y-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 pt-8 border-t border-cultiva-border text-sm text-cultiva-muted"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cultiva-green" />
            12+ apps ya disponibles
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cultiva-blue" />
            Datos aislados por profesional
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cultiva-yellow" />
            En desarrollo activo — acceso temprano
          </span>
        </div>
      </div>
    </section>
  );
}