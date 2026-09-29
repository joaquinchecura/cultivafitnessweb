// src/App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';

const Ejercicios = lazy(() => import('./pages/Ejercicios'));
const Categoria = lazy(() => import('./pages/Categoria'));
const Subcategoria = lazy(() => import('./pages/Subcategoria'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
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

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/ejercicios/:categoriaSlug" element={<Categoria />} />
        <Route path="/ejercicios/:categoriaSlug/:subcategoriaSlug" element={<Subcategoria />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Suspense>
  );
}