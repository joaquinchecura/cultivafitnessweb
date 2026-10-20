import { useId, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5491123970926?text=Hola!%20Tengo%20una%20consulta%20sobre%20MANAGER";

/*
  TEXTO DE EJEMPLO: reemplazá preguntas y respuestas por las definitivas.
  Para agregar/quitar una pregunta, editá este array y listo.
*/
const faqs = [
  {
    q: '¿Qué es MANAGER?',
    a: 'MANAGER es la plataforma para profesionales de la salud, el fitness y el deporte. Te permite gestionar tu negocio y a tus clientes desde un solo lugar, e integrar las apps del ecosistema Cultiva a tu trabajo diario.',
  },
  {
    q: '¿Para quién está pensado?',
    a: 'Para entrenadores, kinesiólogos, nutricionistas, profesores de educación física y cualquier profesional que acompañe a personas en su salud y su rendimiento. También para gimnasios y centros que quieran ordenar su gestión.',
  },
  {
    q: '¿Las apps tienen un costo adicional?',
    a: 'No. Como profesional en MANAGER podés sumar las apps del ecosistema al trabajo con tus clientes sin costo extra. Los detalles de cada plan los vas a encontrar en la página de precios.',
  },
  {
    q: '¿Cómo solicito acceso anticipado?',
    a: 'Tocá el botón "Solicitar acceso" y escribinos por WhatsApp o por email. Te contestamos para contarte los próximos pasos y habilitarte el acceso apenas haya lugar.',
  },
  {
    q: '¿Mis clientes necesitan instalar algo?',
    a: 'No hace falta descargar nada de una tienda: las apps funcionan desde el navegador del celular y se pueden agregar a la pantalla de inicio como una app más.',
  },
  {
    q: '¿Cómo cuidan los datos de mis clientes?',
    a: 'La información de salud es sensible y la tratamos con ese criterio. Cada profesional accede solo a los datos de sus propios clientes. Podés leer el detalle en nuestra política de privacidad.',
  },
  {
    q: '¿Las recomendaciones tienen respaldo científico?',
    a: 'Sí. El contenido y los criterios de las apps se basan en investigación científica revisada por pares, y en el blog explicamos esos estudios de forma simple.',
  },
];

export function FaqSection() {
  // Solo una respuesta abierta a la vez; null = todas cerradas
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative py-20 lg:py-24 px-6 bg-cultiva-bg">
      <div className="site-container">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <span className="font-mono-label text-cultiva-green-dark tracking-[0.2em] block mb-4">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cultiva-text mb-4 tracking-tight">
            Lo que más nos preguntan
          </h2>
          <p className="text-cultiva-secondary text-base sm:text-lg">
            Si no encontrás tu respuesta, escribinos y te ayudamos.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <div
                key={item.q}
                className={`bg-cultiva-surface border rounded-2xl transition-colors duration-300 ${
                  isOpen ? 'border-cultiva-green/30' : 'border-cultiva-border'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-cultiva-text text-base sm:text-lg font-semibold">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-cultiva-green-dark transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {/* Animación de alto con grid-rows: 0fr -> 1fr */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-cultiva-secondary text-sm sm:text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-cultiva-muted text-sm mb-3">¿Tenés otra consulta?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cultiva-green text-white text-sm font-semibold shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}