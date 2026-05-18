import { Leaf, Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

const sections = [
  {
    icon: Shield,
    title: '1. Información que Recopilamos',
    content: `Recopilamos información necesaria para brindarte nuestros servicios de bienestar integral:

• **Datos de cuenta**: nombre, correo electrónico, fecha de nacimiento y credenciales de autenticación.
• **Datos de salud y fitness**: peso, altura, objetivos de entrenamiento, registros de actividad física, hábitos alimenticios y preferencias nutricionales (solo en las apps que lo requieran).
• **Datos técnicos**: dirección IP, tipo de dispositivo, sistema operativo, identificadores únicos de dispositivo y registros de uso de la app.
• **Datos de pagos**: información de transacciones procesadas por nuestros proveedores de pago (no almacenamos datos completos de tarjetas).`
  },
  {
    icon: Eye,
    title: '2. Cómo Usamos tu Información',
    content: `Utilizamos tus datos para:

• Personalizar planes de entrenamiento, nutrición y bienestar mental según tus objetivos.
• Generar insights y métricas de progreso mediante algoritmos de IA (los datos se anonimizan para el entrenamiento de modelos).
• Enviar notificaciones de recordatorio, actualizaciones de planes y comunicaciones relevantes sobre tu bienestar.
• Mejorar la experiencia del usuario y el rendimiento de nuestras apps.
• Cumplir con obligaciones legales y resolver disputas.`
  },
  {
    icon: Database,
    title: '3. Compartir Información',
    content: `No vendemos tu información personal. Solo compartimos datos con:

• **Proveedores de servicios**: hosting en la nube (AWS/Google Cloud), procesadores de pagos, servicios de analytics y notificaciones push.
• **Integraciones de salud**: Apple Health, Google Fit u otras plataformas, solo cuando tú autorices la conexión explícitamente.
• **Obligaciones legales**: cuando sea requerido por autoridades competentes o para proteger nuestros derechos legales.

Todos nuestros proveedores están sujetos a acuerdos de confidencialidad y protección de datos.`
  },
  {
    icon: Lock,
    title: '4. Seguridad y Retención',
    content: `Implementamos medidas de seguridad técnicas y organizativas de nivel empresarial:

• Encriptación AES-256 para datos en reposo y TLS 1.3 para datos en tránsito.
• Autenticación multifactor opcional para cuentas de usuario.
• Acceso restringido basado en roles para nuestro equipo.
• Auditorías de seguridad periódicas.

Conservamos tus datos mientras mantengas una cuenta activa. Puedes solicitar la eliminación completa de tu cuenta y datos asociados en cualquier momento desde la configuración de cada app o contactándonos directamente.`
  },
  {
    icon: Leaf,
    title: '5. Tus Derechos',
    content: `Dependiendo de tu jurisdicción, tienes derecho a:

• **Acceder** a los datos personales que tenemos sobre ti.
• **Rectificar** información inexacta o incompleta.
• **Eliminar** tu cuenta y datos personales (derecho al olvido).
• **Oponerte** al procesamiento de datos para ciertos fines, incluyendo marketing.
• **Portar** tus datos a otro servicio en formato estructurado.
• **Revocar** el consentimiento en cualquier momento.

Para ejercer estos derechos, contáctanos en cultivafitness@gmail.com. Respondemos dentro de los 30 días hábiles.`
  }
];

export default function PrivacidadPage() {
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
            <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-cultiva-muted text-sm">
              Última actualización: 18 de mayo de 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-cultiva-muted leading-relaxed mb-8 text-base">
              En Cultiva Fitness, tu privacidad es fundamental. Este documento explica cómo manejamos 
              la información en todo nuestro ecosistema de apps (BodyMind, Supply, Neura, Running y Reckon). 
              Al usar nuestras apps, aceptas las prácticas descritas aquí.
            </p>

            {sections.map((section) => (
              <section key={section.title} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cultiva-green/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-cultiva-green" />
                  </div>
                  <h2 className="text-xl font-semibold text-cultiva-text">{section.title}</h2>
                </div>
                <div className="pl-[52px]">
                  <p className="text-cultiva-muted leading-relaxed whitespace-pre-line text-sm">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}

            <section className="mt-12 pt-8 border-t border-cultiva-green/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-cultiva-green" />
                <h2 className="text-xl font-semibold">Contacto</h2>
              </div>
              <p className="text-cultiva-muted leading-relaxed text-sm pl-8">
                Si tienes preguntas sobre esta política o sobre cómo manejamos tus datos, 
                escríbenos a{' '}
                <a 
                  href="mailto:cultivafitness@gmail.com" 
                  className="text-cultiva-green hover:text-cultiva-secondary transition-colors"
                >
                  cultivafitness@gmail.com
                </a>
                {' '}o por WhatsApp al +54 9 11 2397-0926.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}