export interface Ejercicio {
    nombre: string;
    imagen: string;
    descripcion: string;
  }
  
  export interface Subcategoria {
    slug: string;
    nombre: string;
    ejercicios: Ejercicio[];
  }
  
  export interface Categoria {
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    subcategorias: Subcategoria[];
  }
  
  export const categorias: Categoria[] = [
    {
      slug: 'movilidad-consciente',
      titulo: 'Movilidad Consciente',
      subtitulo: 'Mejora tu control corporal',
      descripcion: 'Ejercicios diseñados para mejorar la conexión mente-cuerpo y el control motor.',
      subcategorias: [
        {
          slug: 'coordinacion',
          nombre: 'Coordinación',
          ejercicios: [
            {
              nombre: 'Coordinación Brazo y Pierna',
              imagen: '/images/ejercicios/Movilidad Consciente/coordinacion/Coordinación brazo y pierna.jpeg',
              descripcion: 'Ejercicio para mejorar la sincronización entre extremidades superiores e inferiores.',
            },
            {
              nombre: 'Escalera de Coordinación',
              imagen: '/images/ejercicios/Movilidad Consciente/coordinacion/Escalera de coordinación.jpeg',
              descripcion: 'Trabajo de pies y agilidad con escalera de velocidad.',
            },
            {
              nombre: 'Marcha Coordinada',
              imagen: '/images/ejercicios/Movilidad Consciente/coordinacion/Marcha coordinada.jpeg',
              descripcion: 'Ejercicio de marcha controlada para mejorar el equilibrio.',
            },
          ],
        },
        {
          slug: 'movilidad-articular',
          nombre: 'Movilidad Articular',
          ejercicios: [
            {
              nombre: 'Apertura de Cadera',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Apertura de cadera.jpeg',
              descripcion: 'Ejercicio para mejorar la movilidad de la cadera en el plano frontal.',
            },
            {
              nombre: 'Balanceo de Pierna',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Balanceo de pierna.jpeg',
              descripcion: 'Movimiento dinámico para calentar caderas y mejorar el balance.',
            },
            {
              nombre: 'Círculos de Hombros',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de hombros.jpeg',
              descripcion: 'Movilización articular de los hombros en todas las direcciones.',
            },
            {
              nombre: 'Círculos de Rodillas',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de Rodillas.jpeg',
              descripcion: 'Movilidad articular de rodillas para calentamiento.',
            },
            {
              nombre: 'Extensiones de Columna',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Extensiones de columna.jpeg',
              descripcion: 'Movilización de la columna vertebral en extensión.',
            },
            {
              nombre: 'Flexo Extensión de Tobillo',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Flexo extensión de Tobillo.jpeg',
              descripcion: 'Movilidad articular del tobillo en flexión y extensión.',
            },
            {
              nombre: 'Gato Vaca',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Gato vaca.jpeg',
              descripcion: 'Movilización de la columna en flexión y extensión.',
            },
            {
              nombre: 'Movilidad de Cadera en Sentadilla',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cadera en sentadilla.jpeg',
              descripcion: 'Trabajo de profundidad y movilidad de cadera en sentadilla.',
            },
            {
              nombre: 'Movilidad de Cuello',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cuello.jpeg',
              descripcion: 'Movilización articular cervical en todos los planos.',
            },
            {
              nombre: 'Ondulaciones de Columna',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Ondulaciones de columna.jpeg',
              descripcion: 'Movimiento ondulatorio de la columna para mejorar la movilidad.',
            },
            {
              nombre: 'Rotación Completa de Hombros',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación completa de hombros.jpeg',
              descripcion: 'Movilidad articular completa del hombro.',
            },
            {
              nombre: 'Rotación de Columna',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de columna.jpeg',
              descripcion: 'Movilización de la columna en rotación.',
            },
            {
              nombre: 'Rotación de Hombros con Banda',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de hombros con banda.jpeg',
              descripcion: 'Movilidad de hombros asistida con banda elástica.',
            },
            {
              nombre: 'Rotaciones Completas de Cadera',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones completas de cadera.jpeg',
              descripcion: 'Movilidad articular completa de la cadera.',
            },
            {
              nombre: 'Rotaciones de Hombros',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones de hombros.jpeg',
              descripcion: 'Movilización dinámica de los hombros.',
            },
            {
              nombre: 'Rotaciones Externas de Cadera',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones externas de cadera.jpeg',
              descripcion: 'Trabajo de rotación externa de la cadera.',
            },
            {
              nombre: 'Rotaciones Torácicas',
              imagen: '/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones torácicas.jpeg',
              descripcion: 'Movilización de la columna torácica en rotación.',
            },
          ],
        },
      ],
    },
    {
      slug: 'fuerza',
      titulo: 'Fuerza',
      subtitulo: 'Construye músculo y estabilidad',
      descripcion: 'Entrenamiento de fuerza para desarrollar masa muscular y estabilidad articular.',
      subcategorias: [
        { slug: 'core', nombre: 'Core', ejercicios: [] },
        { slug: 'fullbody', nombre: 'Full Body', ejercicios: [] },
        { slug: 'tren-inferior', nombre: 'Tren Inferior', ejercicios: [] },
        { slug: 'tren-superior', nombre: 'Tren Superior', ejercicios: [] },
        { slug: 'fuerza-isometrica', nombre: 'Fuerza Isométrica', ejercicios: [] },
      ],
    },
    {
      slug: 'metabolico-condicionamiento',
      titulo: 'Metabólico / Condicionamiento',
      subtitulo: 'Incrementa tu resistencia y energía',
      descripcion: 'Trabajo cardiovascular y metabólico para mejorar la capacidad aeróbica y anaeróbica.',
      subcategorias: [
        { slug: 'cardio-continuo', nombre: 'Cardio Continuo', ejercicios: [] },
        { slug: 'hiit', nombre: 'HIIT', ejercicios: [] },
      ],
    },
    {
      slug: 'regulacion-descarga',
      titulo: 'Regulación y Descarga',
      subtitulo: 'Relaja el cuerpo y reduce el estrés',
      descripcion: 'Técnicas de recuperación activa y relajación para el bienestar general.',
      subcategorias: [
        { slug: 'stretching-pasivo', nombre: 'Stretching Pasivo', ejercicios: [] },
        { slug: 'movimiento-restaurativo', nombre: 'Movimiento Restaurativo', ejercicios: [] },
        { slug: 'conciencia-corporal', nombre: 'Conciencia Corporal', ejercicios: [] },
        { slug: 'respiracion', nombre: 'Respiración', ejercicios: [] },
      ],
    },
    {
      slug: 'rehabilitacion-correctivos',
      titulo: 'Rehabilitación / Correctivos',
      subtitulo: 'Recupera movilidad y previene lesiones',
      descripcion: 'Ejercicios terapéuticos para la recuperación y prevención de lesiones.',
      subcategorias: [
        { slug: 'cuello', nombre: 'Cuello', ejercicios: [] },
        { slug: 'hombros', nombre: 'Hombros', ejercicios: [] },
        { slug: 'escapulas', nombre: 'Escápulas', ejercicios: [] },
        { slug: 'columna-toracica', nombre: 'Columna Torácica', ejercicios: [] },
        { slug: 'columna-lumbar', nombre: 'Columna Lumbar', ejercicios: [] },
        { slug: 'cadera', nombre: 'Cadera', ejercicios: [] },
        { slug: 'rodillas', nombre: 'Rodillas', ejercicios: [] },
        { slug: 'tobillo', nombre: 'Tobillo', ejercicios: [] },
      ],
    },
  ];