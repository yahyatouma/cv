"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PersonalInfo { fullName: string; jobTitle: string; email: string; phone: string; location: string; profileImage: string }
interface CVHeaderProps { personalInfo: PersonalInfo }

export function CVHeader({ personalInfo }: CVHeaderProps) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);

  return (
    <header className="px-0 py-12 text-center bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-[0_6px_18px_rgba(0,0,0,0.15)] text-slate-900" ref={ref}>
      <div className="px-4 py-0 mx-auto my-0 max-w-[1200px]">
        <div className="flex gap-8 justify-center items-center mb-4 max-sm:flex-col max-sm:gap-4">
          <motion.img alt="Profilbild" className="object-cover rounded-full border-4 border-solid border-slate-200 h-[150px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] w-[150px] max-sm:h-[120px] max-sm:w-[120px]" src={personalInfo.profileImage} style={{ y: avatarY }} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} />
          <motion.div className="text-left max-sm:text-center" style={{ y: titleY, opacity: titleOpacity }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: .05 }}>
            <h1 className="mx-0 mt-0 mb-2 text-5xl font-[bold] max-sm:text-4xl text-slate-900">{personalInfo.fullName}</h1>
            {personalInfo.jobTitle && (
              <p className="m-0 text-2xl opacity-90 max-sm:text-xl text-slate-600">{personalInfo.jobTitle}</p>
            )}
          </motion.div>
        </div>
        <motion.div className="flex flex-wrap gap-8 justify-center text-lg opacity-90 text-slate-600" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, ease: 'easeOut' }}>
          <span className={`contact-link ${hoveredElement === 'email' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('email')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.email}</span>
          <span className={`contact-link ${hoveredElement === 'phone' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('phone')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.phone}</span>
          <span className={`contact-link ${hoveredElement === 'location' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('location')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.location}</span>
        </motion.div>
        <motion.div className="mt-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, ease: 'easeOut', delay: .05 }}>
          <button className="accent-btn" onClick={() => window.print()}
            onMouseEnter={() => setHoveredElement('download')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            Lebenslauf herunterladen
          </button>
        </motion.div>
      </div>
    </header>
  );
}
