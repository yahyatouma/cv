"use client";
import React from 'react';
import { useInView } from '../hooks/useInView';

interface SkillDetail { title: string; description: string; details: string[]; image: string }
interface SkillsSectionProps { skills: string[]; skillDetails: Record<string, SkillDetail> }

export function SkillsSection({ skills, skillDetails }: SkillsSectionProps) {
  if (skills.length === 0) return null;

  function SkillItem({ skill, index }: { skill: string; index: number }) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const details = skillDetails[skill];
    return (
      <div ref={ref} className={`inline-block relative reveal ${inView ? 'reveal--visible' : ''}`}>
        <span className={`inline-block px-6 py-3 text-base font-medium rounded-3xl text-[white] ${inView ? 'skill-pill skill-pill--hover' : 'skill-pill'}`}>
          {skill}
        </span>
        {inView && details && (
          <div className="absolute top-full left-2/4 p-6 mt-2.5 rounded-xl border-2 border-blue-800 border-solid -translate-x-2/4 bg-[white] max-w-[400px] min-w-[300px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-[1000] max-sm:left-0 max-sm:max-w-[300px] max-sm:min-w-[250px] reveal reveal--visible">
            <div className="flex gap-4 items-center mb-4">
              <img className="object-contain h-[50px] w-[50px]" src={details.image} alt={details.title} />
              <h3 className="m-0 text-xl font-semibold text-blue-800">{details.title}</h3>
            </div>
            <p className="mb-3 text-base font-medium text-gray-700">{details.description}</p>
            <ul className="p-0 m-0">
              {details.details.map((detail, detailIndex) => (
                <li className="relative pl-4 mb-2 text-sm text-gray-600" key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="mb-8">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-blue-800 border-solid border-b-[3px] border-b-blue-800">Fähigkeiten</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <SkillItem key={skill} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
