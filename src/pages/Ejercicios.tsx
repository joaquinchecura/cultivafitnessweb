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
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
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

      <main className="max-w-[1280px] mx-auto px-6 py-12">
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
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat, i) => {
            const { color, icon: Icon } = getCategoryStyle(cat.titulo, i);
            return (
              <Link
                key={cat.slug}
                to={`/ejercicios/${cat.slug}`}
                className="group relative bg-cultiva-surface rounded-2xl border border-cultiva-border overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                style={{ borderTopColor: color, borderTopWidth: 3 }}
              >
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${color}15` }}
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