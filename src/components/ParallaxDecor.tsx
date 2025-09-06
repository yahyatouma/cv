"use client";
import React, { useEffect, useRef } from 'react';

export function ParallaxDecor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      const nodes = ref.current?.querySelectorAll<HTMLElement>('[data-speed]') || [] as any;
      nodes.forEach((el: HTMLElement) => {
        const speed = parseFloat(el.dataset.speed || '0.1');
        el.style.transform = `translateY(${y * speed}px)`;
      });
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div ref={ref} className="parallax-wrap">
      <img src="/icons/react.svg" alt="react" className="parallax-img" style={{ left: 12, top: -20 }} data-speed="0.15" />
      <img src="/icons/ts.svg" alt="ts" className="parallax-img" style={{ right: 18, top: 40 }} data-speed="0.1" />
      <img src="/icons/tailwind.svg" alt="tw" className="parallax-img" style={{ left: 24, bottom: -20 }} data-speed="0.2" />
    </div>
  );
}
