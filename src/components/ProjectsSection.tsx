import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'motion' | 'prompting' | 'interactive' | 'persona'>('all');
  const { sectionIntro, projects } = PORTFOLIO_DATA;

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'motion', label: 'Multi-Modal Motion' },
    { id: 'prompting', label: 'Prompt Architecture' },
    { id: 'interactive', label: 'Agentic UX' },
    { id: 'persona', label: 'Persona Consistency' },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 border-b border-slate-200 bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Intro */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Selected Case Studies
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight [text-wrap:balance]">
            {sectionIntro.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            {sectionIntro.subtitle}
          </p>
        </div>

        {/* Interactive Filter Controls (Segmented Control conforming to Section 1.A) */}
        <div className="mt-10 flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg max-w-fit shadow-xs">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                filter === opt.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid: 4 Clean Minimalist Cards (No hero images, pure typography & structure) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
