import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5')
        .to(subtitleRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background — sin loop */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cultiva-bg/70 via-cultiva-bg/50 to-cultiva-bg" />
      <div className="absolute inset-0 bg-cultiva-bg/40" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center pt-20">
        <div
          ref={labelRef}
          className="opacity-0 translate-y-5 mb-6"
        >
          <span className="font-mono-label text-cultiva-green tracking-[0.2em]">
            ECOSISTEMA DE BIENESTAR INTEGRAL
          </span>
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 translate-y-10 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cultiva-text leading-tight tracking-tight mb-6"
        >
          Cultiva {' '}
          <span className="gradient-text">CUERPO</span>{' '}
          y{' '}
          <span className="gradient-text">MENTE</span>
        </h1>

        <p
          ref={subtitleRef}
          className="opacity-0 text-cultiva-secondary text-lg sm:text-xl max-w-[640px] mx-auto mb-10 leading-relaxed"
        >
          Un ecosistema de apps diseñadas para transformar tu estado físico y mental. Evaluación, planificación y entrenamiento creados por profesionales humanos con asistencia de IA.
        </p>

        {/* CTA placeholder — listo para agregar botones */}
        <div
          ref={ctaRef}
          className="opacity-0 translate-y-5"
        >
          {/* Agregá tus botones acá */}
        </div>
      </div>
    </section>
  );
}