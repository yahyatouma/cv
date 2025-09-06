"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps { summary: string }

export function AboutSection({ summary }: AboutSectionProps) {
  if (!summary) return null;
  return (
    <section className="mb-12 text-center">
      <motion.h2 className="mb-4 text-3xl font-semibold text-neutral-100" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, ease: 'easeOut' }}>Über mich</motion.h2>
      <motion.p className="mx-auto my-0 text-lg leading-relaxed text-neutral-300 max-w-[600px]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: .6, ease: 'easeOut', delay: .05 }}>{summary}</motion.p>
    </section>
  );
}
