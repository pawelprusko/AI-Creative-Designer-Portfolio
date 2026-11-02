import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Header / Hero Section (Pure Typography, No Profile Photo, No Contact Me Button) */}
        <Hero />

        {/* 2 & 3. Section Intro & Projects Grid (Clean Typographic Cards with Direct Outbound Links) */}
        <ProjectsSection />

        {/* Methodology & System Agents Architecture (System Agents Logic) */}
        <ArchitectureSection />
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
