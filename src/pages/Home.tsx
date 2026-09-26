import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../sections/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { AppsSection } from '../sections/AppsSection';
import { BlogSection } from '../sections/BlogSection';
import { SocialSection } from '../sections/SocialSection';
import { Footer } from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.0,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as any);
    };
  }, []);

  return (
    <div className="relative bg-cultiva-bg min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppsSection />
        <BlogSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}