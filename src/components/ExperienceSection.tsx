"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollDir } from '../hooks/useScrollDir';

interface Experience { id: number; company: string; position: string; duration: string; description: string }

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  if (!experiences || experiences.length === 0) return null;
  const dir = useScrollDir();
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-slate-900 border-solid border-b-[3px] border-b-slate-300">Berufserfahrung</h2>
      {experiences.map((exp, index) => (
        <motion.article
          key={exp.id}
          className={`p-6 mb-8 rounded-lg border-l-4 border-solid cursor-pointer border-l-sky-400 duration-[0.3s] ease-[ease] ${hoveredElement === `exp-${index}` ? 'exp-card exp-card--hover' : 'exp-card'} text-slate-700`}
          onMouseEnter={() => setHoveredElement(`exp-${index}`)}
          onMouseLeave={() => setHoveredElement(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: .5, ease: 'easeOut', delay: index * 0.06 }}
        >
          <motion.div animate={{ y: dir === 'up' ? -8 : 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
            <div className="flex justify-between items-start mb-3 max-sm:flex-col max-sm:gap-2">
              <div>
                <h3 className="mx-0 mt-0 mb-1 text-xl font-semibold text-slate-900">{exp.position}</h3>
                <p className="m-0 text-lg font-medium text-slate-600">{exp.company}</p>
              </div>
              <span className="px-4 py-2 text-base font-medium text-slate-600 rounded-3xl bg-[rgba(2,132,199,0.06)] border border-slate-200">{exp.duration}</span>
            </div>
            {exp.description && (
              <p className="m-0 text-base leading-relaxed text-slate-700">{exp.description}</p>
            )}
          </motion.div>
        </motion.article>
      ))}
    </section>
  );
}
