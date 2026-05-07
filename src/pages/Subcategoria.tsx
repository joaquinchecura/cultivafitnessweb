import { Link, useParams } from 'react-router';
import { categorias } from '../data/ejercicios';

export default function Subcategoria() {
  const { categoriaSlug, subcategoriaSlug } = useParams();
  
  const categoria = categorias.find((c) => c.slug === categoriaSlug);
  const subcategoria = categoria?.subcategorias.find((s) => s.slug === subcategoriaSlug);

  if (!categoria || !subcategoria) {
    return (
      <div className="min-h-screen bg-cultiva-bg text-cultiva-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Subcategoría no encontrada</h1>
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
            <span className="text-cultiva-green font-medium">{subcategoria.nombre}</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-cultiva-secondary mb-8">
          <Link to="/ejercicios" className="hover:text-cultiva-green">Ejercicios</Link>
          <span>/</span>
          <Link to={`/ejercicios/${categoria.slug}`} className="hover:text-cultiva-green">
            {categoria.titulo}
          </Link>
          <span>/</span>
          <span className="text-cultiva-text">{subcategoria.nombre}</span>
        </div>

        <h1 className="text-4xl font-bold mb-2">{subcategoria.nombre}</h1>
        <p className="text-cultiva-secondary mb-12 text-lg">
          {categoria.subtitulo}
        </p>

        {subcategoria.ejercicios.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-cultiva-secondary text-lg">
              Próximamente: ejercicios de {subcategoria.nombre}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategoria.ejercicios.map((ej) => (
              <div
                key={ej.nombre}
                className="bg-cultiva-surface rounded-2xl border border-cultiva-green/10 overflow-hidden hover:border-cultiva-green/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-cultiva-bg relative">
                  <img
                    src={ej.imagen}
                    alt={ej.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{ej.nombre}</h3>
                  <p className="text-cultiva-secondary text-sm leading-relaxed">
                    {ej.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}