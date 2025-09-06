"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useScrollDir } from '../hooks/useScrollDir';

interface SkillDetail { title: string; description: string; details: string[]; image: string }
interface SkillsSectionProps { skills: string[]; skillDetails: Record<string, SkillDetail> }

export function SkillsSection({ skills, skillDetails }: SkillsSectionProps) {
  const dir = useScrollDir();
  if (skills.length === 0) return null;

  function SkillItem({ skill, index }: { skill: string; index: number }) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const details = skillDetails[skill];
    return (
      <div ref={ref} className={`inline-block align-top reveal ${inView ? 'reveal--visible' : ''}`}>
        <span className={`inline-block px-6 py-3 text-base font-medium rounded-3xl text-[white] ${inView ? 'skill-pill skill-pill--hover' : 'skill-pill'}`}>
          {skill}
        </span>
        {inView && details && (
          <div className="mt-3 p-6 rounded-xl border-2 border-neutral-800 border-solid bg-neutral-900 text-neutral-200 w-full max-w-[640px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] reveal reveal--visible">
            <div className="flex gap-4 items-center mb-4">
              <img className="object-contain h-[50px] w-[50px]" src={details.image} alt={details.title} />
              <h3 className="m-0 text-xl font-semibold text-neutral-100">{details.title}</h3>
            </div>
            <p className="mb-3 text-base font-medium text-neutral-300">{details.description}</p>
            <ul className="p-0 m-0">
              {details.details.map((detail, detailIndex) => (
                <li className="relative pl-4 mb-2 text-sm text-neutral-400" key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-neutral-100 border-solid border-b-[3px] border-b-neutral-700">Fähigkeiten</h2>
      <motion.div className="flex flex-wrap gap-4 justify-center" animate={{ y: dir === 'up' ? -8 : 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
        {skills.map((skill, index) => (
          <SkillItem key={skill} skill={skill} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
