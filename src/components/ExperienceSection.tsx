"use client";
import React from 'react';

interface Experience { id: number; company: string; position: string; duration: string; description: string }

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  if (!experiences || experiences.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="pb-2 mb-6 text-3xl font-semibold text-blue-800 border-solid border-b-[3px] border-b-blue-800">Berufserfahrung</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="rounded-lg border border-solid border-gray-200 p-5 bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="m-0 text-xl font-semibold text-blue-800">{exp.position} · {exp.company}</h3>
              <span className="text-sm text-gray-600">{exp.duration}</span>
            </div>
            <p className="mt-2 mb-0 text-gray-700 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
