"use client";
import React from 'react';

interface AboutSectionProps { summary: string }

export function AboutSection({ summary }: AboutSectionProps) {
  if (!summary) return null;
  return (
    <section className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-neutral-100">Über mich</h2>
      <p className="mx-auto my-0 text-lg leading-relaxed text-neutral-300 max-w-[600px]">{summary}</p>
    </section>
  );
}
