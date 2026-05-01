import { useEffect, useState } from 'react';
import { Leaf, Menu, X, ExternalLink } from 'lucide-react';

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
    { label: 'Blog', href: '#blog' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cultiva-green to-cultiva-green-dark flex items-center justify-center">
              <Leaf className="w-4 h-4 text-cultiva-bg" />
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-cultiva-secondary hover:text-cultiva-text text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://cultivafitness.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cultiva-green text-cultiva-bg px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-cultiva-green-dark transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
            >
              Usar WebApp
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-cultiva-text text-lg font-medium text-left hover:text-cultiva-green transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://cultivafitness.base44.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-cultiva-green text-cultiva-bg px-6 py-3 rounded-full text-sm font-semibold"
            >
              Usar WebApp
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
