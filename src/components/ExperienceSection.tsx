"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Experience { id: number; company: string; position: string; duration: string; description: string }

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  if (!experiences || experiences.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-neutral-100 border-solid border-b-[3px] border-b-neutral-700">Berufserfahrung</h2>
      {experiences.map((exp, index) => (
        <motion.article
          key={exp.id}
          className={`p-6 mb-8 rounded-lg border-l-4 border-solid cursor-pointer bg-neutral-900 border-l-neutral-700 duration-[0.3s] ease-[ease] text-neutral-200 ${hoveredElement === `exp-${index}` ? 'exp-card exp-card--hover' : 'exp-card'}`}
          onMouseEnter={() => setHoveredElement(`exp-${index}`)}
          onMouseLeave={() => setHoveredElement(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: .5, ease: 'easeOut', delay: index * 0.06 }}
        >
          <div className="flex justify-between items-start mb-3 max-sm:flex-col max-sm:gap-2">
            <div>
              <h3 className="mx-0 mt-0 mb-1 text-xl font-semibold text-neutral-100">{exp.position}</h3>
              <p className="m-0 text-lg font-medium text-neutral-300">{exp.company}</p>
            </div>
            <span className="px-4 py-2 text-base font-medium text-neutral-400 rounded-3xl bg-[rgba(255,255,255,0.06)] border border-neutral-800">{exp.duration}</span>
          </div>
          {exp.description && (
            <p className="m-0 text-base leading-relaxed text-neutral-300">{exp.description}</p>
          )}
        </motion.article>
      ))}
    </section>
  );
}
