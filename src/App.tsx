import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Ejercicios from './pages/Ejercicios'
import Categoria from './pages/Categoria'
import Subcategoria from './pages/Subcategoria'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ejercicios" element={<Ejercicios />} />
      <Route path="/ejercicios/:categoriaSlug" element={<Categoria />} />
      <Route path="/ejercicios/:categoriaSlug/:subcategoriaSlug" element={<Subcategoria />} />
    </Routes>
  )
}