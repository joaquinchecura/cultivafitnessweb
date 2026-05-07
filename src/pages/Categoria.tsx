import { Link, useParams } from 'react-router';
import { categorias } from '../data/ejercicios';

export default function Categoria() {
  const { categoriaSlug } = useParams();
  const categoria = categorias.find((c) => c.slug === categoriaSlug);

  if (!categoria) {
    return (
      <div className="min-h-screen bg-cultiva-bg text-cultiva-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <Link to="/ejercicios" className="text-cultiva-green hover:underline">
            Volver a Ejercicios
          </Link>
        </div>
      </div>
    );
  }

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
            <Link to="/ejercicios" className="text-cultiva-secondary hover:text-cultiva-green transition">Ejercicios</Link>
            <span className="text-cultiva-green font-medium">{categoria.titulo}</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-cultiva-secondary mb-8">
          <Link to="/ejercicios" className="hover:text-cultiva-green">Ejercicios</Link>
          <span>/</span>
          <span className="text-cultiva-text">{categoria.titulo}</span>
        </div>

        <h1 className="text-4xl font-bold mb-2">{categoria.titulo}</h1>
        <p className="text-cultiva-secondary mb-2 text-lg">{categoria.subtitulo}</p>
        <p className="text-cultiva-secondary/70 mb-12">{categoria.descripcion}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoria.subcategorias.map((sub) => (
            <Link
              key={sub.slug}
              to={`/ejercicios/${categoria.slug}/${sub.slug}`}
              className="group bg-cultiva-surface rounded-2xl border border-cultiva-green/10 overflow-hidden hover:border-cultiva-green/40 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-cultiva-bg relative overflow-hidden">
                {sub.ejercicios[0]?.imagen ? (
                  <img
                    src={sub.ejercicios[0].imagen}
                    alt={sub.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-cultiva-surface">
                    <span className="text-5xl">💪</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cultiva-bg/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-lg font-semibold text-cultiva-text">
                  {sub.nombre}
                </span>
              </div>
              <div className="p-5">
                <p className="text-cultiva-secondary text-sm">
                  {sub.ejercicios.length} ejercicios
                </p>
                <div className="mt-4 pt-4 border-t border-cultiva-green/10">
                  <span className="text-cultiva-green text-sm font-medium">
                    Ver ejercicios →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}