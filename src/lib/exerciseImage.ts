const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined;

/**
 * Acepta en imagenCloudinaryId tanto una URL completa de Cloudinary
 * (la que copiás con el botón "Copy URL" del Console) como un public ID corto.
 * En cualquiera de los dos casos, inserta las transformaciones de optimización
 * (f_auto,q_auto = formato y calidad automática; w_ = ancho).
 */
export function getExerciseImageSrc(
  ej: { imagen: string; imagenCloudinaryId?: string },
  width: number = 600
): string {
  const id = ej.imagenCloudinaryId;
  if (!id) return ej.imagen;

  // Caso 1: pegaste la URL completa del Console
  if (id.startsWith('http')) {
    if (id.includes('/upload/')) {
      return id.replace('/upload/', `/upload/f_auto,q_auto,c_fill,w_${width}/`);
    }
    return id; // URL rara que no matchea el patrón esperado, se usa tal cual
  }

  // Caso 2: pegaste solo el public ID corto
  if (!CLOUD_NAME) return ej.imagen;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,w_${width}/${id}`;
}