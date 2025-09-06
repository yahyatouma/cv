"use client";
import React from 'react';
import { CVHeader } from './components/CVHeader';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ParallaxDecor } from './components/ParallaxDecor';

interface PersonalInfo { fullName: string; jobTitle: string; email: string; phone: string; location: string; profileImage: string; summary: string }
interface Experience { id: number; company: string; position: string; duration: string; description: string }
interface Education { id: number; degree: string; institution: string; year: string }
interface SkillDetail { title: string; description: string; details: string[]; image: string }

export function CVResume() {
  const [personalInfo] = React.useState<PersonalInfo>({
    fullName: 'Yahia Touma',
    jobTitle: '',
    email: 'yahyatouma@gmail.com',
    phone: '0 179 1148239',
    location: 'Friesenstraße 115, Ihlow/Riepe, 26632',
    profileImage: '/images/avatar.svg',
    summary: 'Geboren am 01.06.2001. Motivierter Absolvent mit vielfältigen Bildungserfahrungen und praktischen Kenntnissen in verschiedenen Bereichen.',
  });

  const [skillDetails] = React.useState<Record<string, SkillDetail>>({
    'MS Office': {
      title: 'MS Office Suite',
      description: 'Umfassende Kenntnisse in:',
      details: [
        'Excel - Datenanalyse und Tabellenkalkulation',
        'PowerPoint - Professionelle Präsentationen',
        'Word - Dokumentenerstellung und -bearbeitung',
      ],
      image: '/icons/microsoft.svg',
    },
    'SQL Editor': {
      title: 'SQL Server Management',
      description: 'Datenbankmanagement-Fähigkeiten:',
      details: [
        'Tabellen erstellen und bearbeiten',
        'Datenabfragen und -manipulation',
        'Grundlegende Datenbankadministration',
        'Bei Bedarf kann ich auch komplette Server erstellen',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
    },
    'HTML Editor': {
      title: 'HTML Development',
      description: 'Web-Entwicklung:',
      details: [
        'HTML5 Markup',
        'CSS3 Styling',
        'Responsive Design',
        'Web-Standards und Best Practices',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    },
    'AI Experten': {
      title: 'KI-Spezialist',
      description: 'Künstliche Intelligenz Expertise:',
      details: [
        'Entwicklung automatisierter Arbeitsabläufe',
        'KI-Integration zur Prozessoptimierung',
        'Verbesserung bestehender Systeme durch KI',
        'Beratung bei KI-Implementierung',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png',
    },
    Programmer: {
      title: 'Programmierung',
      description: 'Programmiersprachen und -technologien:',
      details: [
        'Java - Objektorientierte Programmierung',
        'Python - Datenanalyse und Automatisierung',
        'C++ - Systemnahe Programmierung',
        'HTML/CSS - Web-Entwicklung',
        'Schwerpunkt auf modifikativer Programmierung',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/1336/1336494.png',
    },
    'IT Security': {
      title: 'IT-Sicherheit',
      description: 'Cybersecurity und Systemschutz:',
      details: [
        'Bedrohungserkennung und -abwehr',
        'Schutz vor Hackerangriffen',
        'Sicherung kritischer Dateien',
        'Systemupdates und Wartung',
        'Problemdiagnose und -lösung',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/2092/2092063.png',
    },
    'Einbau von Sicherheitsanlagen': {
      title: 'Sicherheits- und Smart Home Systeme',
      description: 'Installation und Konfiguration:',
      details: [
        'Überwachungskameras installieren',
        'Smart Home Beleuchtungssysteme',
        'Intelligente Spiegel und Displays',
        'Bewegungsmelder und Sensoren',
        'Programmierung der zugehörigen Software',
      ],
      image: 'https://cdn-icons-png.flaticon.com/512/1087/1087815.png',
    },
  });

  const [experiences] = React.useState<Experience[]>([
    { id: 1, company: 'Versicherungsbüro', position: 'Berufspraktikum', duration: '05/2023 - 06/2023', description: 'Praktische Erfahrungen im Versicherungswesen und Kundenbetreuung gesammelt' },
    { id: 2, company: 'Lehrbauhof Großräschen', position: 'Zweiwöchiges Praktikum', duration: '11/2018', description: 'Praktische Erfahrungen im Baubereich gesammelt' },
    { id: 3, company: 'Niederlausitzer Handwerkerschaft', position: 'Praktikum Handwerk', duration: '12/2018', description: 'Einblicke in verschiedene handwerkliche Tätigkeiten erhalten' },
  ]);

  const [skills] = React.useState<string[]>([
    'MS Office',
    'SQL Editor',
    'HTML Editor',
    'AI Experten',
    'Programmer',
    'IT Security',
    'Einbau von Sicherheitsanlagen',
    'Arabisch (Muttersprache)',
    'Deutsch (erweiterte Kenntnisse)',
    'Englisch (erweiterte Kenntnisse)',
  ]);

  const [education] = React.useState<Education[]>([
    { id: 1, degree: 'Berufskolleg Duisburg (Höhere Handelsschule)', institution: 'Berufskolleg Duisburg', year: '08/2022 - 06/2024' },
    { id: 2, degree: 'Fachoberschulreife', institution: 'Senftenberg', year: '08/2018 - 06/2021' },
    { id: 3, degree: 'OSZ Sedlitz', institution: 'OSZ Sedlitz', year: '09/2017 - 06/2018' },
    { id: 4, degree: 'Gymnasium', institution: 'Senftenberg', year: '01/2017 - 07/2017' },
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <CVHeader personalInfo={personalInfo} />
      <main className="px-4 py-0 mx-auto my-8 max-w-[800px]">
        <div className="relative">
          {/* Decorative parallax icons */}
          <ParallaxDecor />
        </div>
        <div className="p-12 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <AboutSection summary={personalInfo.summary} />
          <ExperienceSection experiences={experiences} />
          <EducationSection education={education} />
          <SkillsSection skills={skills} skillDetails={skillDetails} />
        </div>
      </main>
    </div>
  );
}
