import { Link } from 'react-router';
import { Sparkles, ArrowRight } from 'lucide-react';
import { categorias } from '../data/ejercicios';

const MANAGER_CTA = "https://wa.me/5491123970926?text=Hola!%20Vi%20la%20biblioteca%20de%20ejercicios%20y%20quiero%20saber%20m%C3%A1s%20de%20MANAGER";

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
          <a
            href={MANAGER_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cultiva-green text-white text-sm font-semibold whitespace-nowrap hover:bg-cultiva-green-dark transition-colors duration-300 flex-shrink-0"
          >
            Conocer MANAGER
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              to={`/ejercicios/${cat.slug}`}
              className="group bg-cultiva-surface rounded-2xl border border-cultiva-border p-8 hover:border-cultiva-green/40 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-cultiva-green transition-colors">
                {cat.titulo}
              </h2>
              <p className="text-cultiva-secondary text-sm mb-4">
                {cat.subtitulo}
              </p>
              <p className="text-cultiva-secondary/70 text-sm">
                {cat.subcategorias.length} subcategorías
              </p>
              <div className="mt-6 pt-4 border-t border-cultiva-border">
                <span className="text-cultiva-green text-sm font-medium">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}