"use client";
import React, { useState } from 'react';

interface PersonalInfo { fullName: string; jobTitle: string; email: string; phone: string; location: string; profileImage: string }
interface CVHeaderProps { personalInfo: PersonalInfo }

export function CVHeader({ personalInfo }: CVHeaderProps) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  return (
    <header className="px-0 py-12 text-center bg-blue-800 shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-[white]">
      <div className="px-4 py-0 mx-auto my-0 max-w-[1200px]">
        <div className="flex gap-8 justify-center items-center mb-4 max-sm:flex-col max-sm:gap-4">
          <img alt="Profilbild" className="object-cover rounded-full border-4 border-solid border-white border-opacity-30 h-[150px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] w-[150px] max-sm:h-[120px] max-sm:w-[120px]" src={personalInfo.profileImage} />
          <div className="text-left max-sm:text-center">
            <h1 className="mx-0 mt-0 mb-2 text-5xl font-[bold] max-sm:text-4xl">{personalInfo.fullName}</h1>
            {personalInfo.jobTitle && (
              <p className="m-0 text-2xl opacity-90 max-sm:text-xl">{personalInfo.jobTitle}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center text-lg opacity-80">
          <span className={`contact-link ${hoveredElement === 'email' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('email')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.email}</span>
          <span className={`contact-link ${hoveredElement === 'phone' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('phone')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.phone}</span>
          <span className={`contact-link ${hoveredElement === 'location' ? 'contact-link--hover' : ''}`} onMouseEnter={() => setHoveredElement('location')} onMouseLeave={() => setHoveredElement(null)}>{personalInfo.location}</span>
        </div>
      </div>
    </header>
  );
}
