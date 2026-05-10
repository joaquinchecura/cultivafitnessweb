const fs = require('fs');
const path = require('path');

// Ruta base donde están las imágenes
const BASE_PATH = path.join('public', 'images', 'ejercicios');

// Mapeo de carpetas a nombres de categorías y subcategorías
const CATEGORIAS = {
  "Movilidad Consciente": {
    slug: "Movilidad consciente",
    subtitulo: "Mejora tu control corporal",
    descripcion: "Ejercicios diseñados para mejorar la conexión mente-cuerpo y el control motor.",
    subcategorias: {
      "coordinacion": "Coordinación",
      "movilidad articular": "Movilidad Articular",
    }
  },
  "Fuerza": {
    slug: "Fuerza",
    subtitulo: "Construye músculo y estabilidad",
    descripcion: "Entrenamiento de fuerza para desarrollar masa muscular y estabilidad articular.",
    subcategorias: {
      "core": "Core",
      "fullbody": "Full Body",
      "tren inferior": "Tren Inferior",
      "tren superior": "Tren Superior",
      "fuerza isométrica": "Fuerza Isométrica",
    }
  },
  "Metabólico y condicionamiento": {
    slug: "Metabólico y condicionamiento",
    subtitulo: "Incrementa tu resistencia y energía",
    descripcion: "Trabajo cardiovascular y metabólico para mejorar la capacidad aeróbica y anaeróbica.",
    subcategorias: {
      "Cardio continuo": "Cardio Continuo",
      "HIIT": "HIIT",
    }
  },
  "Regulación y descarga": {
    slug: "Regulación y descarga",
    subtitulo: "Relaja el cuerpo y reduce el estrés",
    descripcion: "Técnicas de recuperación activa y relajación para el bienestar general.",
    subcategorias: {
      "Stretching pasivo": "Stretching Pasivo",
      "Movimiento restaurativo": "Movimiento Restaurativo",
      "Conciencia corporal": "Conciencia Corporal",
      "Respiración": "Respiración",
    }
  },
  "Rehabilitación y correctivos": {
    slug: "Rehabilitación y correctivos",
    subtitulo: "Recupera movilidad y previene lesiones",
    descripcion: "Ejercicios terapéuticos para la recuperación y prevención de lesiones.",
    subcategorias: {
      "cuello": "Cuello",
      "hombros": "Hombros",
      "escapulas": "Escápulas",
      "columna toracica": "Columna Torácica",
      "columna lumbar": "Columna Lumbar",
      "cadera": "Cadera",
      "rodillas": "Rodillas",
      "tobillo": "Tobillo",
    }
  },
};

function limpiarNombreArchivo(nombre) {
  // Quitar extensión
  nombre = path.parse(nombre).name;
  // Reemplazar guiones y underscores por espacios
  nombre = nombre.replace(/[-_]/g, ' ');
  // Solo primera letra mayúscula, resto minúscula
  nombre = nombre.toLowerCase();
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function generarDescripcion(nombre) {
  return `Ejercicio de ${nombre.toLowerCase()} para mejorar tu rendimiento físico.`;
}

function escanearCarpetas() {
  const categoriasResult = [];
  
  for (const [carpetaCategoria, info] of Object.entries(CATEGORIAS)) {
    const categoria = {
      slug: info.slug,
      titulo: carpetaCategoria,
      subtitulo: info.subtitulo,
      descripcion: info.descripcion,
      subcategorias: []
    };
    
    const rutaCategoria = path.join(BASE_PATH, carpetaCategoria);
    
    if (!fs.existsSync(rutaCategoria)) {
      console.log(`⚠️  No existe: ${rutaCategoria}`);
      continue;
    }
    
    for (const [carpetaSub, nombreSub] of Object.entries(info.subcategorias)) {
      const subcategoria = {
        slug: carpetaSub.replace(/\s+/g, '-'),
        nombre: nombreSub,
        ejercicios: []
      };
      
      const rutaSub = path.join(rutaCategoria, carpetaSub);
      
      if (!fs.existsSync(rutaSub)) {
        console.log(`⚠️  No existe: ${rutaSub}`);
        categoria.subcategorias.push(subcategoria);
        continue;
      }
      
      // Escanear archivos de imagen
      const archivos = fs.readdirSync(rutaSub)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort();
      
      for (const archivo of archivos) {
        const nombreEjercicio = limpiarNombreArchivo(archivo);
        const rutaImagen = `/images/ejercicios/${carpetaCategoria}/${carpetaSub}/${archivo}`;
        
        subcategoria.ejercicios.push({
          nombre: nombreEjercicio,
          imagen: rutaImagen,
          descripcion: generarDescripcion(nombreEjercicio)
        });
      }
      
      categoria.subcategorias.push(subcategoria);
    }
    
    categoriasResult.push(categoria);
  }
  
  return categoriasResult;
}

function generarTypeScript(categorias) {
  let lines = [
    'export interface Ejercicio {',
    '  nombre: string;',
    '  imagen: string;',
    '  descripcion: string;',
    '}',
    '',
    'export interface Subcategoria {',
    '  slug: string;',
    '  nombre: string;',
    '  ejercicios: Ejercicio[];',
    '}',
    '',
    'export interface Categoria {',
    '  slug: string;',
    '  titulo: string;',
    '  subtitulo: string;',
    '  descripcion: string;',
    '  subcategorias: Subcategoria[];',
    '}',
    '',
    'export const categorias: Categoria[] = [',
  ];
  
  for (let i = 0; i < categorias.length; i++) {
    const cat = categorias[i];
    lines.push('  {');
    lines.push(`    slug: "${cat.slug}",`);
    lines.push(`    titulo: "${cat.titulo}",`);
    lines.push(`    subtitulo: "${cat.subtitulo}",`);
    lines.push(`    descripcion: "${cat.descripcion}",`);
    lines.push('    subcategorias: [');
    
    for (let j = 0; j < cat.subcategorias.length; j++) {
      const sub = cat.subcategorias[j];
      lines.push('      {');
      lines.push(`        slug: "${sub.slug}",`);
      lines.push(`        nombre: "${sub.nombre}",`);
      lines.push('        ejercicios: [');
      
      for (let k = 0; k < sub.ejercicios.length; k++) {
        const ej = sub.ejercicios[k];
        lines.push('          {');
        lines.push(`            nombre: "${ej.nombre}",`);
        lines.push(`            imagen: "${ej.imagen}",`);
        lines.push(`            descripcion: "${ej.descripcion}",`);
        lines.push(k < sub.ejercicios.length - 1 ? '          },' : '          }');
      }
      
      lines.push(j < cat.subcategorias.length - 1 ? '        ],' : '        ]');
      lines.push(j < cat.subcategorias.length - 1 ? '      },' : '      }');
    }
    
    lines.push(i < categorias.length - 1 ? '    ],' : '    ]');
    lines.push(i < categorias.length - 1 ? '  },' : '  }');
  }
  
  lines.push('];');
  lines.push('');
  
  return lines.join('\n');
}

// EJECUTAR
console.log('🔍 Escaneando carpetas...');
const categorias = escanearCarpetas();

let totalEjercicios = 0;
for (const cat of categorias) {
  for (const sub of cat.subcategorias) {
    totalEjercicios += sub.ejercicios.length;
  }
}

console.log(`\n📊 Resumen:`);
console.log(`   Categorías: ${categorias.length}`);
console.log(`   Subcategorías: ${categorias.reduce((acc, cat) => acc + cat.subcategorias.length, 0)}`);
console.log(`   Ejercicios totales: ${totalEjercicios}`);

console.log('\n📝 Generando TypeScript...');
const codigo = generarTypeScript(categorias);

// Guardar archivo
const outputPath = path.join('src', 'data', 'ejercicios.ts');
fs.writeFileSync(outputPath, codigo, 'utf-8');

console.log(`\n✅ Archivo generado: ${outputPath}`);
console.log(`📏 Tamaño: ${codigo.length} caracteres`);