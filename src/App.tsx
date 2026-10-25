// src/App.tsx
import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Home from './pages/Home';

const Ejercicios = lazy(() => import('./pages/Ejercicios'));
const Categoria = lazy(() => import('./pages/Categoria'));
const Subcategoria = lazy(() => import('./pages/Subcategoria'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Precios = lazy(() => import('./pages/Precios'));
const Desarrollo = lazy(() => import('./pages/Desarrollo'));
const Privacidad = lazy(() => import('./pages/privacidad'));
const Terminos = lazy(() => import('./pages/terminos'));
const Cookies = lazy(() => import('./pages/cookies'));

function PageFallback() {
  return (
    <div className="min-h-screen bg-cultiva-bg flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cultiva-green/20 border-t-cultiva-green rounded-full animate-spin" />
    </div>
  );
}

/*
  React Router no vuelve arriba al cambiar de página: si estabas abajo en el home
  y entrás a otra página más corta, el navegador te deja al final (en el footer).
  Esto sube al inicio en cada cambio de ruta. Si la URL trae un ancla (/#apps)
  no hace nada: de eso se encarga el Navbar.
*/
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/ejercicios/:categoriaSlug" element={<Categoria />} />
          <Route path="/ejercicios/:categoriaSlug/:subcategoriaSlug" element={<Subcategoria />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/desarrollo" element={<Desarrollo />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Suspense>
    </>
  );
}