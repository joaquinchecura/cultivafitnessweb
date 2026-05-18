import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Ejercicios from './pages/Ejercicios'
import Categoria from './pages/Categoria'
import Subcategoria from './pages/Subcategoria'
import Privacidad from './pages/privacidad'
import Terminos from './pages/terminos'
import Cookies from './pages/cookies'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ejercicios" element={<Ejercicios />} />
      <Route path="/ejercicios/:categoriaSlug" element={<Categoria />} />
      <Route path="/ejercicios/:categoriaSlug/:subcategoriaSlug" element={<Subcategoria />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  )
}