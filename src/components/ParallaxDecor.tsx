"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxDecor() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 200]);
  return (
    <div className="parallax-wrap">
      <motion.img src="/icons/react.svg" alt="react" className="parallax-img" style={{ left: 12, top: -20, y: y1 }} />
      <motion.img src="/icons/ts.svg" alt="ts" className="parallax-img" style={{ right: 18, top: 40, y: y2 }} />
      <motion.img src="/icons/tailwind.svg" alt="tw" className="parallax-img" style={{ left: 24, bottom: -20, y: y3 }} />
    </div>
  );
}
