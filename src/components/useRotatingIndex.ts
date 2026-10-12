import { useEffect, useState } from 'react';

/**
 * Devuelve un índice que avanza cada `intervalMs` mientras `active` sea true.
 * Al desactivarse vuelve a 0. Respeta prefers-reduced-motion (no rota solo).
 */
export function useRotatingIndex(count: number, active: boolean, intervalMs = 2800) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || count < 2) {
      setIndex(0);
      return;
    }
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [active, count, intervalMs]);

  return index;
}