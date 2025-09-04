"use client";
import React, { useState } from 'react';

interface Education { id: number; degree: string; institution: string; year: string }

export function EducationSection({ education }: { education: Education[] }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  if (!education || education.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-blue-800 border-solid border-b-[3px] border-b-blue-800">Bildung</h2>
      {education.map((edu, index) => (
        <article
          className={`flex justify-between items-center p-6 mb-6 rounded-lg border-l-4 border-solid transition-all cursor-pointer duration-[0.3s] ease-[ease] max-sm:flex-col max-sm:gap-2 max-sm:items-start ${hoveredElement === `edu-${index}` ? 'edu-card edu-card--hover border-l-emerald-600' : 'edu-card border-l-emerald-500'}`}
          key={edu.id}
          onMouseEnter={() => setHoveredElement(`edu-${index}`)}
          onMouseLeave={() => setHoveredElement(null)}
        >
          <div>
            <h3 className="mx-0 mt-0 mb-1 text-xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="m-0 text-base font-medium text-emerald-500">{edu.institution}</p>
          </div>
          <span className="px-4 py-2 text-base font-medium text-gray-500 rounded-3xl bg-[white]">{edu.year}</span>
        </article>
      ))}
    </section>
  );
}
