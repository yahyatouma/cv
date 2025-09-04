"use client";
import React, { useState } from 'react';

interface SkillDetail { title: string; description: string; details: string[]; image: string }
interface SkillsSectionProps { skills: string[]; skillDetails: Record<string, SkillDetail> }

export function SkillsSection({ skills, skillDetails }: SkillsSectionProps) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  if (skills.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-blue-800 border-solid border-b-[3px] border-b-blue-800">Fähigkeiten</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <div className="inline-block relative" key={skill}>
            <span
              className={`inline-block px-6 py-3 text-base font-medium rounded-3xl transition-all cursor-pointer duration-[0.3s] ease-[ease] text-[white] ${hoveredElement === `skill-${index}` ? 'skill-pill skill-pill--hover' : 'skill-pill'}`}
              onMouseEnter={() => { setHoveredElement(`skill-${index}`); setHoveredSkill(skill); }}
              onMouseLeave={() => { setHoveredElement(null); setHoveredSkill(null); }}
            >
              {skill}
            </span>
            {hoveredSkill === skill && skillDetails[skill] && (
              <div className="absolute top-full left-2/4 p-6 mt-2.5 rounded-xl border-2 border-blue-800 border-solid -translate-x-2/4 bg-[white] max-w-[400px] min-w-[300px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-[1000] max-sm:left-0 max-sm:max-w-[300px] max-sm:min-w-[250px]">
                <div className="flex gap-4 items-center mb-4">
                  <img className="object-contain h-[50px] w-[50px]" src={skillDetails[skill].image} alt={skillDetails[skill].title} />
                  <h3 className="m-0 text-xl font-semibold text-blue-800">{skillDetails[skill].title}</h3>
                </div>
                <p className="mb-3 text-base font-medium text-gray-700">{skillDetails[skill].description}</p>
                <ul className="p-0 m-0">
                  {skillDetails[skill].details.map((detail, detailIndex) => (
                    <li className="relative pl-4 mb-2 text-sm text-gray-600" key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
