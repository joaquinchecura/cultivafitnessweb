import { Link } from 'react-router';
import { Sparkles, ArrowRight, Move, Dumbbell, Flame, Wind, HeartPulse, Activity } from 'lucide-react';
import { categorias } from '../data/ejercicios';

const MANAGER_CTA_WHATSAPP = "https://wa.me/5491123970926?text=Hola!%20Vi%20la%20biblioteca%20de%20ejercicios%20y%20quiero%20saber%20m%C3%A1s%20de%20MANAGER";
const MANAGER_CTA_EMAIL = "mailto:cultivafitness@gmail.com?subject=Quiero%20saber%20m%C3%A1s%20de%20MANAGER&body=Hola!%20Vi%20la%20biblioteca%20de%20ejercicios%20y%20quiero%20saber%20m%C3%A1s%20de%20MANAGER.";

const CATEGORY_STYLES = [
  { color: '#16A34A', icon: Move },      // green
  { color: '#2563EB', icon: Dumbbell },  // blue
  { color: '#D97706', icon: Flame },     // amber
  { color: '#0D9488', icon: Wind },      // teal
  { color: '#DB2777', icon: HeartPulse },// pink
  { color: '#7C3AED', icon: Activity },  // purple
];

/*
  FONDO DE LAS CARDS DE CATEGORÍA (para probar)
  - Las imágenes de cada card se definen en CATEGORY_IMAGES (más abajo).
    Si una no existe, la card queda con su tinte pastel, sin ícono de imagen rota.
  - BG_IMAGE_OPACITY: transparencia de la imagen (0 = invisible, 1 = plena).
    Probá entre 0.10 y 0.25.
  - BG_TINT: tinte pastel del color de la categoría, siempre debajo de la imagen.
*/
const BG_IMAGE_OPACITY = 0.18;

/*
  ACÁ PEGÁS LAS URLs DE LAS IMÁGENES, una por categoría.
  Pueden ser rutas de tu proyecto (archivos dentro de /public) o links https://.
  Si dejás una vacía (''), esa card queda solo con el tinte pastel.
*/
const CATEGORY_IMAGES = {
  movilidad: '/images/ejercicios/movilidad.webp',
  fuerza: '/images/ejercicios/fuerza.webp',
  metabolico: '/images/ejercicios/metabolico.webp',
  regulacion: '/images/ejercicios/regulacion.webp',
  rehabilitacion: '/images/ejercicios/rehabilitacion.webp',
};

function getCategoryImage(titulo: string): string {
  const t = titulo.toLowerCase();
  if (t.includes('movilidad')) return CATEGORY_IMAGES.movilidad;
  if (t.includes('fuerza')) return CATEGORY_IMAGES.fuerza;
  if (t.includes('metaból') || t.includes('metabol')) return CATEGORY_IMAGES.metabolico;
  if (t.includes('regulaci')) return CATEGORY_IMAGES.regulacion;
  if (t.includes('rehabilit')) return CATEGORY_IMAGES.rehabilitacion;
  return '';
}
const BG_TINT = '12'; // alfa hex del color de la categoría (12 ≈ 7%)

function getCategoryStyle(titulo: string, index: number) {
  const t = titulo.toLowerCase();
  if (t.includes('movilidad')) return { color: '#16A34A', icon: Move };
  if (t.includes('fuerza')) return { color: '#2563EB', icon: Dumbbell };
  if (t.includes('metaból') || t.includes('metabol')) return { color: '#D97706', icon: Flame };
  if (t.includes('regulaci')) return { color: '#0D9488', icon: Wind };
  if (t.includes('rehabilit')) return { color: '#DB2777', icon: HeartPulse };
  return CATEGORY_STYLES[index % CATEGORY_STYLES.length];
}

export default function Ejercicios() {
  return (
    <div className="min-h-screen bg-cultiva-bg text-cultiva-text">
      {/* Header */}
      <header className="border-b border-cultiva-border bg-cultiva-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="site-container px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-cultiva-text font-bold text-lg">CULTIVA</span>
            <span className="text-cultiva-muted font-mono text-sm">FITNESS</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-cultiva-secondary hover:text-cultiva-green transition">Inicio</Link>
            <span className="text-cultiva-green font-medium">Ejercicios</span>
          </nav>

          <nav className="flex md:hidden gap-4">
            <Link
              to="/"
              className="text-cultiva-secondary hover:text-cultiva-green transition text-sm flex items-center gap-1"
            >
              ← Inicio
            </Link>
          </nav>
        </div>
      </header>

      <main className="site-container px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Biblioteca de Ejercicios</h1>
        <p className="text-cultiva-secondary mb-8 text-lg">
          Selecciona una categoría para explorar los ejercicios.
        </p>

        {/* Banner puente a MANAGER */}
        <div className="mb-12 rounded-2xl bg-cultiva-elevated border border-cultiva-border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-cultiva-green/15 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-cultiva-green" />
            </div>
            <div>
              <h3 className="text-cultiva-text font-semibold text-base mb-1">
                ¿Sos profesional de salud, fitness o deporte?
              </h3>
              <p className="text-cultiva-secondary text-sm max-w-[480px]">
                Estos mismos ejercicios alimentan el generador automático de rutinas de MANAGER —
                armá programas para tus clientes en minutos, no en horas.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <a
              href={MANAGER_CTA_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cultiva-green text-white text-sm font-semibold whitespace-nowrap hover:bg-cultiva-green-dark transition-colors duration-300"
            >
              Conocer MANAGER
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={MANAGER_CTA_EMAIL}
              className="text-cultiva-muted text-xs hover:text-cultiva-secondary transition-colors"
            >
              o escribinos a cultivafitness@gmail.com
            </a>
            <Link
              to="/desarrollo"
              className="text-cultiva-green-dark text-xs font-medium hover:underline"
            >
              ¿Querés tu propia app? Desarrollo a medida →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat, i) => {
            const { color, icon: Icon } = getCategoryStyle(cat.titulo, i);
            return (
              <Link
                key={cat.slug}
                to={`/ejercicios/${cat.slug}`}
                className="group relative isolate bg-cultiva-surface rounded-2xl border border-cultiva-border overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                style={{ borderTopColor: color, borderTopWidth: 3 }}
              >
                {/* Capa 1: tinte pastel del color de la categoría */}
                <div
                  className="absolute inset-0 -z-20"
                  style={{ backgroundColor: `${color}${BG_TINT}` }}
                  aria-hidden="true"
                />
                {/* Capa 2: imagen de fondo con transparencia baja */}
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: getCategoryImage(cat.titulo) ? `url(${getCategoryImage(cat.titulo)})` : 'none',
                    opacity: BG_IMAGE_OPACITY,
                  }}
                  aria-hidden="true"
                />
                {/* Capa 3: degradado a blanco abajo para que el texto se lea bien */}
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-white/70 via-white/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(255,255,255,0.75)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>

                  <h2 className="text-2xl font-semibold mb-2 transition-colors" style={{ color: 'inherit' }}>
                    {cat.titulo}
                  </h2>
                  <p className="text-cultiva-secondary text-sm mb-4">
                    {cat.subtitulo}
                  </p>
                  <p className="text-cultiva-secondary/70 text-sm">
                    {cat.subcategorias.length} subcategorías
                  </p>
                  <div className="mt-6 pt-4 border-t border-cultiva-border">
                    <span className="text-sm font-medium inline-flex items-center gap-1" style={{ color }}>
                      Explorar
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}