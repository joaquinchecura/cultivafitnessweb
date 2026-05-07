import { Link } from 'react-router';
import { categorias } from '../data/ejercicios';

export default function Ejercicios() {
  return (
    <div className="min-h-screen bg-cultiva-bg text-cultiva-text">
      {/* Header */}
      <header className="border-b border-cultiva-green/10 bg-cultiva-bg/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-cultiva-text font-bold text-lg">CULTIVA</span>
            <span className="text-cultiva-muted font-mono text-sm">FITNESS</span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="text-cultiva-secondary hover:text-cultiva-green transition">Inicio</Link>
            <span className="text-cultiva-green font-medium">Ejercicios</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Biblioteca de Ejercicios</h1>
        <p className="text-cultiva-secondary mb-12 text-lg">
          Selecciona una categoría para explorar los ejercicios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <Link
              key={cat.slug}
              to={`/ejercicios/${cat.slug}`}
              className="group bg-cultiva-surface rounded-2xl border border-cultiva-green/10 p-8 hover:border-cultiva-green/40 transition-all duration-300"
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
              <div className="mt-6 pt-4 border-t border-cultiva-green/10">
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