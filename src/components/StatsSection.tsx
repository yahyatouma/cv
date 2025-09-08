"use client";
import React from 'react';
import { useInView } from '../hooks/useInView';

interface Stat { label: string; value: number; icon?: string }

function Counter({ to }: { to: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const animate = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val}</span>;
}

export function StatsSection() {
  const stats: Stat[] = [
    { label: 'Zufriedene Kunden', value: 232 },
    { label: 'Projekte', value: 521 },
    { label: 'Stunden der Unterstützung', value: 1463 },
    { label: 'Fleißige Arbeiter', value: 15 },
  ];

  return (
    <section id="stats" className="mb-10">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-slate-900 border-solid border-b-[3px] border-b-slate-300">Zahlen</h2>
      <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-value"><Counter to={s.value} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
