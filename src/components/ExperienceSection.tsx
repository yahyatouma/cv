"use client";
import React, { useState } from 'react';

interface Experience { id: number; company: string; position: string; duration: string; description: string }

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  if (!experiences || experiences.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-blue-800 border-solid border-b-[3px] border-b-blue-800">Berufserfahrung</h2>
      {experiences.map((exp, index) => (
        <article
          key={exp.id}
          className={`p-6 mb-8 rounded-lg border-l-4 border-solid cursor-pointer bg-slate-50 border-l-blue-800 duration-[0.3s] ease-[ease] ${hoveredElement === `exp-${index}` ? 'exp-card exp-card--hover' : 'exp-card'}`}
          onMouseEnter={() => setHoveredElement(`exp-${index}`)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div className="flex justify-between items-start mb-3 max-sm:flex-col max-sm:gap-2">
            <div>
              <h3 className="mx-0 mt-0 mb-1 text-xl font-semibold text-gray-800">{exp.position}</h3>
              <p className="m-0 text-lg font-medium text-blue-800">{exp.company}</p>
            </div>
            <span className="px-4 py-2 text-base font-medium text-gray-500 rounded-3xl bg-[white]">{exp.duration}</span>
          </div>
          {exp.description && (
            <p className="m-0 text-base leading-relaxed text-gray-600">{exp.description}</p>
          )}
        </article>
      ))}
    </section>
  );
}
