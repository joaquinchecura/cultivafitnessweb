import { useState, useRef, useEffect, useId } from 'react';
import { Leaf, Heart, ArrowRight, Youtube, Instagram, Music, Mail, Check, Globe, ChevronDown } from 'lucide-react';

const CTA_URL = "https://wa.me/5491123970926?text=Hola!%20Quiero%20acceso%20anticipado%20a%20MANAGER";

const productLinks = [
  { label: 'MANAGER', href: '#features' },
  { label: 'Apps', href: '#apps' },
  { label: 'Blog', href: '/blog' },
  { label: 'Ejercicios', href: '/ejercicios' },
];

const socials = [
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@CULTIVAFITNESS', color: '#DC2626' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/cultivafitness/', color: '#DB2777' },
  { name: 'TikTok', icon: Music, url: '#', color: '#101C14' },
];

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const inputId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('sending');
    try {
      // TODO: conectar a un servicio real (Mailchimp / ConvertKit / Buttondown
      // o un endpoint propio tipo /api/newsletter/subscribe en Vercel Functions).
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="flex items-center gap-2 text-cultiva-green text-sm font-medium">
        <Check className="w-4 h-4" aria-hidden="true" />
        ¡Listo! Ya estás suscripto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <label htmlFor={inputId} className="sr-only">
        Tu email para recibir el blog
      </label>
      <input
        id={inputId}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        className="flex-1 px-4 py-2.5 bg-cultiva-bg border border-cultiva-border rounded-xl text-sm text-cultiva-text placeholder:text-cultiva-muted focus:outline-none focus:border-cultiva-green/40 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cultiva-green text-white text-sm font-semibold hover:bg-cultiva-green-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando...' : 'Suscribirme'}
      </button>
    </form>
  );
}

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const englishRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Al abrir con teclado, el foco salta directo a la primera opción real
  // (Español está seleccionado, así que English es lo primero navegable)
  useEffect(() => {
    if (open) englishRef.current?.focus();
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-cultiva-muted hover:text-cultiva-text text-sm transition-colors"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        Español
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Seleccionar idioma"
          className="absolute bottom-[calc(100%+8px)] left-0 w-44 bg-cultiva-surface border border-cultiva-border rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.1)] p-1.5 overflow-hidden"
        >
          <button
            type="button"
            role="menuitemradio"
            aria-checked="true"
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-cultiva-elevated text-sm text-cultiva-text font-medium"
          >
            Español
            <Check className="w-3.5 h-3.5 text-cultiva-green" aria-hidden="true" />
          </button>
          <button
            ref={englishRef}
            type="button"
            role="menuitemradio"
            aria-checked="false"
            disabled
            aria-disabled="true"
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-cultiva-muted cursor-not-allowed disabled:opacity-70"
          >
            English
            <span className="text-[10px] font-mono uppercase tracking-wider">Próx.</span>
          </button>
        </div>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-cultiva-bg border-t border-cultiva-border">
      {/* CTA Banner - MANAGER */}
      <div className="border-b border-cultiva-border">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="rounded-3xl bg-gradient-to-br from-cultiva-green to-cultiva-green-dark px-8 py-12 sm:px-16 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              ¿Sos profesional de salud, fitness o deporte?
            </h2>
            <p className="text-white/85 text-base sm:text-lg max-w-[560px] mx-auto mb-8">
              Gestioná tu negocio y sumale a tus clientes un ecosistema completo de apps, todo con MANAGER.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-cultiva-green-dark font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              Solicitar acceso anticipado
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="pt-16 pb-8 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Brand + Social */}
            <div className="max-w-[280px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cultiva-green to-cultiva-green-dark flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-cultiva-text font-bold text-lg leading-none tracking-tight">
                    CULTIVA
                  </span>
                  <span className="text-cultiva-muted font-mono text-[16px] leading-none tracking-widest">
                    FITNESS
                  </span>
                </div>
              </div>
              <p className="text-cultiva-muted text-sm leading-relaxed mb-5">
                Cultivando cuerpo y mente, una app a la vez.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-full bg-cultiva-elevated flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300"
                    >
                      <Icon className="w-4 h-4" style={{ color: social.color }} aria-hidden="true" />
                    </a>
                  );
                })}
                <a
                  href="mailto:cultivafitness@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full bg-cultiva-elevated flex items-center justify-center hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <Mail className="w-4 h-4 text-cultiva-muted" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Links: Producto + Legal + Contacto */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
              <div>
                <h4 className="text-cultiva-text text-sm font-semibold mb-4">Producto</h4>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-cultiva-text text-sm font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/privacidad" className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300">
                      Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terminos" className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300">
                      Términos
                    </a>
                  </li>
                  <li>
                    <a href="/cookies" className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-cultiva-text text-sm font-semibold mb-4">Contacto</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:cultivafitness@gmail.com" className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300">
                      cultivafitness@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/5491123970926" target="_blank" rel="noopener noreferrer" className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="max-w-[320px]">
              <h4 className="text-cultiva-text text-sm font-semibold mb-2">Recibí lo último del blog</h4>
              <p className="text-cultiva-muted text-sm mb-4">
                Ciencia aplicada a tu bienestar, directo a tu email.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cultiva-border">
            <div className="flex items-center gap-6">
              <p className="text-cultiva-muted text-sm">
                © 2026 Cultiva Fitness. Todos los derechos reservados.
              </p>
              <LanguageSelector />
            </div>
            <p className="text-cultiva-muted text-sm flex items-center gap-1.5">
              Hecho con <Heart className="w-3.5 h-3.5 text-cultiva-green fill-cultiva-green" aria-hidden="true" /> y ciencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}