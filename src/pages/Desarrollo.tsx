import { useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Download,
  MonitorSmartphone,
  RefreshCw,
  Smartphone,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { SeoHead } from '../components/SeoHead';

const WHATSAPP_NUMBER = '5491123970926';
const CONTACT_EMAIL = 'cultivafitness@gmail.com';

/* ============================================================
   CONTENIDO: editá todo desde acá
   ============================================================ */

const fits = [
  'Tenés una idea o una necesidad que ninguna app resuelve bien',
  'Hoy lo resolvés con planillas, chats o varias herramientas sueltas',
  'Querés darle a tus clientes algo propio, hecho a la medida de tu método',
  'No tenés tiempo, equipo técnico o ganas de armarlo vos',
];

const notFits = [
  'Buscás una copia de una app que ya existe',
  'Necesitás un precio antes de contar de qué se trata tu idea',
];

// Pasos de trabajo. Revisá que reflejen cómo trabajás realmente.
const steps = [
  { title: 'Me contás tu idea', desc: 'Completás el formulario con lo que querés crear y para quién.' },
  { title: 'Charla corta', desc: 'Hablamos para entender tu necesidad real y ver si es viable concretarla.' },
  { title: 'Propuesta por escrito', desc: 'Alcance claro y precio, según lo que tu proyecto necesite.' },
  { title: 'Primera versión', desc: 'Armo una versión que podés probar y ajustar antes de seguir.' },
  { title: 'Entrega y mantenimiento', desc: 'Tu app queda lista como PWA. El mantenimiento es opcional, según lo que necesites.' },
];

const pwa = [
  { icon: Download, title: 'Sin tiendas de apps', desc: 'Se instala desde el navegador: sin esperar aprobaciones ni pagar comisiones de las tiendas.' },
  { icon: MonitorSmartphone, title: 'Un solo desarrollo, todos los dispositivos', desc: 'Funciona en celular, tablet y computadora, con la misma base.' },
  { icon: RefreshCw, title: 'Actualizaciones al instante', desc: 'Tus usuarios siempre tienen la última versión, sin descargar nada.' },
  { icon: Smartphone, title: 'Se siente como una app', desc: 'Ícono en la pantalla de inicio, pantalla completa y, según el caso, uso sin conexión.' },
];

const examples = [
  { name: 'BIOMATCH', tag: 'Biomecánica', color: '#7C3AED', desc: 'Análisis biomecánico en 3D con 33 puntos anatómicos.', url: 'https://biomatch.cultivafitness.app' },
  { name: 'SUPPLY', tag: 'Nutrición', color: '#2563EB', desc: 'Registro de macros, plan personalizado y lista de compras.', url: 'https://supply.cultivafitness.app' },
  { name: 'RECKON', tag: 'Wellness', color: '#D97706', desc: 'Evaluaciones de salud que generan programas personalizados.', url: 'https://reckon.cultivafitness.app' },
  { name: 'NEURA', tag: 'Neurociencia', color: '#0D9488', desc: 'Regulación del sistema nervioso y hábitos saludables.', url: 'https://neura.cultivafitness.app' },
  { name: 'RUNNING', tag: 'Running', color: '#DC2626', desc: 'Plan personalizado, análisis de pie con IA y GPS.', url: 'https://running.cultivafitness.app' },
  { name: 'MICROFIT', tag: 'Eficiencia', color: '#EA580C', desc: 'Rutinas de 5 a 15 minutos adaptadas a cada persona.', url: 'https://microfit.cultivafitness.app' },
  { name: 'DESKOUT', tag: 'Productividad', color: '#4F46E5', desc: 'Microrutinas de movimiento para la jornada laboral.', url: 'https://deskout.cultivafitness.app' },
  { name: 'SILVER', tag: 'Longevidad', color: '#475569', desc: 'Bienestar físico accesible para adultos mayores.', url: 'https://silver.cultivafitness.app' },
  { name: 'JUNIOR', tag: 'Educación', color: '#65A30D', desc: 'Educación física gamificada para niños y jóvenes.', url: 'https://junior.cultivafitness.app' },
  { name: 'PRENATAL', tag: 'Maternidad', color: '#DB2777', desc: 'Embarazo activo con rutinas validadas médicamente.', url: 'https://prenatal.cultivafitness.app' },
  { name: 'TIMER', tag: 'Utilidad', color: '#DB2777', desc: 'Temporizador inteligente para entrenar.', url: 'https://timer.cultivafitness.app' },
];

const rubros = [
  'Entrenador/a personal',
  'Kinesiólogo/a / fisioterapeuta',
  'Nutricionista',
  'Profesor/a de Educación Física',
  'Gimnasio o centro de entrenamiento',
  'Club o equipo deportivo',
  'Otro',
];

const plazos = ['Sin apuro', 'En 1 a 3 meses', 'Lo antes posible'];

/* ============================================================ */

const inputCls =
  'w-full rounded-xl border border-cultiva-border bg-white px-4 py-3 text-sm text-cultiva-text placeholder:text-cultiva-muted focus:outline-none focus:border-cultiva-green/50 focus:ring-2 focus:ring-cultiva-green/15 transition';

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-cultiva-text mb-1.5">
        {label}
        {required ? <span className="text-cultiva-green-dark"> *</span> : <span className="text-cultiva-muted font-normal"> (opcional)</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-cultiva-muted mt-1.5">{hint}</p>}
    </div>
  );
}

const emptyForm = {
  nombre: '',
  rubro: '',
  idea: '',
  para: '',
  hoy: '',
  plazo: '',
  contacto: '',
};

function buildMessage(f: typeof emptyForm) {
  const lines = [
    'Hola! Quiero consultar por el desarrollo de una app a medida.',
    '',
    `Nombre: ${f.nombre}`,
    `Rubro: ${f.rubro}`,
    `Qué quiero crear: ${f.idea}`,
    `Para quién y qué problema resuelve: ${f.para}`,
  ];
  if (f.hoy.trim()) lines.push(`Hoy lo resuelvo con: ${f.hoy}`);
  if (f.plazo) lines.push(`Plazo: ${f.plazo}`);
  lines.push(`Contacto: ${f.contacto}`);
  return lines.join('\n');
}

export default function Desarrollo() {
  const [form, setForm] = useState(emptyForm);
  const formRef = useRef<HTMLFormElement>(null);

  const set =
    (k: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const scrollToId = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const send = (via: 'wa' | 'email') => {
    if (!formRef.current?.reportValidity()) return;
    const msg = buildMessage(form);
    if (via === 'wa') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Consulta: desarrollo de app a medida')}&body=${encodeURIComponent(msg)}`;
    }
  };

  return (
    <div className="relative bg-cultiva-bg min-h-screen text-cultiva-text">
      <SeoHead
        title="Desarrollo de apps a medida para profesionales de la salud, fitness y deporte | Cultiva Fitness"
        description="Convierto tu idea en una app (PWA) para tu negocio o tus clientes. Desarrollo aplicaciones para profesionales de la salud, el fitness y el deporte."
      />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="px-6">
          <div className="site-container">
            <div className="text-center max-w-[820px] mx-auto">
              <span className="font-mono-label text-cultiva-green-dark tracking-[0.2em] block mb-4">
                DESARROLLO A MEDIDA
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                ¿Tenés una idea para tu negocio o tus clientes? La convierto en una app.
              </h1>
              <p className="text-cultiva-secondary text-lg mb-8">
                Armo y desarrollo aplicaciones para profesionales de la salud, el fitness y el deporte,
                listas para instalar desde el navegador (PWA).
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => scrollToId('formulario')}
                  className="inline-flex items-center gap-2 rounded-full bg-cultiva-green px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:bg-cultiva-green-dark hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contame tu idea
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => scrollToId('ejemplos')}
                  className="inline-flex items-center gap-2 rounded-full border border-cultiva-border bg-white px-7 py-3.5 text-sm font-semibold text-cultiva-text hover:border-cultiva-green/40 transition-colors"
                >
                  Ver apps que ya construí
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section className="px-6 mt-20">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-[1100px] mx-auto">
              <div className="md:col-span-3 rounded-3xl border border-[#BBF7D0] bg-[#F0FDF4] p-8">
                <h2 className="text-xl font-semibold mb-5">Esto es para vos si…</h2>
                <ul className="space-y-3">
                  {fits.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] text-cultiva-secondary">
                      <Check className="w-4 h-4 mt-1 shrink-0 text-cultiva-green" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 rounded-3xl border border-cultiva-border bg-cultiva-surface p-8">
                <h2 className="text-xl font-semibold mb-5">Quizás no es para vos si…</h2>
                <ul className="space-y-3">
                  {notFits.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] text-cultiva-secondary">
                      <X className="w-4 h-4 mt-1 shrink-0 text-cultiva-muted" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-cultiva-muted mt-5">
                  Cada proyecto se cotiza según lo que necesite y qué tan viable sea. Primero hablamos,
                  después te paso el alcance y el precio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajo */}
        <section className="px-6 mt-24">
          <div className="site-container">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Cómo trabajo</h2>
              <p className="text-cultiva-secondary">
                Primero entender tu necesidad real. Después, ver si puedo hacerla realidad.
              </p>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1200px] mx-auto">
              {steps.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-cultiva-border bg-cultiva-surface p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#166534] text-sm font-bold text-white mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-cultiva-secondary leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ejemplos */}
        <section id="ejemplos" className="px-6 mt-24 py-16 bg-cultiva-elevated">
          <div className="site-container">
            <div className="text-center max-w-[680px] mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Así trabajo: mis propias apps</h2>
              <p className="text-cultiva-secondary">
                Todas las apps de Cultiva las diseñé y desarrollé yo. Probalas para ver el nivel de detalle
                que puedo darle a tu proyecto.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
              {examples.map((a) => (
                <a
                  key={a.name}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                  style={{ borderColor: `${a.color}33` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                      style={{ backgroundColor: `${a.color}15`, color: a.color }}
                    >
                      {a.tag}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-cultiva-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{a.name}</h3>
                  <p className="text-sm text-cultiva-secondary leading-relaxed">{a.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué PWA */}
        <section className="px-6 mt-24">
          <div className="site-container">
            <div className="text-center max-w-[640px] mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Por qué una PWA</h2>
              <p className="text-cultiva-secondary">
                Una app web instalable: más rápida y económica de construir que una app nativa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1100px] mx-auto">
              {pwa.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6">
                    <div className="w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#2563EB]" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-1.5">{p.title}</h3>
                    <p className="text-sm text-cultiva-secondary leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm text-cultiva-muted mt-6 max-w-[640px] mx-auto">
              Si tu idea necesita algo que el navegador no permite, lo evaluamos en la charla antes de
              comprometer nada.
            </p>
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" className="px-6 mt-24">
          <div className="site-container">
            <div className="max-w-[760px] mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Contame tu idea</h2>
                <p className="text-cultiva-secondary">
                  Cuanto más claro lo cuentes, más rápido puedo decirte si es viable y cómo lo encararía.
                  No tomo todos los proyectos: elijo los que puedo hacer bien.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  send('wa');
                }}
                className="rounded-3xl border border-cultiva-border bg-cultiva-surface p-6 sm:p-10 space-y-6 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field id="nombre" label="Tu nombre" required>
                    <input id="nombre" required className={inputCls} value={form.nombre} onChange={set('nombre')} autoComplete="name" />
                  </Field>
                  <Field id="rubro" label="Tu rubro" required>
                    <select id="rubro" required className={inputCls} value={form.rubro} onChange={set('rubro')}>
                      <option value="" disabled>
                        Elegí una opción
                      </option>
                      {rubros.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  id="idea"
                  label="¿Qué querés crear?"
                  required
                  hint="Ej: una app para que mis alumnos registren sus entrenamientos y yo vea su progreso."
                >
                  <textarea id="idea" required minLength={20} rows={4} className={inputCls} value={form.idea} onChange={set('idea')} />
                </Field>

                <Field id="para" label="¿Para quién es y qué problema resuelve?" required>
                  <textarea id="para" required minLength={10} rows={3} className={inputCls} value={form.para} onChange={set('para')} />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field id="hoy" label="¿Cómo lo resolvés hoy?" hint="Planillas, otra app, a mano…">
                    <input id="hoy" className={inputCls} value={form.hoy} onChange={set('hoy')} />
                  </Field>
                  <Field id="plazo" label="¿Para cuándo la necesitás?">
                    <select id="plazo" className={inputCls} value={form.plazo} onChange={set('plazo')}>
                      <option value="">Sin definir</option>
                      {plazos.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="contacto" label="Tu WhatsApp o email" required>
                  <input id="contacto" required className={inputCls} value={form.contacto} onChange={set('contacto')} autoComplete="email" />
                </Field>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cultiva-green px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(22,163,74,0.25)] hover:bg-cultiva-green-dark transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Enviar por WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => send('email')}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-cultiva-border bg-white px-6 py-3.5 text-sm font-semibold text-cultiva-text hover:border-cultiva-green/40 transition-colors"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Enviar por email
                  </button>
                </div>
                <p className="text-xs text-cultiva-muted text-center">
                  Al enviar se abre WhatsApp (o tu correo) con el mensaje ya armado. Este formulario no
                  guarda nada en el sitio.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}