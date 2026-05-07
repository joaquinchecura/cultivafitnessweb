import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Apps', href: '#apps' },
    { label: 'Características', href: '#features' },
    { label: 'Ejercicios', href: '/ejercicios', isRoute: true },
    { label: 'Blog', href: '#blog' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  const scrollTo = (href: string, isRoute?: boolean) => {
    setMobileOpen(false);
    if (isRoute) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cultiva-bg/85 backdrop-blur-xl border-b border-cultiva-green/10'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="images/logo2.png" alt="Cultiva Fitness" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-cultiva-text font-bold text-lg leading-none tracking-tight">
                CULTIVA
              </span>
              <span className="text-cultiva-muted font-mono text-[16px] leading-none tracking-widest">
                FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Links + Contact Icons */}
          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
  link.isRoute ? (
    <Link
      key={link.href}
      to={link.href}
      className="text-cultiva-secondary hover:text-cultiva-text text-sm font-medium transition-colors duration-300"
    >
      {link.label}
    </Link>
  ) : (
    <button
      key={link.href}
      onClick={() => scrollTo(link.href)}
      className="text-cultiva-secondary hover:text-cultiva-text text-sm font-medium transition-colors duration-300"
    >
      {link.label}
    </button>
  )
))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-cultiva-green/20">
              <a 
                href="https://wa.me/5491123970926" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cultiva-muted hover:text-cultiva-green transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="mailto:cultivafitness@gmail.com"
                className="text-cultiva-muted hover:text-cultiva-green transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-cultiva-text"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-cultiva-bg/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-cultiva-surface border-l border-cultiva-green/10 p-8 pt-24 flex flex-col gap-6">
          {navLinks.map((link) => (
  link.isRoute ? (
    <Link
      key={link.href}
      to={link.href}
      onClick={() => setMobileOpen(false)}
      className="text-cultiva-text text-lg font-medium text-left hover:text-cultiva-green transition-colors"
    >
      {link.label}
    </Link>
  ) : (
    <button
      key={link.href}
      onClick={() => scrollTo(link.href)}
      className="text-cultiva-text text-lg font-medium text-left hover:text-cultiva-green transition-colors"
    >
      {link.label}
    </button>
  )
))}
            
            {/* Contact Links in Mobile Drawer */}
            <div className="mt-4 pt-6 border-t border-cultiva-green/10 flex flex-col gap-4">
              <a 
                href="mailto:cultivafitness@gmail.com" 
                className="flex items-center gap-3 text-cultiva-muted hover:text-cultiva-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-sm">Email</span>
              </a>
              <a 
                href="https://wa.me/5491123970926" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cultiva-muted hover:text-cultiva-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
