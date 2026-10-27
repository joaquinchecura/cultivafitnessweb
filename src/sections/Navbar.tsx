import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { waLink, type TranslationKey } from '../i18n/translations';

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
    divider: 'border-[#14532d]/20',
    cta: 'bg-[#166534] text-white shadow-[0_4px_14px_rgba(22,101,52,0.25)] hover:bg-[#14532d]',
    hamburger: 'text-[#052E16]',
    langWrap: 'border-[#14532d]/25',
    langActive: 'bg-[#166534] text-white',
    langIdle: 'text-[#052E16]/70 hover:text-[#052E16]',
  },
} as const;

type NavItem = { label: TranslationKey; href: string; isRoute?: boolean };

// Orden: MANAGER · Apps · Recursos (Ejercicios, Blog, Comunidad) · Precios · Preguntas
const mainLinksBefore: NavItem[] = [
  { label: 'nav.manager', href: '#features' },
  { label: 'nav.apps', href: '#apps' },
];
const resourceLinks: NavItem[] = [
  { label: 'nav.exercises', href: '/ejercicios', isRoute: true },
  { label: 'nav.blog', href: '#blog' },
  { label: 'nav.community', href: '#comunidad' },
];
const mainLinksAfter: NavItem[] = [
  { label: 'nav.pricing', href: '/precios', isRoute: true },
  { label: 'nav.custom', href: '/desarrollo', isRoute: true },
  { label: 'nav.faq', href: '#faq' },                  // sección a crear, antes del footer
];



export function Navbar() {
  const th = THEMES[NAVBAR_THEME];
  const { lang, setLang, t } = useLanguage();
  const WHATSAPP_URL = waLink(t('nav.waText'));
  const EMAIL_URL = `mailto:cultivafitness@gmail.com?subject=${encodeURIComponent(t('nav.emailSubject'))}&body=${encodeURIComponent(t('nav.emailBody'))}`;
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

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
    if (pathname !== '/') {
      // Estamos en otra página (ej: /precios): volvemos al home con el ancla
      navigate(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Al llegar al home con un ancla (/#apps), bajar hasta esa sección
  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);

  // Logo: ir al home (o subir al inicio si ya estamos ahí)
  const goHome = () => {
    setMobileOpen(false);
    if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const desktopItem = (link: NavItem) =>
    link.isRoute ? (
      <Link
        key={link.href}
        to={link.href}
        className={`${th.link} text-sm font-medium transition-colors duration-300`}
      >
        {t(link.label)}
      </Link>
    ) : (
      <button
        key={link.href}
        onClick={() => scrollTo(link.href)}
        className={`${th.link} text-sm font-medium transition-colors duration-300`}
      >
        {t(link.label)}
      </button>
    );

  const mobileItem = (link: NavItem, nested = false) => {
    const cls = nested
      ? 'text-cultiva-secondary text-base font-medium text-left hover:text-cultiva-green-dark transition-colors'
      : 'text-cultiva-text text-lg font-medium text-left hover:text-cultiva-green-dark transition-colors';
    return link.isRoute ? (
      <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={cls}>
        {t(link.label)}
      </Link>
    ) : (
      <button key={link.href} onClick={() => scrollTo(link.href)} className={cls}>
        {t(link.label)}
      </button>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-shadow duration-300 ${th.bar} ${
          scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.12)]' : ''
        }`}
        style={{ height: 72 }}
      >
        <div className="site-container px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={goHome} aria-label={t('nav.homeAria')} className="flex items-center gap-2 group">
            <img src="/images/logo2.png" alt="Cultiva Fitness" className="w-11 h-11 object-contain" />
            <div className="flex flex-col">
              <span className={`${th.brand} font-bold text-lg leading-none tracking-tight`}>
                CULTIVA
              </span>
              <span className={`${th.brandSub} font-mono text-[16px] leading-none tracking-widest`}>
                FITNESS
              </span>
            </div>
          </Link>

          {/* Desktop: links + idioma + contacto + CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {mainLinksBefore.map(desktopItem)}

            {/* Recursos (dropdown) */}
            <div ref={resRef} className="relative">
              <button
                ref={resButtonRef}
                onClick={() => setResOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={resOpen}
                className={`${th.link} inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300`}
              >
                {t('nav.resources')}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${resOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {resOpen && (
                <div
                  role="menu"
                  aria-label={t('nav.resources')}
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
                        {t(link.label)}
                      </Link>
                    ) : (
                      <button
                        key={link.href}
                        role="menuitem"
                        onClick={() => scrollTo(link.href)}
                        className="block w-full text-left px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                      >
                        {t(link.label)}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {mainLinksAfter.map(desktopItem)}

            <div className={`flex items-center gap-4 ml-2 pl-4 border-l ${th.divider}`}>
              {/* Selector de idioma */}
              <div
                role="group"
                aria-label={t('nav.language')}
                className={`flex items-center gap-1 rounded-full border p-0.5 ${th.langWrap}`}
              >
                <Globe className={`w-3.5 h-3.5 ml-1.5 ${th.link}`} aria-hidden="true" />
                {(['es', 'en'] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`px-2 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                      lang === code ? th.langActive : th.langIdle
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

            </div>

            {/* CTA con dropdown WhatsApp / Email */}
            <div ref={ctaRef} className="relative">
              <button
                ref={ctaButtonRef}
                onClick={() => setCtaOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={ctaOpen}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 ${th.cta}`}
              >
                {t('nav.cta')}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${ctaOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {ctaOpen && (
                <div
                  role="menu"
                  aria-label={t('nav.ctaMenu')}
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
                    {t('nav.byWhatsapp')}
                  </a>
                  <a
                    href={EMAIL_URL}
                    role="menuitem"
                    onClick={() => setCtaOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-cultiva-text hover:bg-cultiva-elevated transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cultiva-blue" aria-hidden="true" />
                    {t('nav.byEmail')}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className={`lg:hidden ${th.hamburger}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
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
          aria-label={t('nav.menuLabel')}
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
                {t('nav.mobileWhatsapp')}
              </a>
              <a
                href={EMAIL_URL}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full border border-cultiva-border text-cultiva-text text-sm font-semibold"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {t('nav.byEmail')}
              </a>
            </div>

            {mainLinksBefore.map((l) => mobileItem(l))}

            {/* Recursos: grupo siempre desplegado en mobile */}
            <div className="flex flex-col gap-3">
              <span className="text-cultiva-text text-lg font-medium">{t('nav.resources')}</span>
              <div className="flex flex-col gap-3 pl-4 border-l border-cultiva-border">
                {resourceLinks.map((l) => mobileItem(l, true))}
              </div>
            </div>

            {mainLinksAfter.map((l) => mobileItem(l))}

            {/* Idioma */}
            <div role="group" aria-label={t('nav.language')} className="flex items-center gap-2">
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
          </div>
        </div>
      )}
    </>
  );
}