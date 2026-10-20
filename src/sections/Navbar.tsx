import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Mail, Globe } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5491123970926?text=Hola!%20Quiero%20acceso%20anticipado%20a%20MANAGER";
const EMAIL_URL = "mailto:cultivafitness@gmail.com?subject=Acceso%20anticipado%20a%20MANAGER&body=Hola!%20Quiero%20acceso%20anticipado%20a%20MANAGER.";

/*
  ====== PRUEBA DE COLOR DEL NAVBAR ======
  Cambiá esta constante para comparar las dos opciones:
    'dark'   -> verde oscuro con letras blancas
    'pastel' -> verde pastel con letras oscuras
*/
const NAVBAR_THEME: 'dark' | 'pastel' = 'dark';

const THEMES = {
  dark: {
    bar: 'bg-[#166534] border-[#14532d]',
    link: 'text-white/90 hover:text-white',
    brand: 'text-white',
    brandSub: 'text-green-100/80',
    logoWrap: 'bg-white rounded-full p-1', // el logo es verde: lo apoyamos en un círculo blanco
    icon: 'text-green-100 hover:text-white',
    divider: 'border-white/25',
    cta: 'bg-white text-[#166534] shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:bg-green-50',
    hamburger: 'text-white',
    langWrap: 'border-white/30',
    langActive: 'bg-white text-[#166534]',
    langIdle: 'text-white/80 hover:text-white',
  },
  pastel: {
    bar: 'bg-[#DCFCE7] border-[#BBF7D0]',
    link: 'text-[#052E16]/80 hover:text-[#052E16]',
    brand: 'text-[#052E16]',
    brandSub: 'text-[#14532d]/70',
    logoWrap: '',
    icon: 'text-[#14532d]/70 hover:text-[#052E16]',
    divider: 'border-[#14532d]/20',
    cta: 'bg-[#166534] text-white shadow-[0_4px_14px_rgba(22,101,52,0.25)] hover:bg-[#14532d]',
    hamburger: 'text-[#052E16]',
    langWrap: 'border-[#14532d]/25',
    langActive: 'bg-[#166534] text-white',
    langIdle: 'text-[#052E16]/70 hover:text-[#052E16]',
  },
} as const;

type NavItem = { label: string; href: string; isRoute?: boolean };

// Orden: MANAGER · Apps · Recursos (Ejercicios, Blog, Comunidad) · Precios · Preguntas
const mainLinksBefore: NavItem[] = [
  { label: 'MANAGER', href: '#features' },
  { label: 'Apps', href: '#apps' },
];
const resourceLinks: NavItem[] = [
  { label: 'Ejercicios', href: '/ejercicios', isRoute: true },
  { label: 'Blog', href: '#blog' },
  { label: 'Comunidad', href: '#comunidad' },
];
const mainLinksAfter: NavItem[] = [
  { label: 'Precios', href: '/precios', isRoute: true }, // página a crear
  { label: 'Preguntas', href: '#faq' },                  // sección a crear, antes del footer
];

const WHATSAPP_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

const EMAIL_ICON_PATH =
  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";

export function Navbar() {
  const t = THEMES[NAVBAR_THEME];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  // Selector de idioma: por ahora solo visual, sin traducción real
  const [lang, setLang] = useState<'es' | 'en'>('es');

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const resRef = useRef<HTMLDivElement>(null);
  const resButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar los dropdowns (CTA / Recursos) al clickear afuera
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ctaRef.current && !ctaRef.current.contains(target)) setCtaOpen(false);
      if (resRef.current && !resRef.current.contains(target)) setResOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Escape cierra lo que esté abierto y devuelve el foco a quien lo abrió,
  // así un usuario de teclado nunca queda "atrapado".
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (resOpen) {
        setResOpen(false);
        resButtonRef.current?.focus();
      } else if (ctaOpen) {
        setCtaOpen(false);
        ctaButtonRef.current?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [ctaOpen, resOpen, mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setResOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const desktopItem = (link: NavItem) =>
    link.isRoute ? (
      <Link
        key={link.href}
        to={link.href}
        className={`${t.link} text-sm font-medium transition-colors duration-300`}
      >
        {link.label}
      </Link>
    ) : (
      <button
        key={link.href}
        onClick={() => scrollTo(link.href)}
        className={`${t.link} text-sm font-medium transition-colors duration-300`}
      >
        {link.label}
      </button>
    );

  const mobileItem = (link: NavItem, nested = false) => {
    const cls = nested
      ? 'text-cultiva-secondary text-base font-medium text-left hover:text-cultiva-green-dark transition-colors'
      : 'text-cultiva-text text-lg font-medium text-left hover:text-cultiva-green-dark transition-colors';
    return link.isRoute ? (
      <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={cls}>
        {link.label}
      </Link>
    ) : (
      <button key={link.href} onClick={() => scrollTo(link.href)} className={cls}>
        {link.label}
      </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-shadow duration-300 ${t.bar} ${
          scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.12)]' : ''
        }`}
        style={{ height: 72 }}
      >
        <div className="site-container px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-9 h-9 flex items-center justify-center ${t.logoWrap}`}>
              <img src="images/logo2.png" alt="Cultiva Fitness" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`${t.brand} font-bold text-lg leading-none tracking-tight`}>
                CULTIVA
              </span>
              <span className={`${t.brandSub} font-mono text-[16px] leading-none tracking-widest`}>
                FITNESS
              </span>
            </div>
          </a>

          {/* Desktop: links + idioma + contacto + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {mainLinksBefore.map(desktopItem)}

            {/* Recursos (dropdown) */}
            <div ref={resRef} className="relative">
              <button
                ref={resButtonRef}
                onClick={() => setResOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={resOpen}
                className={`${t.link} inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300`}
              >
                Recursos
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${resOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {resOpen && (
                <div
                  role="menu"
                  aria-label="Recursos"
                  className="absolute left-0 top-[calc(100%+12px)] w-48 bg-cultiva-surface border border-cultiva-border rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-2"
                >
                  {resourceLinks.map((link) =>
                    link.isRoute ? (
                      <Link
                        key={link.href}
                        to={link.href}
                        role="menuitem"
                        onClick={() => setResOpen(false)}
                        className="block px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        key={link.href}
                        role="menuitem"
                        onClick={() => scrollTo(link.href)}
                        className="block w-full text-left px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                      >
                        {link.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {mainLinksAfter.map(desktopItem)}

            <div className={`flex items-center gap-4 ml-2 pl-4 border-l ${t.divider}`}>
              {/* Selector de idioma (sin funcionamiento por ahora) */}
              <div
                role="group"
                aria-label="Idioma"
                className={`flex items-center gap-1 rounded-full border p-0.5 ${t.langWrap}`}
              >
                <Globe className={`w-3.5 h-3.5 ml-1.5 ${t.link}`} aria-hidden="true" />
                {(['es', 'en'] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`px-2 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                      lang === code ? t.langActive : t.langIdle
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <a
                href="https://wa.me/5491123970926"
                target="_blank"
                rel="noopener noreferrer"
                className={`${t.icon} transition-colors`}
                aria-label="Escribinos por WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={WHATSAPP_ICON_PATH} />
                </svg>
              </a>
              <a
                href="mailto:cultivafitness@gmail.com"
                className={`${t.icon} transition-colors`}
                aria-label="Escribinos por email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={EMAIL_ICON_PATH} />
                </svg>
              </a>
            </div>

            {/* CTA con dropdown WhatsApp / Email */}
            <div ref={ctaRef} className="relative">
              <button
                ref={ctaButtonRef}
                onClick={() => setCtaOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={ctaOpen}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 ${t.cta}`}
              >
                Solicitar acceso
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${ctaOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {ctaOpen && (
                <div
                  role="menu"
                  aria-label="Opciones de contacto"
                  className="absolute right-0 top-[calc(100%+12px)] w-56 bg-cultiva-surface border border-cultiva-border rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-2 overflow-hidden"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                    onClick={() => setCtaOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-cultiva-green" aria-hidden="true" />
                    Por WhatsApp
                  </a>
                  <a
                    href={EMAIL_URL}
                    role="menuitem"
                    onClick={() => setCtaOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cultiva-blue" aria-hidden="true" />
                    Por Email
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className={`lg:hidden ${t.hamburger}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-drawer"
          >
            {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-cultiva-bg/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-cultiva-surface border-l border-cultiva-border p-8 pt-24 flex flex-col gap-6 overflow-y-auto">
            {/* CTA: dos botones directos, sin dropdown */}
            <div className="flex flex-col gap-2 mb-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-cultiva-green text-white text-sm font-semibold shadow-[0_4px_14px_rgba(22,163,74,0.25)]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Solicitar acceso por WhatsApp
              </a>
              <a
                href={EMAIL_URL}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-cultiva-border text-cultiva-text text-sm font-semibold"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Por Email
              </a>
            </div>

            {mainLinksBefore.map((l) => mobileItem(l))}

            {/* Recursos: grupo siempre desplegado en mobile */}
            <div className="flex flex-col gap-3">
              <span className="text-cultiva-text text-lg font-medium">Recursos</span>
              <div className="flex flex-col gap-3 pl-4 border-l border-cultiva-border">
                {resourceLinks.map((l) => mobileItem(l, true))}
              </div>
            </div>

            {mainLinksAfter.map((l) => mobileItem(l))}

            {/* Idioma (sin funcionamiento por ahora) */}
            <div role="group" aria-label="Idioma" className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-cultiva-muted" aria-hidden="true" />
              {(['es', 'en'] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide border transition-colors ${
                    lang === code
                      ? 'bg-[#166534] text-white border-[#166534]'
                      : 'text-cultiva-secondary border-cultiva-border hover:text-cultiva-text'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Contact Links in Mobile Drawer */}
            <div className="mt-2 pt-6 border-t border-cultiva-border flex flex-col gap-4">
              <a
                href="mailto:cultivafitness@gmail.com"
                className="flex items-center gap-3 text-cultiva-muted hover:text-cultiva-green transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={EMAIL_ICON_PATH} />
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={WHATSAPP_ICON_PATH} />
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