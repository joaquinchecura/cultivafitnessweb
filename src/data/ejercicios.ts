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
    slug: "Movilidad consciente",
    titulo: "Movilidad Consciente",
    subtitulo: "Mejora tu control corporal",
    descripcion: "Ejercicios diseñados para mejorar la conexión mente-cuerpo y el control motor.",
    subcategorias: [
      {
        slug: "coordinacion",
        nombre: "Coordinación",
        ejercicios: [
          {
            nombre: "Coordinación brazo y pierna",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Coordinación brazo y pierna.jpeg",
            descripcion: "Ejercicio de coordinación brazo y pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Escalera de coordinación",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Escalera de coordinación.jpeg",
            descripcion: "Ejercicio de escalera de coordinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Marcha coordinada",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Marcha coordinada.jpeg",
            descripcion: "Ejercicio de marcha coordinada para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso atrás con brazos coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso atrás con brazos coordinados.jpeg",
            descripcion: "Ejercicio de paso atrás con brazos coordinados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso direccional con alcance",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso direccional con alcance.jpeg",
            descripcion: "Ejercicio de paso direccional con alcance para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso lateral alternado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral alternado.jpeg",
            descripcion: "Ejercicio de paso lateral alternado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Paso lateral cruzado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral cruzado.jpeg",
            descripcion: "Ejercicio de paso lateral cruzado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pasos adelante y atrás",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos adelante y atrás.jpeg",
            descripcion: "Ejercicio de pasos adelante y atrás para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pasos laterales rápidos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos laterales rápidos.jpeg",
            descripcion: "Ejercicio de pasos laterales rápidos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rodillas altas coordinación",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Rodillas altas coordinación.jpeg",
            descripcion: "Ejercicio de rodillas altas coordinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos coordinados.jpeg",
            descripcion: "Ejercicio de saltos coordinados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos laterales",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos laterales.jpeg",
            descripcion: "Ejercicio de saltos laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subir y bajar step en 4 tiempos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Subir y bajar step en 4 tiempos.jpeg",
            descripcion: "Ejercicio de subir y bajar step en 4 tiempos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Tocar rodilla con codo opuesto",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar Rodilla con Codo opuesto.jpeg",
            descripcion: "Ejercicio de tocar rodilla con codo opuesto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Tocar punta de pie",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar punta de pie.jpeg",
            descripcion: "Ejercicio de tocar punta de pie para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "movilidad-articular",
        nombre: "Movilidad Articular",
        ejercicios: [
          {
            nombre: "Apertura de cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Apertura de cadera.jpeg",
            descripcion: "Ejercicio de apertura de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Balanceo de pierna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Balanceo de pierna.jpeg",
            descripcion: "Ejercicio de balanceo de pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Círculos de rodillas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de Rodillas.jpeg",
            descripcion: "Ejercicio de círculos de rodillas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Círculos de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de hombros.jpeg",
            descripcion: "Ejercicio de círculos de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensiones de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Extensiones de columna.jpeg",
            descripcion: "Ejercicio de extensiones de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo extensión de tobillo",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Flexo extensión de Tobillo.jpeg",
            descripcion: "Ejercicio de flexo extensión de tobillo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Gato vaca",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Gato vaca.jpeg",
            descripcion: "Ejercicio de gato vaca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad de cadera en sentadilla",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cadera en sentadilla.jpeg",
            descripcion: "Ejercicio de movilidad de cadera en sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad de cuello",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cuello.jpeg",
            descripcion: "Ejercicio de movilidad de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Ondulaciones de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Ondulaciones de columna.jpeg",
            descripcion: "Ejercicio de ondulaciones de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones completas de cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones completas de cadera.jpeg",
            descripcion: "Ejercicio de rotaciones completas de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones de hombros.jpeg",
            descripcion: "Ejercicio de rotaciones de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones externas de cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones externas de cadera.jpeg",
            descripcion: "Ejercicio de rotaciones externas de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones torácicas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones torácicas.jpeg",
            descripcion: "Ejercicio de rotaciones torácicas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación completa de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación completa de hombros.jpeg",
            descripcion: "Ejercicio de rotación completa de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de columna.jpeg",
            descripcion: "Ejercicio de rotación de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de hombros con banda",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de hombros con banda.jpeg",
            descripcion: "Ejercicio de rotación de hombros con banda para mejorar tu rendimiento físico.",
          }
        ]
      }
    ],
  },
  {
    slug: "Fuerza",
    titulo: "Fuerza",
    subtitulo: "Construye músculo y estabilidad",
    descripcion: "Entrenamiento de fuerza para desarrollar masa muscular y estabilidad articular.",
    subcategorias: [
      {
        slug: "core",
        nombre: "Core",
        ejercicios: [
          {
            nombre: "Abdominales con rotaciones",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales con rotaciones.jpeg",
            descripcion: "Ejercicio de abdominales con rotaciones para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales con rueda",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales con rueda.jpeg",
            descripcion: "Ejercicio de abdominales con rueda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales cortos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales cortos.jpeg",
            descripcion: "Ejercicio de abdominales cortos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales en v",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales en V.jpeg",
            descripcion: "Ejercicio de abdominales en v para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales inferiores",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales inferiores.jpeg",
            descripcion: "Ejercicio de abdominales inferiores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales isométricos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales isométricos.jpeg",
            descripcion: "Ejercicio de abdominales isométricos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Abdominales rodillas al pecho",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales rodillas al pecho.jpeg",
            descripcion: "Ejercicio de abdominales rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Adominales rotaciones con banda",
            imagen: "/images/ejercicios/Fuerza/core/Adominales rotaciones con banda.jpeg",
            descripcion: "Ejercicio de adominales rotaciones con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicho muerto",
            imagen: "/images/ejercicios/Fuerza/core/Bicho muerto.jpeg",
            descripcion: "Ejercicio de bicho muerto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bird dog",
            imagen: "/images/ejercicios/Fuerza/core/Bird dog.jpeg",
            descripcion: "Ejercicio de bird dog para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones de piernas",
            imagen: "/images/ejercicios/Fuerza/core/Elevaciones de piernas.jpeg",
            descripcion: "Ejercicio de elevaciones de piernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones de rodillas",
            imagen: "/images/ejercicios/Fuerza/core/Elevaciones de rodillas.jpeg",
            descripcion: "Ejercicio de elevaciones de rodillas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pies a la barra",
            imagen: "/images/ejercicios/Fuerza/core/Pies a la barra.jpeg",
            descripcion: "Ejercicio de pies a la barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha con hombros",
            imagen: "/images/ejercicios/Fuerza/core/Plancha con hombros.jpeg",
            descripcion: "Ejercicio de plancha con hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha frontal",
            imagen: "/images/ejercicios/Fuerza/core/Plancha frontal.jpeg",
            descripcion: "Ejercicio de plancha frontal para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha lateral",
            imagen: "/images/ejercicios/Fuerza/core/Plancha lateral.jpeg",
            descripcion: "Ejercicio de plancha lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones con polea",
            imagen: "/images/ejercicios/Fuerza/core/Rotaciones con polea.jpeg",
            descripcion: "Ejercicio de rotaciones con polea para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "fullbody",
        nombre: "Full Body",
        ejercicios: [
          {
            nombre: "Arranque de potencia",
            imagen: "/images/ejercicios/Fuerza/fullbody/Arranque de potencia.jpeg",
            descripcion: "Ejercicio de arranque de potencia para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Burpees",
            imagen: "/images/ejercicios/Fuerza/fullbody/Burpees.jpeg",
            descripcion: "Ejercicio de burpees para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata con carga",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata con carga.jpeg",
            descripcion: "Ejercicio de caminata con carga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata de oso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata de Oso.jpeg",
            descripcion: "Ejercicio de caminata de oso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata de granjero",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata de granjero.jpeg",
            descripcion: "Ejercicio de caminata de granjero para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Cargada y empuje vertical",
            imagen: "/images/ejercicios/Fuerza/fullbody/Cargada y empuje vertical.jpeg",
            descripcion: "Ejercicio de cargada y empuje vertical para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevación de carga",
            imagen: "/images/ejercicios/Fuerza/fullbody/Elevación de carga.jpeg",
            descripcion: "Ejercicio de elevación de carga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje vertical con mancuerna",
            imagen: "/images/ejercicios/Fuerza/fullbody/Empuje vertical con mancuerna.jpeg",
            descripcion: "Ejercicio de empuje vertical con mancuerna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Macho man",
            imagen: "/images/ejercicios/Fuerza/fullbody/Macho man.jpeg",
            descripcion: "Ejercicio de macho man para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Pararse con peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Pararse con peso.jpeg",
            descripcion: "Ejercicio de pararse con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo en plancha",
            imagen: "/images/ejercicios/Fuerza/fullbody/Remo en plancha.jpeg",
            descripcion: "Ejercicio de remo en plancha para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rodillas al pecho",
            imagen: "/images/ejercicios/Fuerza/fullbody/Rodillas al pecho.jpeg",
            descripcion: "Ejercicio de rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla con empuje vertical",
            imagen: "/images/ejercicios/Fuerza/fullbody/Sentadilla con empuje vertical.jpeg",
            descripcion: "Ejercicio de sentadilla con empuje vertical para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla con lanzamiento de pelota",
            imagen: "/images/ejercicios/Fuerza/fullbody/Sentadilla con lanzamiento de pelota.jpeg",
            descripcion: "Ejercicio de sentadilla con lanzamiento de pelota para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas al step con peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Subidas al step con peso.jpeg",
            descripcion: "Ejercicio de subidas al step con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing con pesa alternado",
            imagen: "/images/ejercicios/Fuerza/fullbody/Swing con pesa alternado.jpeg",
            descripcion: "Ejercicio de swing con pesa alternado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing con pesa rusa",
            imagen: "/images/ejercicios/Fuerza/fullbody/Swing con pesa rusa.jpeg",
            descripcion: "Ejercicio de swing con pesa rusa para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster con barra",
            imagen: "/images/ejercicios/Fuerza/fullbody/Thruster con barra.jpeg",
            descripcion: "Ejercicio de thruster con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster con mancuerna",
            imagen: "/images/ejercicios/Fuerza/fullbody/Thruster con mancuerna.jpeg",
            descripcion: "Ejercicio de thruster con mancuerna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancada con rotación",
            imagen: "/images/ejercicios/Fuerza/fullbody/Zancada con rotación.jpeg",
            descripcion: "Ejercicio de zancada con rotación para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "tren-inferior",
        nombre: "Tren Inferior",
        ejercicios: [
          {
            nombre: "Abducción de cadera",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Abducción de cadera.jpeg",
            descripcion: "Ejercicio de abducción de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata lateral con banda",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Caminata lateral con banda.jpeg",
            descripcion: "Ejercicio de caminata lateral con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Cuádriceps en máquina",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Cuádriceps en máquina.jpeg",
            descripcion: "Ejercicio de cuádriceps en máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevación de talones parado",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Elevación de talones parado.jpeg",
            descripcion: "Ejercicio de elevación de talones parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevación de talones sentado",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Elevación de talones sentado.jpeg",
            descripcion: "Ejercicio de elevación de talones sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje de cadera",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Empuje de cadera.jpeg",
            descripcion: "Ejercicio de empuje de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Isquiotibiales con máquina",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Isquiotibiales con máquina.jpeg",
            descripcion: "Ejercicio de isquiotibiales con máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Peso muerto convencional",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Peso muerto convencional.jpeg",
            descripcion: "Ejercicio de peso muerto convencional para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Peso muerto rumano",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Peso muerto rumano.jpeg",
            descripcion: "Ejercicio de peso muerto rumano para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Prensa de piernas",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Prensa de piernas.jpeg",
            descripcion: "Ejercicio de prensa de piernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puente de glúteos",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Puente de Glúteos.jpeg",
            descripcion: "Ejercicio de puente de glúteos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla búlgara",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla búlgara.jpeg",
            descripcion: "Ejercicio de sentadilla búlgara para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla con barra",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla con barra.jpeg",
            descripcion: "Ejercicio de sentadilla con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla globet",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla globet.jpeg",
            descripcion: "Ejercicio de sentadilla globet para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla sumo",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla sumo.jpeg",
            descripcion: "Ejercicio de sentadilla sumo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Sentadilla.jpeg",
            descripcion: "Ejercicio de sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas al cajón",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Subidas al cajón.jpeg",
            descripcion: "Ejercicio de subidas al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing con pesa",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Swing con pesa.jpeg",
            descripcion: "Ejercicio de swing con pesa para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancadas caminando",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Zancadas caminando.jpeg",
            descripcion: "Ejercicio de zancadas caminando para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Zancadas con mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren inferior/Zancadas con mancuernas.jpeg",
            descripcion: "Ejercicio de zancadas con mancuernas para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "tren-superior",
        nombre: "Tren Superior",
        ejercicios: [
          {
            nombre: "Bíceps con barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Bíceps con barra.jpeg",
            descripcion: "Ejercicio de bíceps con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bíceps con mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Bíceps con mancuernas.jpeg",
            descripcion: "Ejercicio de bíceps con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Dominadas asistidas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Dominadas asistidas.jpeg",
            descripcion: "Ejercicio de dominadas asistidas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Dominadas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Dominadas.jpeg",
            descripcion: "Ejercicio de dominadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones laterales con peso",
            imagen: "/images/ejercicios/Fuerza/tren superior/Elevaciones laterales con peso.jpeg",
            descripcion: "Ejercicio de elevaciones laterales con peso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión de tríceps con polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/Extensión de Tríceps con polea.jpeg",
            descripcion: "Ejercicio de extensión de tríceps con polea para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo extensión de pecho",
            imagen: "/images/ejercicios/Fuerza/tren superior/Flexo extensión de pecho.jpeg",
            descripcion: "Ejercicio de flexo extensión de pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Fondos en paralelas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Fondos en paralelas.jpeg",
            descripcion: "Ejercicio de fondos en paralelas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Jalones a la cara",
            imagen: "/images/ejercicios/Fuerza/tren superior/Jalones a la cara.jpeg",
            descripcion: "Ejercicio de jalones a la cara para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Patada de tríceps",
            imagen: "/images/ejercicios/Fuerza/tren superior/Patada de Tríceps.jpeg",
            descripcion: "Ejercicio de patada de tríceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press de hombros con mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de hombros con mancuernas.jpeg",
            descripcion: "Ejercicio de press de hombros con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press de pecho con mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de pecho con mancuernas.jpeg",
            descripcion: "Ejercicio de press de pecho con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press de pecho inclinado",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press de pecho inclinado.jpeg",
            descripcion: "Ejercicio de press de pecho inclinado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press en banco inclinado",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press en banco inclinado.jpeg",
            descripcion: "Ejercicio de press en banco inclinado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Press militar con barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Press militar con barra.jpeg",
            descripcion: "Ejercicio de press militar con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo bajo con polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo bajo con polea.jpeg",
            descripcion: "Ejercicio de remo bajo con polea para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo con barra",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo con barra.jpeg",
            descripcion: "Ejercicio de remo con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo con mancuernas",
            imagen: "/images/ejercicios/Fuerza/tren superior/Remo con mancuernas.jpeg",
            descripcion: "Ejercicio de remo con mancuernas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Vuelos posteriores",
            imagen: "/images/ejercicios/Fuerza/tren superior/Vuelos posteriores.jpeg",
            descripcion: "Ejercicio de vuelos posteriores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Jalón con polea",
            imagen: "/images/ejercicios/Fuerza/tren superior/jalón con polea.jpeg",
            descripcion: "Ejercicio de jalón con polea para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "fuerza-isométrica",
        nombre: "Fuerza Isométrica",
        ejercicios: [
          {
            nombre: "Colgado sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Colgado sin movimiento.jpeg",
            descripcion: "Ejercicio de colgado sin movimiento para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Equilibrio en una pierna",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Equilibrio en una pierna.jpeg",
            descripcion: "Ejercicio de equilibrio en una pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estocada unilateral sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Estocada unilateral sin movimiento.jpeg",
            descripcion: "Ejercicio de estocada unilateral sin movimiento para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo extensión sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Flexo-extensión sin movimiento.jpeg",
            descripcion: "Ejercicio de flexo extensión sin movimiento para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Gemelos isométrico",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Gemelos isométrico.jpeg",
            descripcion: "Ejercicio de gemelos isométrico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha con rodillas flexionadas",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Plancha con rodillas flexionadas.jpeg",
            descripcion: "Ejercicio de plancha con rodillas flexionadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha en posición invertida",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Plancha en posición invertida.jpeg",
            descripcion: "Ejercicio de plancha en posición invertida para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha frontal",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Plancha frontal.jpeg",
            descripcion: "Ejercicio de plancha frontal para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha lateral",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Plancha lateral.jpeg",
            descripcion: "Ejercicio de plancha lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puente sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Puente sin movimiento.jpeg",
            descripcion: "Ejercicio de puente sin movimiento para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de columna estática",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Rotación de columna estática.jpeg",
            descripcion: "Ejercicio de rotación de columna estática para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla contra pared",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Sentadilla contra pared.jpeg",
            descripcion: "Ejercicio de sentadilla contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Sentadilla sin movimiento.jpeg",
            descripcion: "Ejercicio de sentadilla sin movimiento para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sostener peso estático",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Sostener peso estático.jpeg",
            descripcion: "Ejercicio de sostener peso estático para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Supensión sin movimiento",
            imagen: "/images/ejercicios/Fuerza/fuerza isométrica/Supensión sin movimiento.jpeg",
            descripcion: "Ejercicio de supensión sin movimiento para mejorar tu rendimiento físico.",
          }
        ]
      }
    ],
  },
  {
    slug: "Metabólico y condicionamiento",
    titulo: "Metabólico y condicionamiento",
    subtitulo: "Incrementa tu resistencia y energía",
    descripcion: "Trabajo cardiovascular y metabólico para mejorar la capacidad aeróbica y anaeróbica.",
    subcategorias: [
      {
        slug: "Cardio-continuo",
        nombre: "Cardio Continuo",
        ejercicios: [
          {
            nombre: "Aeróbicos de bajo impacto",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Aeróbicos de bajo impacto.jpeg",
            descripcion: "Ejercicio de aeróbicos de bajo impacto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicicleta de aire",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Bicicleta de aire.jpeg",
            descripcion: "Ejercicio de bicicleta de aire para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bicicleta fija",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Bicicleta fija.jpeg",
            descripcion: "Ejercicio de bicicleta fija para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Camina en escalador",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Camina en escalador.jpeg",
            descripcion: "Ejercicio de camina en escalador para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata con inclinación",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Caminata con inclinación.jpeg",
            descripcion: "Ejercicio de caminata con inclinación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Caminata rápida",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Caminata rápida.jpeg",
            descripcion: "Ejercicio de caminata rápida para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elíptico",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Elíptico.jpeg",
            descripcion: "Ejercicio de elíptico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Escaleras",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Escaleras.jpeg",
            descripcion: "Ejercicio de escaleras para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo ergométrico",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Remo ergométrico.jpeg",
            descripcion: "Ejercicio de remo ergométrico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remos con máquina",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Remos con máquina.jpeg",
            descripcion: "Ejercicio de remos con máquina para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos con soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Saltos con soga.jpeg",
            descripcion: "Ejercicio de saltos con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Trote con intervalos",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Trote con intervalos.jpeg",
            descripcion: "Ejercicio de trote con intervalos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Trote continuo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/Cardio continuo/Trote continuo.jpeg",
            descripcion: "Ejercicio de trote continuo para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "HIIT",
        nombre: "HIIT",
        ejercicios: [
          {
            nombre: "Burpees",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Burpees.jpeg",
            descripcion: "Ejercicio de burpees para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Complex con barra",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Complex con barra.jpeg",
            descripcion: "Ejercicio de complex con barra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevaciones de talones",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Elevaciones de talones.jpeg",
            descripcion: "Ejercicio de elevaciones de talones para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje de trineo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Empuje de trineo.jpeg",
            descripcion: "Ejercicio de empuje de trineo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estocadas laterales",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Estocadas laterales.jpeg",
            descripcion: "Ejercicio de estocadas laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo extensión con toque de hombros",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Flexo extensión con toque de hombros.jpeg",
            descripcion: "Ejercicio de flexo extensión con toque de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Golpes con la soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Golpes con la soga.jpeg",
            descripcion: "Ejercicio de golpes con la soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Marcha con rodillas elevadas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Marcha con rodillas elevadas.jpeg",
            descripcion: "Ejercicio de marcha con rodillas elevadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Medio burpee",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Medio burpee.jpeg",
            descripcion: "Ejercicio de medio burpee para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Ondas con soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Ondas con soga.jpeg",
            descripcion: "Ejercicio de ondas con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha con paso lateral",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Plancha con paso lateral.jpeg",
            descripcion: "Ejercicio de plancha con paso lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha con rodillas al pecho",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Plancha con rodillas al pecho.jpeg",
            descripcion: "Ejercicio de plancha con rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Remo en plancha",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Remo en plancha.jpeg",
            descripcion: "Ejercicio de remo en plancha para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Salto hacia delante",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Salto hacia delante.jpeg",
            descripcion: "Ejercicio de salto hacia delante para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos al cajón",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos al cajón.jpeg",
            descripcion: "Ejercicio de saltos al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos con rodillas al pecho",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos con rodillas al pecho.jpeg",
            descripcion: "Ejercicio de saltos con rodillas al pecho para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos con soga",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos con soga.jpeg",
            descripcion: "Ejercicio de saltos con soga para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos con zancadas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos con zancadas.jpeg",
            descripcion: "Ejercicio de saltos con zancadas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos desde sentadilla",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos desde sentadilla.jpeg",
            descripcion: "Ejercicio de saltos desde sentadilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Saltos laterales",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Saltos laterales.jpeg",
            descripcion: "Ejercicio de saltos laterales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla contra pared",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Sentadilla contra pared.jpeg",
            descripcion: "Ejercicio de sentadilla contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadillas con brazos elevados",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Sentadillas con brazos elevados.jpeg",
            descripcion: "Ejercicio de sentadillas con brazos elevados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Skipping a",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Skipping A.jpeg",
            descripcion: "Ejercicio de skipping a para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint con intervalos cortos",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Sprint con intervalos cortos.jpeg",
            descripcion: "Ejercicio de sprint con intervalos cortos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint cortos en pendiente",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Sprint cortos en pendiente.jpeg",
            descripcion: "Ejercicio de sprint cortos en pendiente para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sprint en airbike",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Sprint en airbike.jpeg",
            descripcion: "Ejercicio de sprint en airbike para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Step jacks",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Step jacks.jpeg",
            descripcion: "Ejercicio de step jacks para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas al cajón",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Subidas al cajón.jpeg",
            descripcion: "Ejercicio de subidas al cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Swing con balanceo",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Swing con balanceo.jpeg",
            descripcion: "Ejercicio de swing con balanceo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thruster",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Thruster.jpeg",
            descripcion: "Ejercicio de thruster para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Thrusters con cargada de mancuernas",
            imagen: "/images/ejercicios/Metabólico y condicionamiento/HIIT/Thrusters con cargada de mancuernas.jpeg",
            descripcion: "Ejercicio de thrusters con cargada de mancuernas para mejorar tu rendimiento físico.",
          }
        ]
      }
    ],
  },
  {
    slug: "Regulación y descarga",
    titulo: "Regulación y descarga",
    subtitulo: "Relaja el cuerpo y reduce el estrés",
    descripcion: "Técnicas de recuperación activa y relajación para el bienestar general.",
    subcategorias: [
      {
        slug: "Stretching-pasivo",
        nombre: "Stretching Pasivo",
        ejercicios: [
          {
            nombre: "Estiramiento de pantorrilla",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estirameinto de pantorrilla.jpeg",
            descripcion: "Ejercicio de estirameinto de pantorrilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de adductores",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de adductores.jpeg",
            descripcion: "Ejercicio de estiramiento de adductores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de bíceps en pared",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de bíceps en pared.jpeg",
            descripcion: "Ejercicio de estiramiento de bíceps en pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de bíceps posterior",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de bíceps posterior.jpeg",
            descripcion: "Ejercicio de estiramiento de bíceps posterior para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de cadera arrodillado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de cadera arrodillado.jpeg",
            descripcion: "Ejercicio de estiramiento de cadera arrodillado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de cadera sentado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de cadera sentado.jpeg",
            descripcion: "Ejercicio de estiramiento de cadera sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de cuádriceps arrodillado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de cuádriceps arrodillado.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps arrodillado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de cuádriceps parado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de cuádriceps parado.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de cuádriceps",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de cuádriceps.jpeg",
            descripcion: "Ejercicio de estiramiento de cuádriceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de dorsales con abrazo",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de dorsales con abrazo.jpeg",
            descripcion: "Ejercicio de estiramiento de dorsales con abrazo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de dorsales",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de dorsales.jpeg",
            descripcion: "Ejercicio de estiramiento de dorsales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de gemelos en step",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de gemelos en step.jpeg",
            descripcion: "Ejercicio de estiramiento de gemelos en step para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de gemelos",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de gemelos.jpeg",
            descripcion: "Ejercicio de estiramiento de gemelos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de glúteos acostado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de glúteos acostado.jpeg",
            descripcion: "Ejercicio de estiramiento de glúteos acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de glúteos",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de glúteos.jpeg",
            descripcion: "Ejercicio de estiramiento de glúteos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de hombros contra pared",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de hombros contra pared.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de hombros cruzado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de hombros cruzado.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros cruzado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de hombros sobre cabeza",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de hombros sobre cabeza.jpeg",
            descripcion: "Ejercicio de estiramiento de hombros sobre cabeza para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de isquiotibiales",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de isquiotibiales.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibiales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de isquiotibilaes con banda",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de isquiotibilaes con banda.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de isquiotibilaes parado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de isquiotibilaes parado.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes parado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de isquiotibilaes sentado",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de isquiotibilaes sentado.jpeg",
            descripcion: "Ejercicio de estiramiento de isquiotibilaes sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de pecho contra pared",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de pecho contra pared.jpeg",
            descripcion: "Ejercicio de estiramiento de pecho contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de pecho contra puerta",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de pecho contra puerta.jpeg",
            descripcion: "Ejercicio de estiramiento de pecho contra puerta para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de pectorales",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de pectorales.jpeg",
            descripcion: "Ejercicio de estiramiento de pectorales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de tibiales",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de tibiales.jpeg",
            descripcion: "Ejercicio de estiramiento de tibiales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de tríceps trasnuca",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de tríceps trasnuca.jpeg",
            descripcion: "Ejercicio de estiramiento de tríceps trasnuca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de tríceps",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de tríceps.jpeg",
            descripcion: "Ejercicio de estiramiento de tríceps para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento lateral de columna",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento lateral de columna.jpeg",
            descripcion: "Ejercicio de estiramiento lateral de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento lateral de cuello",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento lateral de cuello.jpeg",
            descripcion: "Ejercicio de estiramiento lateral de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento lumbar con rotación",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento lumbar con rotación.jpeg",
            descripcion: "Ejercicio de estiramiento lumbar con rotación para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento lumbar",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento lumbar.jpeg",
            descripcion: "Ejercicio de estiramiento lumbar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexo extensión de cuello",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Flexo extensión de cuello.jpeg",
            descripcion: "Ejercicio de flexo extensión de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Postura de descanso",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Postura de descanso.jpeg",
            descripcion: "Ejercicio de postura de descanso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de cuello",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Rotación de cuello.jpeg",
            descripcion: "Ejercicio de rotación de cuello para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "Movimiento-restaurativo",
        nombre: "Movimiento Restaurativo",
        ejercicios: [
        ],
      },
      {
        slug: "Conciencia-corporal",
        nombre: "Conciencia Corporal",
        ejercicios: [
        ],
      },
      {
        slug: "Respiración",
        nombre: "Respiración",
        ejercicios: [
        ]
      }
    ],
  },
  {
    slug: "rehabilitacion-correctivos",
    titulo: "Rehabilitación y correctivos",
    subtitulo: "Recupera movilidad y previene lesiones",
    descripcion: "Ejercicios terapéuticos para la recuperación y prevención de lesiones.",
    subcategorias: [
      {
        slug: "cuello",
        nombre: "Cuello",
        ejercicios: [
        ],
      },
      {
        slug: "hombros",
        nombre: "Hombros",
        ejercicios: [
        ],
      },
      {
        slug: "escapulas",
        nombre: "Escápulas",
        ejercicios: [
        ],
      },
      {
        slug: "columna-toracica",
        nombre: "Columna Torácica",
        ejercicios: [
        ],
      },
      {
        slug: "columna-lumbar",
        nombre: "Columna Lumbar",
        ejercicios: [
        ],
      },
      {
        slug: "cadera",
        nombre: "Cadera",
        ejercicios: [
        ],
      },
      {
        slug: "rodillas",
        nombre: "Rodillas",
        ejercicios: [
        ],
      },
      {
        slug: "tobillo",
        nombre: "Tobillo",
        ejercicios: [
        ]
      }
    ]
  }
];
