import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  const appLinks = ['BodyMind', 'Supply', 'Neura', 'Running', 'Reckon'];
  const resourceLinks = ['Blog', 'Ciencia', 'FAQs', 'Guías'];
  const legalLinks = ['Privacidad', 'Términos', 'Cookies'];

  return (
    <footer className="relative pt-20 pb-10 px-6 bg-cultiva-bg border-t border-cultiva-green/[0.08]">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-cultiva-muted text-sm leading-relaxed">
              Cultivando cuerpo y mente, una app a la vez.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
            <div>
              <h4 className="text-cultiva-text text-sm font-semibold mb-4">Apps</h4>
              <ul className="space-y-3">
                {appLinks.map((link) => (
                  <li key={link}>
                    <span className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cultiva-text text-sm font-semibold mb-4">Recursos</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link}>
                    <span className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cultiva-text text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <span className="text-cultiva-muted text-sm hover:text-cultiva-secondary transition-colors duration-300 cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cultiva-text text-sm font-semibold mb-4">Contacto</h4>
              <p className="text-cultiva-muted text-sm">
                cultivafitness@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cultiva-green/[0.06]">
          <p className="text-cultiva-muted text-sm">
            © 2026 Cultiva Fitness. Todos los derechos reservados.
          </p>
          <p className="text-cultiva-muted text-sm flex items-center gap-1.5">
            Hecho con <Heart className="w-3.5 h-3.5 text-cultiva-green fill-cultiva-green" /> y ciencia
          </p>
        </div>
      </div>
    </footer>
  );
}
