export interface Ejercicio {
  nombre: string;
  imagen: string;
  imagenCloudinaryId?: string; // opcional: public ID de Cloudinary, cuando ya la subiste
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
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917032/Man_performing_bodyweight_exercise_202609082222_2.jpg",
            descripcion: "Mové lentamente un brazo junto con la pierna contraria. Volvé al centro y repetí hacia el otro lado. Mantené el tronco estable y concentráte en coordinar ambos movimientos sin apurarte.",
          },
          {
            nombre: "Escalera de coordinación",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Escalera de coordinación.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790350918/Man_exercising_with_agility_ladder_20260925123820.jpg",
            descripcion: "Parate frente a la escalera de coordinación. Avanzá colocando los pies dentro de los espacios siguiendo un patrón determinado. Mantené pasos rápidos pero controlados y mirá ocasionalmente hacia adelante para desarrollar mejor orientación espacial.",
          },
          {
            nombre: "Marcha coordinada",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Marcha coordinada.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917109/Woman_performing_coordinated_mar__202609082222.jpg",
            descripcion: "Caminá o marchá en el lugar elevando ligeramente una rodilla mientras movés el brazo contrario hacia adelante. Alterná de forma natural y mantené el tronco erguido. Buscá un ritmo cómodo y coordinado.",
          },
          {
            nombre: "Paso atrás con brazos coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso atrás con brazos coordinados.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790350917/Woman_performing_bodyweight_exer__20260925123803.jpg",
            descripcion: "Parate derecho. Llevá una pierna hacia atrás mientras acompañás el movimiento con los brazos. Volvé al centro y repetí con la otra pierna. Movete de manera fluida y mantené el tronco estable.",
          },
          {
            nombre: "Paso direccional con alcance",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso direccional con alcance.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790350945/Woman_performing_lateral_step_ex__20260925123809.jpg",
            descripcion: "Dá un paso en diagonal hacia adelante mientras extendés los brazos en la misma dirección. Volvé al centro con control y repetí hacia el otro lado. Mantené el movimiento fluido y estable.",
          },
          {
            nombre: "Paso lateral alternado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral alternado.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790427981/Woman_performing_side_hops_exercise_20260926093231.jpg",
            descripcion: "Dá un paso hacia un lado y después acercá la otra pierna. Repetí hacia el lado contrario manteniendo un ritmo constante. Mantené las rodillas ligeramente flexionadas y el tronco erguido.",
          },
          {
            nombre: "Paso lateral cruzado",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Paso lateral cruzado.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790350917/Woman_performing_bodyweight_exer__20260925123806.jpg",
            descripcion: "Desplazate lateralmente cruzando una pierna por delante o por detrás de la otra. Mantené las rodillas ligeramente flexionadas y realizá pasos cortos y controlados. Repetí hacia ambos lados.",
          },
          {
            nombre: "Pasos adelante y atrás",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos adelante y atrás.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268598/Woman_performing_bodyweight_exer__20260912235517.jpg",
            descripcion: "Dá un paso hacia adelante y después regresá hacia atrás hasta la posición inicial. Alterná las piernas y mantené un ritmo constante. Realizá pasos cortos y controlados.",
          },
          {
            nombre: "Pasos laterales rápidos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Pasos laterales rápidos.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790350945/Man_performing_lateral_steps_exe__20260925123812.jpg",
            descripcion: "Flexioná ligeramente las rodillas y desplazate lateralmente con pasos cortos y rápidos. Mantené el pecho arriba y evitá juntar completamente los pies si eso te hace perder estabilidad. Repetí hacia ambos lados.",
          },
          {
            nombre: "Rodillas altas coordinación",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Rodillas altas coordinación.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790428017/Man_performing_high_knees_exercise_20260926093233.jpg",
            descripcion: "Marchá en el lugar elevando las rodillas de forma alternada hasta una altura cómoda. Coordiná el movimiento de los brazos con las piernas y mantené el tronco estable. Empezá despacio y aumentá el ritmo solo si mantenés la coordinación.",
          },
          {
            nombre: "Saltos coordinados",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos coordinados.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268604/Woman_performing_coordinated_jumps_20260912235517.jpg",
            descripcion: "Parate con los pies juntos y los brazos al costado. Saltá abriendo simultáneamente brazos y piernas y después volvé a la posición inicial. Mantené un ritmo fluido y aterrizá suavemente.",
          },
          {
            nombre: "Saltos laterales",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Saltos laterales.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268610/Woman_performing_lateral_exercise_20260912235516.jpg",
            descripcion: "Parate con las rodillas ligeramente flexionadas. Saltá suavemente hacia un lado y aterrizá con control. Absorbé el impacto flexionando la pierna y después saltá hacia el otro lado. Priorizá la estabilidad sobre la altura.",
          },
          {
            nombre: "Subir y bajar al step en 4 tiempos",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Subir y bajar step en 4 tiempos.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268546/Man_performing_step_exercise_20260912235516.jpg",
            descripcion: "Frente al step, subí con una pierna, luego con la otra, bajá una y después la otra siguiendo cuatro tiempos. Mantené un ritmo constante y controlá cada apoyo. Alterná la pierna que inicia.",
          },
          {
            nombre: "Tocar rodilla con mano o codo opuesto",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar Rodilla con Codo opuesto.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268589/Woman_demonstrating_exercise_in___20260912235517.jpg",
            descripcion: "Parate derecho. Elevá una rodilla y tocala con la mano o codo contrario. Volvé a apoyar el pie y repetí con el otro lado. Mantené un ritmo controlado y evitá inclinar excesivamente el tronco.",
          },
          {
            nombre: "Tocar con punta de pie",
            imagen: "/images/ejercicios/Movilidad Consciente/coordinacion/Tocar punta de pie.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917142/Woman_performing_leg_swing_exercise_202609082222.jpg",
            descripcion: "Parate derecho y tocá suavemente el suelo con la punta de un pie hacia adelante. Volvé al centro y repetí con el otro pie. Mantené un ritmo constante y controlá cada apoyo.",
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
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917132/Woman_performing_hip_mobility_ex__202609082222_3.jpg",
            descripcion: "Bajá hasta una sentadilla cómoda y apoyá las manos sobre los muslos o el suelo. Abrí suavemente una rodilla hacia afuera y después la otra, manteniendo los pies apoyados. Movete lentamente y sin dolor.",
          },
          {
            nombre: "Balanceo de pierna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Balanceo de pierna.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917074/Woman_demonstrating_hip_opening___202609082222.jpg",
            descripcion: "Parate junto a una pared o superficie estable. Balanceá una pierna hacia adelante y atrás de forma progresiva, sin impulso excesivo. Mantené el tronco estable y aumentá el rango solo si el movimiento se siente cómodo. Cambiá de pierna.",
          },
          {
            nombre: "Círculos de rodillas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de Rodillas.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917061/Man_performing_knee_mobility_exe__202609082222.jpg",
            descripcion: "Parate con los pies juntos o ligeramente separados y flexioná un poco las rodillas. Colocá las manos sobre ellas y realizá pequeños círculos controlados. Mantené el movimiento suave y sin dolor.",
          },
          {
            nombre: "Círculos de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Círculos de hombros.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788434850/Man_performing_nervous_system_pr__202608311958.jpg",
            descripcion: "Realizá círculos amplios con los brazos hacia adelante y atrás. Prepará los hombros y el manguito rotador con movimientos dinámicos. Aumentá progresivamente el diámetro de los círculos.",
          },
          {
            nombre: "Extensiones de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Extensiones de columna.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917167/Woman_performing_thoracic_extens__202609082222.jpg",
            descripcion: "Sentate o colocate en una posición estable con las manos detrás de la cabeza o cruzadas sobre el pecho. Extendé suavemente la parte alta de la espalda mientras abrís el pecho. Evitá compensar arqueando excesivamente la zona lumbar.",
          },
          {
            nombre: "Flexo extensión de tobillo",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Flexo extensión de Tobillo.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917085/Woman_performing_ankle_mobility___202609082222.jpg",
            descripcion: "Sentate o parate apoyándote en una superficie estable. Levantá un pie y realizá flexiones y extensiones lentas con el tobillo. Hacé varias repeticiones y después cambiá de pie.",
          },
          {
            nombre: "Gato vaca",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Gato vaca.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791048820/Man_performing_rehabilitation_ex__202609031437.jpg",
            descripcion: "Colocate en cuatro apoyos. Al exhalar, llevá suavemente la espalda hacia arriba y acercá el mentón al pecho. Al inhalar, mové la columna en sentido contrario abriendo el pecho sin forzar la zona lumbar. Realizá el movimiento lentamente y coordinado con la respiración.",
          },
          {
            nombre: "Movilidad de cadera en sentadilla",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cadera en sentadilla.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917062/Man_performing_knee_mobility_exe__202609082222_2.jpg",
            descripcion: "Separá los pies a una posición cómoda y bajá lentamente hacia una sentadilla profunda. Mantené los pies apoyados y el pecho abierto. Sostené la posición respirando profundamente y realizá pequeños ajustes de movilidad sin forzar.",
          },
          {
            nombre: "Movilidad de cuello",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Movilidad de cuello.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788894051/Man_performing_neck_rotation_exe__202608282258.jpg",
            descripcion: "Sentate o parate con la espalda erguida. Girá lentamente la cabeza hacia un lado y después hacia el otro. Podés combinarlo con movimientos suaves de inclinación. No hagas movimientos bruscos ni fuerces el rango.",
          },
          {
            nombre: "Ondulaciones de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Ondulaciones de columna.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790294948/Woman_performing_cat_cow_exercise_20260924210835.jpg",
            descripcion: "Mové la columna lentamente desde una zona hacia otra, creando una sensación de onda que recorra la espalda. Evitá movimientos bruscos y buscá fluidez. Respir­á de forma tranquila durante todo el ejercicio.",
          },
          {
            nombre: "Rotaciones completas de cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones completas de cadera.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788917127/Woman_performing_hip_mobility_ex__202609082222.jpg",
            descripcion: "Parate sobre una pierna y levantá la otra. Mové la pierna lentamente realizando un círculo amplio desde la cadera. Mantené estable la pierna de apoyo y usá una pared si necesitás equilibrio. Cambiá de lado.",
          },
          {
            nombre: "Rotaciones de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones de hombros.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790429946/Man_performing_shoulder_rotation__20260926103847.jpg",
            descripcion: "Parate o sentate con los brazos relajados. Realizá círculos amplios con ambos hombros hacia adelante y después hacia atrás. Movete lentamente y mantené la respiración tranquila.",
          },
          {
            nombre: "Rotaciones externas de cadera",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones externas de cadera.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788894058/Man_performing_hip_external_rota__202608282258.jpg",
            descripcion: "Sentate en el suelo con las rodillas flexionadas y los pies apoyados en el suelo, separados al ancho de los hombros. Dejá caer ambas rodillas hacia afuera simultáneamente, abriendo las caderas en rotación externa.",
          },
          {
            nombre: "Rotaciones torácicas",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotaciones torácicas.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1789268569/Man_performing_thoracic_rotations_20260912235517.jpg",
            descripcion: "Colocate en una posición estable, sentado o en cuadrupedia. Girá lentamente el torso hacia un lado manteniendo las caderas quietas. Volvé al centro y repetí hacia el otro lado. Buscá movimiento en la parte alta de la espalda.",
          },
          {
            nombre: "Rotación completa de hombros",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación completa de hombros.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790427983/Woman_demonstrating_shoulder_rot__20260926094115.jpg",
            descripcion: "Parate derecho y realizá círculos amplios con un brazo, pasando cerca de la oreja y regresando hacia abajo. Hacé el movimiento lentamente y dentro de un rango cómodo. Repetí con el otro brazo.",
          },
          {
            nombre: "Rotación de columna",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de columna.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788894036/Woman_performing_thoracic_rotati__202608221941.jpg",
            descripcion: "Sentate con la espalda erguida y los pies apoyados. Girá lentamente el torso hacia un lado sin mover demasiado la pelvis. Volvé al centro y repetí hacia el otro lado.",
          },
          {
            nombre: "Rotación de hombros con banda",
            imagen: "/images/ejercicios/Movilidad Consciente/movilidad articular/Rotación de hombros con banda.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1790427981/Man_performing_shoulder_mobility__20260926100543.jpg",
            descripcion: "Sostené una banda elástica con ambas manos y mantené los brazos extendidos. Mové la banda lentamente por encima de la cabeza y hacia atrás solo hasta donde resulte cómodo. Volvé a la posición inicial con control. No fuerces el rango.",
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
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788561815/Man_performing_medicine_ball_twist_202608271448.jpg",
            descripcion: "Sentate en el piso con las rodillas flexionadas y los pies apoyados (o levantados para mayor dificultad). Sostené un balón medicinal con ambas manos cerca del pecho. Incliná el torso hacia atrás unos 45 grados y rotá de un lado a otro llevando el balón hacia el piso a cada lado.",
          },
          {
            nombre: "Abdominales con rueda",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales con rueda.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232883/Woman_performing_core_exercise_20261005173502.jpg",
            descripcion: "Sujeta los agarres de la rueda con ambas manos y colócala justo debajo de tus hombros, manteniendo los brazos estirados. Rueda hacia adelante de manera controlada y en línea recta. Desciende solo hasta el punto en que sientas que puedes mantener el abdomen firme y sin dolor lumbar. Exhala el aire y contrae con fuerza el abdomen para tirar de la rueda de regreso a la posición inicial.",
          },
          {
            nombre: "Abdominales cortos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales cortos.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232885/Woman_performing_abdominal_exercise_20261005173505.jpg",
            descripcion: "Contrae el abdomen y exhala el aire mientras elevas únicamente la cabeza, los hombros y la parte alta de la espalda del suelo. Mantén la mirada fija en un punto del techo para evitar doblar el cuello. Fase de bajada: Inhala mientras desciendes el torso de forma lenta y controlada hasta que los hombros toquen el suelo, manteniendo la tensión en el abdomen en todo momento.",
          },
          {
            nombre: "Abdominales en v",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales en V.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232885/Woman_performing_core_exercise_20261005173508.jpg",
            descripcion: "Eleva simultáneamente el torso y las piernas rectas hacia el techo, intentando tocar la punta de los pies con las manos. El cuerpo debe formar una V en el punto más alto, apoyándote solo sobre los glúteos. En el regreso baja los brazos y las piernas al mismo tiempo de forma controlada hasta volver a la posición inicial, sin arquear la espalda baja.",
          },
          {
            nombre: "Abdominales inferiores",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales inferiores.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232884/Woman_performing_core_exercise_20261005173516.jpg",
            descripcion: "Acuéstate boca arriba con las piernas estiradas y las manos bajo los glúteos para proteger la zona lumbar. Eleva las piernas juntas hasta formar un ángulo de 90 grados con el cuerpo. Baja las piernas lentamente sin que lleguen a tocar el suelo y vuelve a subir.",
          },
          {
            nombre: "Abdominales isométricos",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales isométricos.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232884/Woman_performing_core_hollow_hold_20261005173511.jpg",
            descripcion: "Contrae el abdomen y los glúteos para despegar simultáneamente los hombros, las escápulas y las piernas del suelo (a unos 10-15 centímetros de distancia). Mantén las piernas juntas, las puntas de los pies estiradas (en punta) y la mirada hacia el techo o tus pies. Respira de forma corta y controlada mientras sostienes la posición.",
          },
          {
            nombre: "Abdominales rodillas al pecho",
            imagen: "/images/ejercicios/Fuerza/core/Abdominales rodillas al pecho.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788875394/Man_performing_core_exercise_202609081046.jpg",
            descripcion: "Colocate en posición de plancha con las manos debajo de los hombros. Llevá una rodilla hacia el pecho y luego cambiá rápidamente de pierna. Mantené la cadera relativamente estable y el abdomen activo durante todo el movimiento.",
          },
          {
            nombre: "Adominales rotaciones con banda",
            imagen: "/images/ejercicios/Fuerza/core/Adominales rotaciones con banda.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791232885/cambiar_polea_por_una_banda_20261005174038.jpg",
            descripcion: "Extiende los brazos frente a tu pecho. Gira el torso alejándote del punto de anclaje, manteniendo los brazos rectos. Aprieta el abdomen al rotar. Regresa a la posición inicial de forma lenta y controlada, resistiendo el tirón de la banda.",
          },
          {
            nombre: "Bicho muerto",
            imagen: "/images/ejercicios/Fuerza/core/Bicho muerto.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791152942/Man_performing_deadbug_exercise_20261004192502.jpg",
            descripcion: "Acostate boca arriba con brazos elevados y rodillas flexionadas. Activá el abdomen y extendé lentamente un brazo y la pierna contraria sin perder el control de la zona lumbar. Volvé al centro y cambiá de lado.",
          },
          {
            nombre: "Bird dog",
            imagen: "/images/ejercicios/Fuerza/core/Bird dog.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788736736/Woman_performing_Bird_dog_exercise_202608251603.jpg",
            descripcion: "Desde posición de cuadrupedia (manos bajo hombros, rodillas bajo caderas), extendé el brazo derecho y la pierna izquierda simultáneamente hasta que queden paralelos al piso. Mantené la pelvis estable, la espalda neutra y evitá rotar el torso. Volvé controlado y alterná los lados.",
          },
          {
            nombre: "Plancha con hombros",
            imagen: "/images/ejercicios/Fuerza/core/Plancha con hombros.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791233893/Woman_performing_shoulder_tap_plank_20261005175235.jpg",
            descripcion: "Colócate en posición de plancha alta, con las manos alineadas justo debajo de los hombros y los pies ligeramente separados. Mantén el cuerpo en línea recta desde la cabeza hasta los talones. Despega una mano del suelo con un movimiento controlado para tocar el hombro contrario, evitando que la cadera se balancee o gire. Regresa la mano al suelo y repite el movimiento con el brazo opuesto.",
          },
          {
            nombre: "Plancha frontal",
            imagen: "/images/ejercicios/Fuerza/core/Plancha frontal.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1788361359/Woman_performing_plank_exercise_202608221941.jpg",
            descripcion: "Mantené el cuerpo en una línea recta desde la cabeza hasta los talones. Contraé el abdomen como si te fueras a dar un puñetazo en el estómago. Apretá los glúteos. No dejes que las caderas se hundan hacia el piso ni que se eleven hacia arriba. Mantené la posición el tiempo indicado respirando normalmente. ",
          },
          {
            nombre: "Plancha lateral",
            imagen: "/images/ejercicios/Fuerza/core/Plancha lateral.jpeg",
            imagenCloudinaryId: "https://res.cloudinary.com/ygpokmmn/image/upload/v1791155646/Man_performing_side_plank_exercise_20261004201326.jpg",
            descripcion: "Acostate de costado apoyando el antebrazo en el piso con el codo debajo del hombro. Extendé las piernas y apoyá el costado del pie (o rodilla para facilitar). Elevá las caderas hasta que el cuerpo forme una línea recta desde los pies hasta la cabeza. Mantené la posición contrayendo el core y los oblicuos.",
          },
        ],
      },
      {
        slug: "fullbody",
        nombre: "Full Body",
        ejercicios: [
          {
            nombre: "Burpees",
            imagen: "/images/ejercicios/Fuerza/fullbody/Burpees.jpeg",
            descripcion: "Parate erguido. Bajá hasta apoyar las manos en el suelo y llevá los pies hacia atrás hasta la posición de plancha. Volvé a llevar los pies hacia adelante y realizá un salto vertical. Aterrizá suavemente y repetí manteniendo un ritmo controlado.",
          },
          {
            nombre: "Caminata con carga",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata con carga.jpeg",
            descripcion: "Sostené una mancuerna o kettlebell pesada en una sola mano a los costados del cuerpo, como si fuera una valija. Caminá manteniendo el torso completamente erguido, sin dejar que el peso te incline hacia ese lado. Mantené el core contraído y los hombros alineados. Cambiá de mano.",
          },
          {
            nombre: "Caminata de oso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Caminata de Oso.jpeg",
            descripcion: "Comenzá en posición de cuadrupedia con las manos bajo los hombros y las rodillas flexionadas y elevadas del piso (a unos 5-10 cm). Movete hacia adelante moviendo la mano derecha con la pierna izquierda, luego la mano izquierda con la pierna derecha. Mantené las caderas bajas, la espalda recta y el core activo. Movete de forma lenta y controlada.",
          },
          {
            nombre: "Empuje vertical con mancuerna",
            imagen: "/images/ejercicios/Fuerza/fullbody/Empuje vertical con mancuerna.jpeg",
            descripcion: "Sostené una mancuerna en cada mano a la altura de los hombros. Bajá en sentadilla y, al subir, utilizá la fuerza de las piernas para impulsar las mancuernas por encima de la cabeza. Bajá las cargas de forma controlada y repetí.",
          },
          {
            nombre: "Pararse con peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Pararse con peso.jpeg",
            descripcion: "Acostate boca arriba con una kettlebell en una mano, el brazo extendido verticalmente sobre el hombro. Flexioná la rodilla del mismo lado y mantené la otra pierna extendida en el piso. Con la mano libre, empujate del piso para sentarte sobre el glúteo. Deslizá la pierna extendida hacia atrás quedando en posición de rodilla. Levantate de pie llevando la pierna trasera hacia adelante.",
          },
          {
            nombre: "Remo en plancha",
            imagen: "/images/ejercicios/Fuerza/fullbody/Remo en plancha.jpeg",
            descripcion: "Colocate en plancha con una mancuerna en cada mano. Mantené el cuerpo alineado y remá una mancuerna hacia la cadera mientras la otra mano permanece apoyada. Bajá lentamente y alterná los lados sin rotar excesivamente el torso.",
          },
          {
            nombre: "Sentadilla con lanzamiento de pelota",
            imagen: "/images/ejercicios/Fuerza/fullbody/Sentadilla con lanzamiento de pelota.jpeg",
            descripcion: "Desde el fondo de la sentadilla, empujá con las piernas y simultáneamente lanzá el balón hacia arriba contra la pared. El balón debe golpear la pared por encima de tu cabeza. Atrapá el balón al bajar absorbiendo el impacto con los brazos y bajá inmediatamente en la siguiente sentadilla. El movimiento debe ser fluido y continuo.",
          },
          {
            nombre: "Subidas al step con peso",
            imagen: "/images/ejercicios/Fuerza/fullbody/Subidas al step con peso.jpeg",
            descripcion: "Sostené una mancuerna o kettlebell en cada mano a la altura de los hombros. Colocá un pie sobre el banco a la altura de la rodilla, empujá con esa pierna para subir completamente y al llegar arriba realizá un press de hombros extendiendo los brazos.",
          },
          {
            nombre: "Swing con pesa alternado",
            imagen: "/images/ejercicios/Fuerza/fullbody/Swing con pesa alternado.jpeg",
            descripcion: "Inclinate hacia adelante desde las caderas llevando la kettlebell hacia atrás entre las piernas (como si fueras a sentarte pero sin flexionar mucho las rodillas). De un impulso explosivo extendiendo las caderas hacia adelante para lanzar la kettlebell a la altura del pecho.",
          },
          {
            nombre: "Thruster con barra",
            imagen: "/images/ejercicios/Fuerza/fullbody/Thruster con barra.jpeg",
            descripcion: "Parate con los pies a la altura de los hombros. Bajá en sentadilla completa manteniendo el torso vertical y los codos altos. Desde el fondo de la sentadilla, empujá con las piernas para subir y aprovechá ese impulso para empujar la barra hacia arriba en un press de hombros hasta extender los brazos.",
          },
          {
            nombre: "Zancada con rotación",
            imagen: "/images/ejercicios/Fuerza/fullbody/Zancada con rotación.jpeg",
            descripcion: "Dá un paso largo hacia adelante con una pierna bajando en zancada hasta que ambas rodillas formen 90 grados. La rodilla delantera no debe pasar la punta del pie. En la posición más baja de la zancada, rotá el torso hacia la pierna de adelante llevando el peso al lado de la cadera. ",
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
            descripcion: "Con la banda elástica sobre las rodillas, realizá abducciones laterales, caminata lateral o puente con abducción. Activá los abductores de cadera sintiendo la contracción en la parte lateral del glúteo. Mantené la tensión constante en la banda o mancuerna.",
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
            nombre: "Caminata en escalador",
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
            nombre: "Remo con máquina",
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
            nombre: "Skipping alto",
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
            nombre: "Estiramiento de pantorrilla",
            imagen: "/images/ejercicios/Regulación y descarga/Stretching pasivo/Estiramiento de pantorrilla.jpeg",
            descripcion: "Ejercicio de estiramiento de pantorrilla para mejorar tu rendimiento físico.",
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
          {
            nombre: "Gato vaca",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Gato vaca.jpeg",
            descripcion: "Ejercicio de gato vaca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad general",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movilidad general.jpeg",
            descripcion: "Ejercicio de movilidad general para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento de cadera 90º",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimiento de cadera 90º.jpeg",
            descripcion: "Ejercicio de movimiento de cadera 90º para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento de cobra",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimiento de cobra.jpeg",
            descripcion: "Ejercicio de movimiento de cobra para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento lateral de rodillas",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimiento lateral de rodillas.jpeg",
            descripcion: "Ejercicio de movimiento lateral de rodillas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento ondulante de columna",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimiento ondulante de columna.jpeg",
            descripcion: "Ejercicio de movimiento ondulante de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimientos lateral contra pared",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimientos lateral contra pared.jpeg",
            descripcion: "Ejercicio de movimientos lateral contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimientos pélvicos",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Movimientos pélvicos.jpeg",
            descripcion: "Ejercicio de movimientos pélvicos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rolamientos",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Rolamientos.jpeg",
            descripcion: "Ejercicio de rolamientos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla profunda conteniendo respiración",
            imagen: "/images/ejercicios/Regulación y descarga/Movimiento restaurativo/Sentadilla profunda conteniendo respiración.jpeg",
            descripcion: "Ejercicio de sentadilla profunda conteniendo respiración para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "Conciencia-corporal",
        nombre: "Conciencia Corporal",
        ejercicios: [
          {
            nombre: "Caminata lenta",
            imagen: "/images/ejercicios/Regulación y descarga/Conciencia corporal/Caminata lenta.jpeg",
            descripcion: "Ejercicio de caminata lenta para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Equilibrio en una pierna",
            imagen: "/images/ejercicios/Regulación y descarga/Conciencia corporal/Equilibrio en una pierna.jpeg",
            descripcion: "Ejercicio de equilibrio en una pierna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento articular controlado",
            imagen: "/images/ejercicios/Regulación y descarga/Conciencia corporal/Movimiento articular controlado.jpeg",
            descripcion: "Ejercicio de movimiento articular controlado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimiento con ojos cerrados",
            imagen: "/images/ejercicios/Regulación y descarga/Conciencia corporal/Movimiento con ojos cerrados.jpeg",
            descripcion: "Ejercicio de movimiento con ojos cerrados para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "Respiración",
        nombre: "Respiración",
        ejercicios: [
          {
            nombre: "Respiración 4 7 8",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración 4-7-8.jpeg",
            descripcion: "Ejercicio de respiración 4 7 8 para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración abdominal acostado",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración abdominal acostado.jpeg",
            descripcion: "Ejercicio de respiración abdominal acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración con pausa",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración con pausa.jpeg",
            descripcion: "Ejercicio de respiración con pausa para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración consciente",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración consciente.jpeg",
            descripcion: "Ejercicio de respiración consciente para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración decúbito ventral",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración decúbito ventral.jpeg",
            descripcion: "Ejercicio de respiración decúbito ventral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración difragmática",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración difragmática.jpeg",
            descripcion: "Ejercicio de respiración difragmática para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración lenta y profunda",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración lenta y profunda.jpeg",
            descripcion: "Ejercicio de respiración lenta y profunda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración nasal",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración nasal.jpeg",
            descripcion: "Ejercicio de respiración nasal para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Respiración prolongada",
            imagen: "/images/ejercicios/Regulación y descarga/Respiración/Respiración prolongada.jpeg",
            descripcion: "Ejercicio de respiración prolongada para mejorar tu rendimiento físico.",
          }
        ]
      }
    ],
  },
  {
    slug: "Rehabilitación y correctivos",
    titulo: "Rehabilitación y correctivos",
    subtitulo: "Recupera movilidad y previene lesiones",
    descripcion: "Ejercicios terapéuticos para la recuperación y prevención de lesiones.",
    subcategorias: [
      {
        slug: "cuello",
        nombre: "Cuello",
        ejercicios: [
          {
            nombre: "Empuje contra la cabeza",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Empuje contra la cabeza.jpeg",
            descripcion: "Ejercicio de empuje contra la cabeza para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje contra la frente",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Empuje contra la frente.jpeg",
            descripcion: "Ejercicio de empuje contra la frente para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de trapecio",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Estiramiento de Trapecio.jpeg",
            descripcion: "Ejercicio de estiramiento de trapecio para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de elevador de escápula",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Estiramiento de elevador de escápula.jpeg",
            descripcion: "Ejercicio de estiramiento de elevador de escápula para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Presión lateral sobre cabeza",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Presión lateral sobre cabeza.jpeg",
            descripcion: "Ejercicio de presión lateral sobre cabeza para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Retracción cervical",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Retracción cervical.jpeg",
            descripcion: "Ejercicio de retracción cervical para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Retracción de mentón con ayuda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Retracción de mentón con ayuda.jpeg",
            descripcion: "Ejercicio de retracción de mentón con ayuda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Retracción de mentón",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Retracción de mentón.jpeg",
            descripcion: "Ejercicio de retracción de mentón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones de cuello",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Rotaciones de cuello.jpeg",
            descripcion: "Ejercicio de rotaciones de cuello para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de cuello controlada",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cuello/Rotación de cuello controlada.jpeg",
            descripcion: "Ejercicio de rotación de cuello controlada para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "hombros",
        nombre: "Hombros",
        ejercicios: [
          {
            nombre: "Apertura con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Apertura con banda.jpeg",
            descripcion: "Ejercicio de apertura con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Círculos controlados de hombros",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Círculos controlados de hombros.jpeg",
            descripcion: "Ejercicio de círculos controlados de hombros para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Deslizamientos contra pared",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Deslizamientos contra pared.jpeg",
            descripcion: "Ejercicio de deslizamientos contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento con rotación interna acostado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Estiramiento con rotación interna acostado.jpeg",
            descripcion: "Ejercicio de estiramiento con rotación interna acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión de hombros con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Extensión de Hombros con banda.jpeg",
            descripcion: "Ejercicio de extensión de hombros con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexión de hombro",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Flexión de hombro.jpeg",
            descripcion: "Ejercicio de flexión de hombro para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Protracción escapular",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Protracción escapular.jpeg",
            descripcion: "Ejercicio de protracción escapular para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación controlada de hombro",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Rotación controlada de hombro.jpeg",
            descripcion: "Ejercicio de rotación controlada de hombro para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación externa con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Rotación externa con banda.jpeg",
            descripcion: "Ejercicio de rotación externa con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación externa de brazo",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/hombros/Rotación externa de brazo.jpeg",
            descripcion: "Ejercicio de rotación externa de brazo para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "escapulas",
        nombre: "Escápulas",
        ejercicios: [
          {
            nombre: "Apertura escapular con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Apertura escapular con banda.jpeg",
            descripcion: "Ejercicio de apertura escapular con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Depresión escapular",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Depresión escapular.jpeg",
            descripcion: "Ejercicio de depresión escapular para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Deslizamiento escapular en pared",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Deslizamiento escapular en pared.jpeg",
            descripcion: "Ejercicio de deslizamiento escapular en pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Deslizamiento escapular",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Deslizamiento escapular.jpeg",
            descripcion: "Ejercicio de deslizamiento escapular para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Empuje escapular acostado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Empuje escapular acostado.jpeg",
            descripcion: "Ejercicio de empuje escapular acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Encojimiento de escápulas",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Encojimiento de escápulas.jpeg",
            descripcion: "Ejercicio de encojimiento de escápulas para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rechazo escapular",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Rechazo escapular.jpeg",
            descripcion: "Ejercicio de rechazo escapular para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Retracción escapular",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Retracción escapular.jpeg",
            descripcion: "Ejercicio de retracción escapular para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones escapulares",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/escapulas/Rotaciones escapulares.jpeg",
            descripcion: "Ejercicio de rotaciones escapulares para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "columna-toracica",
        nombre: "Columna Torácica",
        ejercicios: [
          {
            nombre: "Alcance frontal sobre roller",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Alcance frontal sobre roller.jpeg",
            descripcion: "Ejercicio de alcance frontal sobre roller para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión contra pared",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Extensión contra pared.jpeg",
            descripcion: "Ejercicio de extensión contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión torácica sobre roller",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Extensión torácica sobre roller.jpeg",
            descripcion: "Ejercicio de extensión torácica sobre roller para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexión de columna sentado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Flexión de columna sentado.jpeg",
            descripcion: "Ejercicio de flexión de columna sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Flexión y extensión de columna",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Flexión y extensión de columna.jpeg",
            descripcion: "Ejercicio de flexión y extensión de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación controlada de columna",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Rotación controlada de columna.jpeg",
            descripcion: "Ejercicio de rotación controlada de columna para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de columna con brazo",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Rotación de columna con brazo.jpeg",
            descripcion: "Ejercicio de rotación de columna con brazo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación lateral de columna acostado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Rotación lateral de columna acostado.jpeg",
            descripcion: "Ejercicio de rotación lateral de columna acostado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación lateral de columna sentado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Rotación lateral de columna sentado.jpeg",
            descripcion: "Ejercicio de rotación lateral de columna sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación torácica arrodillado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna toracica/Rotación torácica arrodillado.jpeg",
            descripcion: "Ejercicio de rotación torácica arrodillado para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "columna-lumbar",
        nombre: "Columna Lumbar",
        ejercicios: [
          {
            nombre: "Bicho muerto",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Bicho muerto.jpeg",
            descripcion: "Ejercicio de bicho muerto para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Bisagra de cadera",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Bisagra de cadera.jpeg",
            descripcion: "Ejercicio de bisagra de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevación de torso",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Elevación de torso.jpeg",
            descripcion: "Ejercicio de elevación de torso para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento lumbar",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Estiramiento Lumbar.jpeg",
            descripcion: "Ejercicio de estiramiento lumbar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de zona lumbar",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Estiramiento de zona Lumbar.jpeg",
            descripcion: "Ejercicio de estiramiento de zona lumbar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Gato vaca",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Gato Vaca.jpeg",
            descripcion: "Ejercicio de gato vaca para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movimientos pélvicos",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Movimientos Pélvicos.jpeg",
            descripcion: "Ejercicio de movimientos pélvicos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Perro ave",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Perro ave.jpeg",
            descripcion: "Ejercicio de perro ave para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Plancha lateral",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Plancha lateral.jpeg",
            descripcion: "Ejercicio de plancha lateral para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puente de glúteos",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/columna lumbar/Puente de Glúteos.jpeg",
            descripcion: "Ejercicio de puente de glúteos para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "cadera",
        nombre: "Cadera",
        ejercicios: [
          {
            nombre: "Almeja",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Almeja.jpeg",
            descripcion: "Ejercicio de almeja para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Cuadrupedia",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Cuadrupedia.jpeg",
            descripcion: "Ejercicio de cuadrupedia para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Elevación de cadera",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Elevación de cadera.jpeg",
            descripcion: "Ejercicio de elevación de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de adductores",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Estiramiento de Adductores.jpeg",
            descripcion: "Ejercicio de estiramiento de adductores para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de flexores de cadera",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Estiramiento de flexores de cadera.jpeg",
            descripcion: "Ejercicio de estiramiento de flexores de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones a 90º",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Rotaciones a 90º.jpeg",
            descripcion: "Ejercicio de rotaciones a 90º para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación controlada de cadera",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Rotación controlada de cadera.jpeg",
            descripcion: "Ejercicio de rotación controlada de cadera para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de cadera en equilibrio",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Rotación de cadera en equilibrio.jpeg",
            descripcion: "Ejercicio de rotación de cadera en equilibrio para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación de cadera unipodal",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/cadera/Rotación de cadera unipodal.jpeg",
            descripcion: "Ejercicio de rotación de cadera unipodal para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "rodillas",
        nombre: "Rodillas",
        ejercicios: [
          {
            nombre: "Cuadriceps isométrico",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Cuadriceps isométrico.jpeg",
            descripcion: "Ejercicio de cuadriceps isométrico para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Descenso desde cajón",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Descenso desde cajón.jpeg",
            descripcion: "Ejercicio de descenso desde cajón para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estocada isométrica",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Estocada isométrica.jpeg",
            descripcion: "Ejercicio de estocada isométrica para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión de rodilla con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Extensión de Rodilla con banda.jpeg",
            descripcion: "Ejercicio de extensión de rodilla con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puente con foco en isquiotibiales",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Puente con foco en Isquiotibiales.jpeg",
            descripcion: "Ejercicio de puente con foco en isquiotibiales para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotación controlada de rodilla",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Rotación controlada de Rodilla.jpeg",
            descripcion: "Ejercicio de rotación controlada de rodilla para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla asistida",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Sentadilla asistida.jpeg",
            descripcion: "Ejercicio de sentadilla asistida para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla con talones elevados",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Sentadilla con talones elevados.jpeg",
            descripcion: "Ejercicio de sentadilla con talones elevados para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Sentadilla contra pared",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Sentadilla contra pared.jpeg",
            descripcion: "Ejercicio de sentadilla contra pared para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Subidas en reversa al step",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/rodillas/Subidas en reversa al step.jpeg",
            descripcion: "Ejercicio de subidas en reversa al step para mejorar tu rendimiento físico.",
          }
        ],
      },
      {
        slug: "tobillo",
        nombre: "Tobillo",
        ejercicios: [
          {
            nombre: "Apertura dedos del pie",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Apertura dedos del pie.jpeg",
            descripcion: "Ejercicio de apertura dedos del pie para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Contracción arco plantar sentado",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Contracción arco plantar sentado.jpeg",
            descripcion: "Ejercicio de contracción arco plantar sentado para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Contracción arco plantar",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Contracción arco plantar.jpeg",
            descripcion: "Ejercicio de contracción arco plantar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Equilibrio en un pie",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Equilibrio en un pie.jpeg",
            descripcion: "Ejercicio de equilibrio en un pie para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de gemelos",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Estiramiento de Gemelos.jpeg",
            descripcion: "Ejercicio de estiramiento de gemelos para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Estiramiento de tobillo",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Estiramiento de tobillo.jpeg",
            descripcion: "Ejercicio de estiramiento de tobillo para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Extensión plantar",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Extensión plantar.jpeg",
            descripcion: "Ejercicio de extensión plantar para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Movilidad de tobillo con banda",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Movilidad de tobillo con banda.jpeg",
            descripcion: "Ejercicio de movilidad de tobillo con banda para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Puntas de pies",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Puntas de pies.jpeg",
            descripcion: "Ejercicio de puntas de pies para mejorar tu rendimiento físico.",
          },
          {
            nombre: "Rotaciones de tobillo",
            imagen: "/images/ejercicios/Rehabilitación y correctivos/tobillo/Rotaciones de tobillo.jpeg",
            descripcion: "Ejercicio de rotaciones de tobillo para mejorar tu rendimiento físico.",
          }
        ]
      }
    ]
  }
];
