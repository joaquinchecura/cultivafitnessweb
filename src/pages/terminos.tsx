// app/terminos/page.tsx (o pages/terminos.tsx)
import { Leaf, Scale, AlertTriangle, CheckCircle, Ban, CreditCard } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Cultiva Fitness',
  description: 'Reglas de uso, suscripciones y responsabilidades del ecosistema Cultiva Fitness.',
};

const clauses = [
  {
    icon: Scale,
    title: '1. Aceptación de los Términos',
    content: `Al descargar, instalar o usar cualquier aplicación del ecosistema Cultiva Fitness (BodyMind, Supply, Neura, Running, Reckon), aceptas estos Términos y Condiciones. Si no estás de acuerdo, no debes usar nuestras apps.

Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor 30 días después de su publicación, salvo que se indique lo contrario. El uso continuado de las apps después de dichos cambios constituye tu aceptación.`
  },
  {
    icon: CheckCircle,
    title: '2. El Servicio',
    content: `Cultiva Fitness ofrece un ecosistema de aplicaciones móviles orientadas al bienestar integral: fitness, nutrición, neurociencia y seguimiento de hábitos.

• Las recomendaciones de entrenamiento, nutrición y bienestar mental son de carácter informativo y educativo.
• No sustituimos el asesoramiento médico, nutricional o psicológico profesional. Consulta siempre a un especialista antes de iniciar cualquier programa de ejercicio o cambio dietético significativo.
• La precisión de los datos depende de la información que ingreses. Es tu responsabilidad proporcionar datos veraces y actualizados.`
  },
  {
    icon: CreditCard,
    title: '3. Suscripciones y Pagos',
    content: `Algunas funcionalidades de nuestras apps requieren una suscripción premium:

• Las suscripciones se facturan a través de Google Play Store o Apple App Store según corresponda.
• Los pagos se procesan automáticamente según el plan elegido (mensual o anual).
• Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta en la tienda correspondiente. La cancelación se hará efectiva al final del período de facturación actual.
• No realizamos reembolsos por períodos parciales de uso, salvo que la ley aplicable lo exija.
• Ofrecemos períodos de prueba gratuita cuando se indique explícitamente. Al finalizar la prueba, la suscripción se renovará automáticamente a menos que canceles antes.`
  },
  {
    icon: Ban,
    title: '4. Uso Prohibido',
    content: `Está estrictamente prohibido:

• Usar las apps para fines ilegales, fraudulentos o no autorizados.
• Intentar acceder, interferir o dañar nuestros sistemas, servidores o redes.
• Extraer datos masivamente (scraping) o usar bots/automatización no autorizada.
• Suplantar la identidad de otro usuario o entidad.
• Distribuir malware, virus o cualquier código dañino a través de nuestras plataformas.
• Revender, sublicenciar o comercializar el acceso a nuestras apps sin autorización escrita.

El incumplimiento puede resultar en la suspensión o terminación inmediata de tu cuenta sin previo aviso.`
  },
  {
    icon: AlertTriangle,
    title: '5. Limitación de Responsabilidad',
    content: `En la máxima medida permitida por la ley aplicable:

• Cultiva Fitness no se hace responsable por lesiones físicas, daños a la salud o pérdidas económicas derivadas del uso de nuestras apps o del seguimiento de sus recomendaciones.
• No garantizamos resultados específicos de pérdida de peso, ganancia muscular o mejora del rendimiento mental.
• Nuestra responsabilidad total ante cualquier reclamo no excederá el monto total que hayas pagado a Cultiva Fitness en los 12 meses anteriores al evento que dio origen al reclamo.
• No somos responsables por interrupciones del servicio causadas por mantenimiento, fallas técnicas o factores fuera de nuestro control razonable.`
  }
];

export default function TerminosPage() {
  return (
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
          <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-cultiva-muted text-sm">
            Última actualización: 18 de mayo de 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-cultiva-muted leading-relaxed mb-8 text-base">
            Bienvenido al ecosistema Cultiva Fitness. Estos términos rigen el uso de nuestras 
            aplicaciones móviles y servicios web. Léelos detenidamente antes de continuar.
          </p>

          {clauses.map((clause) => (
            <section key={clause.title} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cultiva-green/10 flex items-center justify-center">
                  <clause.icon className="w-5 h-5 text-cultiva-green" />
                </div>
                <h2 className="text-xl font-semibold text-cultiva-text">{clause.title}</h2>
              </div>
              <div className="pl-[52px]">
                <p className="text-cultiva-muted leading-relaxed whitespace-pre-line text-sm">
                  {clause.content}
                </p>
              </div>
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-cultiva-text mb-4 pl-[52px]">6. Propiedad Intelectual</h2>
            <div className="pl-[52px]">
              <p className="text-cultiva-muted leading-relaxed text-sm">
                Todo el contenido de las apps —incluyendo textos, gráficos, logos, iconos, imágenes, 
                clips de audio, descargas digitales y compilaciones de datos— es propiedad de Cultiva Fitness 
                o de sus licenciantes y está protegido por leyes de derechos de autor y marcas registradas.

                Se te otorga una licencia limitada, no exclusiva e intransferible para usar las apps 
                en tus dispositivos personales. No puedes copiar, modificar, distribuir, vender o 
                alquilar ninguna parte de nuestro software o contenido.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-cultiva-text mb-4 pl-[52px]">7. Ley Aplicable y Jurisdicción</h2>
            <div className="pl-[52px]">
              <p className="text-cultiva-muted leading-relaxed text-sm">
                Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa 
                será resuelta ante los tribunales competentes de la Ciudad Autónoma de Buenos Aires, 
                Argentina. Si resides en la Unión Europea, también tienes derecho a presentar reclamos 
                ante las autoridades de protección al consumidor de tu país de residencia.
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-cultiva-green/[0.08]">
            <p className="text-cultiva-muted text-sm">
              Para consultas sobre estos términos, escríbenos a{' '}
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
  );
}