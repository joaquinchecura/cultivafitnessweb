import { Link } from 'react-router';
import {
  Check,
  ArrowRight,
  Gift,
  CalendarDays,
  Sparkles,
  Users,
  Dumbbell,
  CreditCard,
  CalendarClock,
  LayoutGrid,
  LifeBuoy,
} from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { SeoHead } from '../components/SeoHead';

/* ============================================================
   PRECIOS: editá todo desde acá
   ============================================================ */
const MONTHLY_USD = 20;
const ANNUAL_USD = 200;
const TRIAL_DAYS = 14; // competidores dan 14-30 días; 7 es poco para cargar clientes reales

const yearlyIfMonthly = MONTHLY_USD * 12; // 240
const savingUsd = yearlyIfMonthly - ANNUAL_USD; // 40
const monthsFree = Math.round(savingUsd / MONTHLY_USD); // 2
const annualPerMonth = (ANNUAL_USD / 12).toFixed(2).replace('.', ','); // 16,67

const waUrl = (msg: string) =>
  `https://wa.me/5491123970926?text=${encodeURIComponent(msg)}`;

const plans = [
  {
    id: 'trial',
    name: 'Prueba gratis',
    icon: Gift,
    tagline: 'Probá todo el ecosistema sin compromiso.',
    price: '$0',
    unit: `por ${TRIAL_DAYS} días`,
    note: 'Sin tarjeta de crédito',
    features: [
      'MANAGER completo',
      'Acceso a todas las apps',
      'Sin tarjeta de crédito',
      'Sin compromiso al terminar',
    ],
    cta: 'Empezar prueba gratis',
    href: waUrl('Hola! Quiero empezar la prueba gratis de MANAGER'),
    featured: false,
  },
  {
    id: 'monthly',
    name: 'Mensual',
    icon: CalendarDays,
    tagline: 'Flexibilidad total, mes a mes.',
    price: `$${MONTHLY_USD}`,
    unit: 'USD por mes',
    note: 'Cancelás cuando quieras',
    features: [
      'MANAGER completo',
      'Todas las apps incluidas',
      'Soporte directo',
      'Sin permanencia',
    ],
    cta: 'Elegir plan mensual',
    href: waUrl('Hola! Quiero contratar el plan mensual de MANAGER'),
    featured: false,
  },
  {
    id: 'annual',
    name: 'Anual',
    icon: Sparkles,
    tagline: 'El mejor precio para tu negocio.',
    price: `$${ANNUAL_USD}`,
    unit: 'USD por año',
    note: `Equivale a $${annualPerMonth} por mes`,
    badge: `${monthsFree} meses gratis`,
    savings: `Ahorrás $${savingUsd} USD al año`,
    features: [
      'Todo lo del plan mensual',
      `${monthsFree} meses gratis`,
      'Precio fijo por 12 meses',
      'Soporte directo',
    ],
    cta: 'Elegir plan anual',
    href: waUrl('Hola! Quiero contratar el plan anual de MANAGER'),
    featured: true,
  },
];

// Mismos colores pastel que las cards de FeaturesSection
const included = [
  { icon: Users, color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0', title: 'Gestión de clientes', desc: 'Fichas, historial, evolución y alta por link o QR.' },
  { icon: Dumbbell, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', title: 'Rutinas y ejercicios', desc: 'Biblioteca de más de 800 ejercicios y generador de rutinas.' },
  { icon: CreditCard, color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', title: 'Pagos y membresías', desc: 'Planes, cobros y alertas de vencimiento en un panel.' },
  { icon: CalendarClock, color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', title: 'Agenda y turnos', desc: 'Clases, reservas y agenda de todo tu equipo.' },
  { icon: LayoutGrid, color: '#0D9488', bg: '#F0FDFA', border: '#99F6E4', title: 'Todas las apps', desc: 'Nutrición, evaluaciones, running, biomecánica y más, para tus clientes.' },
  { icon: LifeBuoy, color: '#DB2777', bg: '#FDF2F8', border: '#FBCFE8', title: 'Soporte directo', desc: 'Hablás con quien construye el producto, por WhatsApp o email.' },
];

/*
  TEXTO DE EJEMPLO: revisá cada respuesta antes de publicar.
  OJO con "¿Hay límite de clientes?": la competencia (TrueCoach, Trainerize)
  cobra según cantidad de clientes. Confirmá qué vas a ofrecer vos.
*/
const faqs = [
  {
    q: '¿Necesito tarjeta para la prueba gratis?',
    a: 'No. Empezás la prueba sin cargar ningún medio de pago y decidís al final si seguís.',
  },
  {
    q: '¿Hay un límite de clientes?',
    a: 'Por el momento el límite de clientes por plan es de 100.',
  },
  {
    q: '¿Puedo pasar del plan mensual al anual?',
    a: 'Sí, cuando quieras. Escribinos y te lo cambiamos sin perder nada de tu información.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Estamos en acceso temprano: coordinamos el alta y el medio de pago con vos por WhatsApp o email.',
  },
  {
    q: '¿Qué pasa con mis datos si cancelo?',
    a: 'Son tuyos. Podés descargarlos en CSV, listos para abrir en Excel, desde Configuración.',
  },
];

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const Icon = plan.icon;
  const f = plan.featured;

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        f
          ? 'bg-[#166534] text-white shadow-[0_24px_60px_rgba(22,101,52,0.35)] md:-my-4 md:py-12 order-first md:order-none'
          : 'bg-cultiva-surface border border-cultiva-border hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
      }`}
    >
      {'badge' in plan && plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-amber-950 shadow">
          Mejor valor · {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            f ? 'bg-white/15' : 'bg-cultiva-green/10'
          }`}
        >
          <Icon className={`w-5 h-5 ${f ? 'text-white' : 'text-cultiva-green-dark'}`} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold">{plan.name}</h3>
      </div>

      <p className={`text-sm mb-6 ${f ? 'text-white/80' : 'text-cultiva-secondary'}`}>{plan.tagline}</p>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
        <span className={`text-sm ${f ? 'text-white/75' : 'text-cultiva-muted'}`}>{plan.unit}</span>
      </div>
      <p className={`text-sm mb-1 ${f ? 'text-white/85' : 'text-cultiva-muted'}`}>{plan.note}</p>
      {'savings' in plan && plan.savings && (
        <p className="text-sm font-semibold text-amber-300">{plan.savings}</p>
      )}

      <ul className="mt-6 mb-8 space-y-3">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[15px]">
            <Check
              className={`w-4 h-4 mt-1 shrink-0 ${f ? 'text-amber-300' : 'text-cultiva-green'}`}
              aria-hidden="true"
            />
            <span className={f ? 'text-white/95' : 'text-cultiva-secondary'}>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
          f
            ? 'bg-white text-[#166534] hover:bg-green-50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]'
            : 'border border-cultiva-green/40 text-cultiva-green-dark hover:bg-cultiva-green hover:text-white'
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export default function Precios() {
  return (
    <div className="relative bg-cultiva-bg min-h-screen text-cultiva-text">
      <SeoHead
        title="Precios de MANAGER | Cultiva Fitness"
        description={`Probá MANAGER gratis ${TRIAL_DAYS} días. Después $${MONTHLY_USD} USD por mes o $${ANNUAL_USD} USD por año, con todas las apps y soporte incluidos.`}
      />
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="site-container">
          {/* Encabezado */}
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="font-mono-label text-cultiva-green-dark tracking-[0.2em] block mb-4">
              PRECIOS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Un solo precio. Todo el ecosistema.
            </h1>
            <p className="text-cultiva-secondary text-lg">
              MANAGER y todas las apps de Cultiva incluidas, con soporte directo. Sin límites de funciones
              ni planes escondidos.
            </p>
          </div>

          {/* Las 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch max-w-[1100px] mx-auto">
            {plans.map((p) => (
              <PlanCard key={p.id} plan={p} />
            ))}
          </div>

          <p className="text-center text-cultiva-muted text-sm mt-8">
            Precios en dólares estadounidenses (USD). Cancelás cuando quieras.
          </p>

          {/* Qué incluye */}
          <div className="mt-24">
            <div className="text-center max-w-[640px] mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Todo incluido en cualquier plan
              </h2>
              <p className="text-cultiva-secondary">
                No hay versiones recortadas: la prueba y los dos planes tienen exactamente lo mismo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
              {included.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="rounded-2xl border p-6"
                    style={{ backgroundColor: it.bg, borderColor: it.border }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" style={{ color: it.color }} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{it.title}</h3>
                    <p className="text-cultiva-secondary text-sm leading-relaxed">{it.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preguntas sobre precios */}
          <div className="mt-24 max-w-[760px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10">
              Preguntas sobre los planes
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-cultiva-border bg-cultiva-surface open:border-cultiva-green/30"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="shrink-0 text-cultiva-green-dark transition-transform duration-300 group-open:rotate-45 text-2xl leading-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-cultiva-secondary leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <p className="text-center text-cultiva-muted text-sm mt-10">
              ¿Más dudas?{' '}
              <Link to="/" className="text-cultiva-green-dark font-medium hover:underline">
                Volvé al inicio
              </Link>{' '}
              o escribinos por WhatsApp.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}