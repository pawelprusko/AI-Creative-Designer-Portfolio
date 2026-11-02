import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 p-7 md:p-8 space-y-6">
      <div className="space-y-5">
        {/* Category kicker */}
        <div className="text-xs font-mono text-slate-400">
          <span className="uppercase tracking-wider">{project.categoryLabel}</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1.5">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500">
            {project.subtitle}
          </p>
        </div>

        {/* Tags (Zero-Pill Discipline: Clean unboxed text with typographic separators) */}
        <div className="text-xs text-slate-500 font-normal leading-relaxed flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {project.tags.map((tag, idx) => (
            <React.Fragment key={idx}>
              <span className="text-slate-700 font-mono text-[11px]">{tag}</span>
              {idx < project.tags.length - 1 && (
                <span aria-hidden="true" className="text-slate-300">·</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bullet Points */}
        <div className="space-y-3.5 pt-3 text-xs md:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100">
          <div className="space-y-1">
            <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider font-mono">
              Scope
            </span>
            <p className="text-slate-600">{project.scope}</p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider font-mono">
              {project.technicalLogicLabel}
            </span>
            <p className="text-slate-600">{project.technicalLogic}</p>
          </div>

          <div className="space-y-1">
            <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider font-mono">
              {project.impactOrTechLabel}
            </span>
            <p className="text-slate-800 font-medium">{project.impactOrTech}</p>
          </div>
        </div>
      </div>

      {/* Card Actions Footer: Direct links with destination URLs */}
      <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
        <a
          href={project.primaryButton.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[170px] px-4 py-2.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-1.5 shadow-sm"
        >
          <span>{project.primaryButton.label}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
        </a>

        {project.secondaryButton && (
          <a
            href={project.secondaryButton.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition-all active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
          >
            <span>{project.secondaryButton.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        )}
      </div>
    </article>
  );
};
