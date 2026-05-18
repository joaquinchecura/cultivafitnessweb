import { Leaf, Cookie, Settings, Sliders, Info } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

const cookieTypes = [
  {
    title: 'Cookies Esenciales',
    required: true,
    description: `Necesarias para el funcionamiento básico del sitio web y las apps. Incluyen:

• Autenticación de sesión de usuario.
• Preferencias de idioma y configuración regional.
• Seguridad y prevención de fraudes.
• Recordar el estado de aceptación de esta política.

Estas cookies no se pueden desactivar ya que son indispensables para el servicio.`
  },
  {
    title: 'Cookies de Rendimiento y Analytics',
    required: false,
    description: `Nos ayudan a entender cómo interactúas con nuestro sitio y apps:

• Google Analytics: páginas visitadas, tiempo de sesión, fuentes de tráfico.
• Firebase Analytics: comportamiento dentro de las apps móviles, eventos de uso.
• Sentry: monitoreo de errores y estabilidad del sistema.

Los datos se anonimizan donde sea posible y se utilizan únicamente para mejorar la experiencia del usuario.`
  },
  {
    title: 'Cookies de Funcionalidad',
    required: false,
    description: `Permiten recordar tus preferencias para personalizar la experiencia:

• Tema visual (claro/oscuro) en la web.
• Recordar apps visitadas recientemente.
• Preferencias de notificaciones push.
• Configuraciones de accesibilidad.

Al desactivarlas, algunas funciones personalizadas podrían no estar disponibles.`
  },
  {
    title: 'Cookies de Marketing',
    required: false,
    description: `Utilizadas para mostrarte contenido relevante y medir la efectividad de nuestras campañas:

• Meta Pixel (Facebook/Instagram): seguimiento de conversiones y remarketing.
• Google Ads: mediciones de campañas publicitarias.
• TikTok Pixel: análisis de tráfico desde nuestras redes sociales.

No vendemos tu información a terceros con fines publicitarios.`
  }
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cultiva-bg text-cultiva-text">
        <div className="border-b border-cultiva-green/[0.08] bg-cultiva-bg/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cultiva-green to-cultiva-green-dark flex items-center justify-center">
              <Leaf className="w-4 h-4 text-cultiva-bg" />
            </div>
            <span className="font-bold text-lg tracking-tight">CULTIVA</span>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
            <p className="text-cultiva-muted text-sm">
              Última actualización: 18 de mayo de 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-cultiva-green/5 border border-cultiva-green/10 mb-10">
              <Cookie className="w-6 h-6 text-cultiva-green shrink-0 mt-0.5" />
              <div>
                <h3 className="text-cultiva-text font-semibold mb-2">¿Qué son las cookies?</h3>
                <p className="text-cultiva-muted text-sm leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
                  un sitio web o usas una app. También usamos tecnologías similares como local storage, 
                  session storage e identificadores de dispositivo móvil. En Cultiva Fitness, las utilizamos 
                  para garantizar el funcionamiento correcto de nuestro ecosistema, mejorar tu experiencia 
                  y ofrecerte contenido relevante.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-cultiva-text mb-6 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-cultiva-green" />
              Tipos de cookies que utilizamos
            </h2>

            <div className="space-y-6 mb-12">
              {cookieTypes.map((type) => (
                <div 
                  key={type.title} 
                  className="p-6 rounded-xl border border-cultiva-green/[0.08] bg-cultiva-bg/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-cultiva-text">{type.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      type.required 
                        ? 'bg-cultiva-green/10 text-cultiva-green' 
                        : 'bg-cultiva-muted/10 text-cultiva-muted'
                    }`}>
                      {type.required ? 'Siempre activa' : 'Opcional'}
                    </span>
                  </div>
                  <p className="text-cultiva-muted text-sm leading-relaxed whitespace-pre-line">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-cultiva-text mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-cultiva-green" />
                Cómo gestionar tus preferencias
              </h2>
              <div className="text-cultiva-muted text-sm leading-relaxed space-y-4">
                <p>
                  Puedes gestionar tus preferencias de cookies de las siguientes formas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    <strong>Navegador web:</strong> La mayoría de navegadores permiten bloquear o eliminar 
                    cookies desde su configuración. Consulta la sección de ayuda de Chrome, Safari, Firefox o Edge.
                  </li>
                  <li>
                    <strong>Apps móviles:</strong> Desde la configuración de cada app de Cultiva Fitness, 
                    puedes desactivar cookies de analytics y marketing en "Privacidad y Datos".
                  </li>
                  <li>
                    <strong>Plataformas publicitarias:</strong> Puedes optar por no recibir publicidad 
                    personalizada en{' '}
                    <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-cultiva-green hover:text-cultiva-secondary transition-colors">
                      Google Ads Settings
                    </a>
                    {' '}y{' '}
                    <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-cultiva-green hover:text-cultiva-secondary transition-colors">
                      Facebook Ad Preferences
                    </a>.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-cultiva-text mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-cultiva-green" />
                Duración de las cookies
              </h2>
              <div className="text-cultiva-muted text-sm leading-relaxed">
                <p className="mb-4">
                  Las cookies pueden clasificarse según su duración:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-cultiva-green/5 border border-cultiva-green/[0.08]">
                    <h4 className="font-medium text-cultiva-text mb-1">Sesión</h4>
                    <p className="text-xs text-cultiva-muted">
                      Se eliminan automáticamente cuando cierras el navegador o la app.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-cultiva-green/5 border border-cultiva-green/[0.08]">
                    <h4 className="font-medium text-cultiva-text mb-1">Persistentes</h4>
                    <p className="text-xs text-cultiva-muted">
                      Permanecen en tu dispositivo por un período definido (generalmente 30 días a 2 años) 
                      o hasta que las elimines manualmente.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-cultiva-green/[0.08]">
              <p className="text-cultiva-muted text-sm">
                Si tienes dudas sobre nuestra política de cookies, contáctanos en{' '}
                <a 
                  href="mailto:cultivafitness@gmail.com" 
                  className="text-cultiva-green hover:text-cultiva-secondary transition-colors"
                >
                  cultivafitness@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}