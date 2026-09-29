const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined;

/**
 * Si el ejercicio ya tiene imagenCloudinaryId cargado a mano, arma la URL
 * optimizada de Cloudinary. Si no, cae al path local de /public como siempre.
 * Así podés migrar de a uno sin romper los que todavía no tocaste.
 */
export function getExerciseImageSrc(
  ej: { imagen: string; imagenCloudinaryId?: string },
  width: number = 600
): string {
  if (ej.imagenCloudinaryId && CLOUD_NAME) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,w_${width}/${ej.imagenCloudinaryId}`;
  }
  return ej.imagen;
}