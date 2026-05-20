// src/sections/BlogSection.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { BlogCard } from '../components/BlogCard';
import { getLatestPosts } from '../lib/blog';

gsap.registerPlugin(ScrollTrigger);

export function BlogSection() {
  const sectionRef = useRef<<HTMLDivElement>(null);  // ← null explícito
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);  // ← array vacío
  const latestPosts = getLatestPosts(3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length === 0) return;
      
      gsap.fromTo(
        validCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
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
      id="blog"
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 bg-cultiva-bg"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="font-mono-label text-cultiva-teal tracking-[0.2em] block mb-4">
            CONOCIMIENTO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Artículos científicos que transforman
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg max-w-[640px] mx-auto">
            Traducimos la ciencia en acción. Sin charlatanería, sin simplificaciones absurdas. Solo evidencia aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, i) => (
            <div
              key={post.slug}
              ref={(el) => { cardsRef.current[i] = el; }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cultiva-blue hover:text-cultiva-blue/80 text-sm font-medium transition-colors duration-300 hover:gap-3"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}