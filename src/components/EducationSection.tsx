"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Education { id: number; degree: string; institution: string; year: string }

export function EducationSection({ education }: { education: Education[] }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  if (!education || education.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-slate-900 border-solid border-b-[3px] border-b-slate-300">Bildung</h2>
      {education.map((edu, index) => (
        <motion.article
          className={`flex justify-between items-center p-6 mb-6 rounded-lg border-l-4 border-solid transition-all cursor-pointer duration-[0.3s] ease-[ease] max-sm:flex-col max-sm:gap-2 max-sm:items-start ${hoveredElement === `edu-${index}` ? 'edu-card edu-card--hover' : 'edu-card'} text-slate-700 border-l-sky-400`}
          key={edu.id}
          onMouseEnter={() => setHoveredElement(`edu-${index}`)}
          onMouseLeave={() => setHoveredElement(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: .5, ease: 'easeOut', delay: index * 0.06 }}
        >
          <motion.div className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-2 max-sm:items-start">
            <div>
              <h3 className="mx-0 mt-0 mb-1 text-xl font-semibold text-slate-900">{edu.degree}</h3>
              <p className="m-0 text-base font-medium text-slate-600">{edu.institution}</p>
            </div>
            <span className="px-4 py-2 text-base font-medium text-slate-600 rounded-3xl bg-[rgba(2,132,199,0.06)] border border-slate-200">{edu.year}</span>
          </motion.div>
        </motion.article>
      ))}
    </section>
  );
}
