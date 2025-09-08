"use client";
import React from 'react';
import { CVResume } from './CVResume';
import { PasswordGate } from './components/PasswordGate';

export default function App() {
  return (
    <PasswordGate>
      <CVResume />
    </PasswordGate>
  );
}
