import { useEffect, useState } from 'react';

export type ScrollDir = 'up' | 'down';

export function useScrollDir(threshold = 4): ScrollDir {
  const [dir, setDir] = useState<ScrollDir>('down');
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const delta = y - lastY;
          if (Math.abs(delta) > threshold) {
            setDir(delta > 0 ? 'down' : 'up');
            lastY = y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return dir;
}
